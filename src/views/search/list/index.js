import React,{Component} from "react";
import "../../../asset/css/search/list.scss";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import getSearchInfo,{getDetailList,getVideoList} from "../../../store/actionCreator/search/search";
import {Link} from "react-router-dom";
import SearchRecipeList from "./searchRecipeList";
import SearchAnswerList from "./searchAnswerList";
import SearchHelpFriends from "./searchHelpFriends";

class List extends Component{
    constructor(props){
        super(props);
        this.state={
            keyword:props.match.params.keyword,
            isShowBar:false,
            showIndex:0,
            threeBarInfo:["食谱","问答","帮友"]
        }
    }
    changeInputVal(){
        this.setState({
            keyword:this.refs.recipe.value
        });
    }
    changeKeyword(e){
        if(e.nativeEvent.keyCode === 13){
            this.props.history.push("/search/recipe/"+this.state.keyword)
        }
    }
    changeListContent(){
        this.setState({
            isShowBar:!this.state.isShowBar
        })
    }
    getOtherSth(index){
        this.setState({
            showIndex:index,
            isShowBar:false
        })
    }
    render(){
        let {keyword,threeBarInfo} = this.state;
        return(
            <div className={'listWrap'}>

                <div className="searchBoxC">
                    <p className={"backImg"} onClick={()=>this.props.history.go(-1)}>
                        <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt=""/>
                    </p>
                    <div className={"searchText"}>
                        <span onClick={()=>this.setState({keyword:""})}>
                            <img src="https://image.hongbeibang.com/Fi6tDLktzhDiUQoin--ZelAIFSsr?94X94&imageView2/1/w/80/h/80" alt=""/>
                        </span>
                        <input type="text" ref={"recipe"} placeholder={"搜索食谱"} value={keyword} onChange={this.changeInputVal.bind(this)} onKeyPress={this.changeKeyword.bind(this)}/>
                    </div>
                    <span className={"spans"} onClick={this.changeListContent.bind(this)}>
                        <strong>{this.state.threeBarInfo[this.state.showIndex]}</strong>
                        <b>
                            <img src="https://image.hongbeibang.com/FnX5qtpWKlcHoDYC5KDFHulWfEZl?32X32&imageView2/1/w/32/h/32" alt=""/>
                        </b>
                    </span>
                    {
                        this.state.isShowBar?<div className="contentBar">
                            <div className="threeBar">
                                {
                                    threeBarInfo.map((v,i)=>(
                                        <div className="barFloor" key={i} onClick={this.getOtherSth.bind(this,i)}>
                                            {this.state.showIndex===i?<img src="https://image.hongbeibang.com/FuWlyZPRZXaM47paYt6w8V4diI1_?28X28&imageView2/1/w/28/h/28" alt=""/>:null}
                                            <span>{v}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>:null
                    }
                </div>
                {
                    this.state.showIndex===0?<SearchRecipeList showIndex={this.state.showIndex} {...this.props}></SearchRecipeList>:this.state.showIndex===1?<SearchAnswerList {...this.props}></SearchAnswerList>:<SearchHelpFriends {...this.props}></SearchHelpFriends>
                }

            </div>

        )
    }
}

function mapStateToProps({search}){
    return{
        search
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(getSearchInfo,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(List);
