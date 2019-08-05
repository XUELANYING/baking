import React from 'react';
import {withRouter} from 'react-router-dom'
import '../../asset/css/questionAnswer/eidtQuestion.scss'

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
                        this.props.history.push('/questionAndAnswer')
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
        this.props.history.push('/question/description/'+this.refs.val.value)
    }
}
export default withRouter(EditQuestion)
