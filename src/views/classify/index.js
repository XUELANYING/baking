import React,{Component} from "react";
import "../../asset/css/search/classify.scss"
import {Route,BrowserRouter as Router,Link} from "react-router-dom"
import getClassifyInfo,{getCommendList,getClassifyList} from "../../store/actionCreator/search/classify";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Classify extends Component{
    constructor(){
        super();
        this.index=0;
        this.state={
            commendList:[],
            allInfo:[]
        }
    }
    componentDidMount(){
        this.props.getCommendList();
        this.props.getClassifyList()
    }
    componentWillReceiveProps(nextProps){
        let list = [];
        list.push(nextProps.classify.commend[0])
        this.setState({
            commendList:list,
            allInfo:nextProps.classify.commend
        })
    }
    render(){
        let {classify}  = this.props.classify;
        let {commendList}  = this.state;
        return(
            <div className={"classifyWrap"}>
                {/*搜索组件*/}
                <div className="searchBox">
                    <p className={"backImg"}>
                        <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt=""/>
                    </p>
                    <div className={"searchText"}>
                        <input type="text" placeholder={"搜索食谱/食材，烘焙/家常菜一应俱全"}/>
                    </div>
                    <span></span>
                </div>

                <div className="classifyList clear_fix">
                    <div className="classifyName">
                        {
                            classify.map((v,i)=>(
                                <span key={i} onClick={this.changeList.bind(this,i)} className={i===this.index?"activeSpan":"classifyTitles"}>{v}</span>
                            ))
                        }
                    </div>

                    <div className="classifyList">
                        {
                            commendList.map((v,i)=>(
                                <div className={"lists clear_fix"} key={i}>
                                    <div className="listTitle">{v.name}</div>
                                    <div className="listCon clear_fix">
                                        {
                                            v.classifys?v.classifys.map((item,i)=>(
                                                <div className={"box"} key={item.classifyId}>
                                                    <p><img src={item.image} alt={item.name}/></p>
                                                    <span>{item.name}</span>
                                                </div>
                                            )):v.list.map((item,i)=>(
                                                <div className={"box"} key={item.classifyId}>
                                                    <p><img src={item.image} alt={item.name}/></p>
                                                    <span>{item.name}</span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
    changeList(index){
        this.index=index;
        let arr = [];
        if(index===0) {
            arr.push(this.state.allInfo[index])
        }else{
            arr = this.state.allInfo[index].list
        }
        this.setState({
            commendList:arr
        })
    }
}

function mapStateToProps({classify}){
    return{
        classify
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(getClassifyInfo,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Classify)