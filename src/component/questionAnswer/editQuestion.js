import React from 'react';
import {withRouter} from 'react-router-dom'
import '../../asset/css/questionAnswer/eidtQuestion.scss'
import {Toast, WhiteSpace, WingBlank, Button} from "antd-mobile";

class EditQuestion extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: ""
        }
    }

    render() {
        return (
            <div className={"editQuestion"}>
                <div className={"tab"}>
                    <span onClick={()=>{
                        this.props.history.go(-1)
                    }}>取消</span>
                    <span onClick={this.handleOnClick.bind(this)}>下一步</span>
                </div>

                <div className={"edit-wrap"}>
                    <input className={"edit-box"} type="text" ref={"val"} placeholder={"请写下你的问题并用问号结尾"}/>
                </div>
            </div>
        )
    }
    handleOnClick(){
        if(!this.refs.val.value){
            Toast.info('请输入你的问题',6);
            document.getElementsByClassName("am-toast-text")[0].style.background="rgb(249, 103, 80)"

        }else{
            this.props.history.push('/question/description/'+this.refs.val.value)
        }
    }
}
export default withRouter(EditQuestion)
/*import React,{Component} from 'react'
import ProductItem from '../../common/high-order/Image'

import './style.css'
class Product extends Component {

    constructor(props) {
        super(props)
        this.updateViewport = this.updateViewport.bind(this)
    }
    render() {
        const items = [
            { title: ' 图片1', image: 'imageSrc1' },
            { title: '图片 2', image: 'imageSrc1' },
            { title: '图片 3', image: 'imageSrc1' },
            { title: '图片 4', image: 'imageSrc1' },
            { title: '图片 5', image: 'imageSrc1' },
            { title: '图片 6', image: 'imageSrc1' },
            { title: '图片 7', image: 'imageSrc1' },
            { title: '图片 8', image: 'imageSrc1' },
            { title: '图片 9', image: 'imageSrc1' },
            { title: '图片 10', image: 'imageSrc1' }
        ];
        return (

            <div>
                <h2>延迟加载</h2>
                <ul>
                    {
                        items.map((item,index) => {
                            return (
                                <ProductItem key={index}
                                             title={item.title}
                                             image={item.image}
                                             viewport={this.state.viewport}
                                />
                            )
                        })
                    }
                </ul>
            </div>

        )
    }
    updateViewport() {
        this.setState({
            viewport : {
                viewTop: window.pageYOffset,
                viewBottom: window.innerHeight + window.pageYOffset
            }
        })
    }

    componentWillMount() {
        window.addEventListener('scroll', this.updateViewport, false);
        window.addEventListener('resize', this.updateViewport, false);
        this.updateViewport();
    }
    componentDidMount() {
        this.updateViewport();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateViewport);
        window.removeEventListener('resize', this.updateViewport);
    }

}

export default Product;*/
