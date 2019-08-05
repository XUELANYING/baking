import React,{Component} from "react";
import "../../../asset/css/search/recipeDetail.scss";
import {connect} from "react-redux";
// import getClassifyInfo from "../../../store/actionCreator/search/classify";
import {bindActionCreators} from "redux";
import {Link} from "react-router-dom";
import recipeDetailInfo,{getUserList,getMoreCommendInfo,getMoreVideoInfo,getCommendList} from "../../../store/actionCreator/search/recipeDetail"

class recipeDetail extends Component{
    constructor(){
        super();
        this.state={
            quantity:1,
            material:[],
            step:[],
            dish:[],
            recipe:[],
            ownRecipe:[],
            videoList:[],
            comment:{},
            likeNum:0,
            rewardNum:0
        }
    }
    componentDidMount(){
        let {clientId,contentId} = this.props.match.params;
        this.props.getUserList(contentId).then(()=>{
            let recipeDetail = this.props.recipeDetail;
            // console.log(this.props)
            this.setState({
                quantity:recipeDetail.quantity,
                material:recipeDetail.material,
                step:recipeDetail.step,
                dish:recipeDetail.dish,
                recipe:recipeDetail.recipe,
                rewardNum:recipeDetail.rewardNum,
                likeNum:recipeDetail.likeNum
            });
        });

        this.props.getMoreCommendInfo(clientId,contentId).then(()=>{
            let recipeDetail = this.props.recipeDetail;
            this.setState({
                ownRecipe:recipeDetail.ownRecipe,
            });
        });

        this.props.getMoreVideoInfo().then(()=>{
            this.setState({
                videoList:this.props.recipeDetail.videoList
            })
        });

        this.props.getCommendList(contentId).then(()=>{
            this.setState({
                comment:this.props.recipeDetail.commend
            })
        });
    }
    changeNum(){

    }
    render(){
        // console.log(this.props.match.params)
        let {recipeDetail} = this.props;
        let commentList = this.state.comment.data || [];
        let {quantity,material,step,dish,recipe,ownRecipe,videoList,comment,rewardNum,likeNum} = this.state;
        // console.log(recipe)
        return(
            <div className={"recipeDetail"}>
                <div className="detailTop">
                    <div className="topWrap">
                        <span><img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48"/></span>
                        <div className="collect">
                            <div>收藏</div>
                        </div>
                    </div>
                </div>

                <div className="detailWrap clear_fix">
                    <div className="detailCon clear_fix">
                        <div className="floor1 clear_fix">
                            <div className="imgs clear_fix">
                                <img src={recipeDetail.coverImage} alt=""/>
                            </div>
                            <div className="description clear_fix">
                                <div className="coverTitle clear_fix">
                                    <h2>{recipeDetail.coverTitle}</h2>
                                </div>
                                <div className="detail clear_fix">
                                    <div className="follow">关注</div>
                                    <div className="avator">
                                        <img src={recipeDetail.clientImage} alt=""/>
                                    </div>
                                    <h3>{recipeDetail.clientName}</h3>
                                </div>
                                <div className="context clear_fix">
                                    <div className="content clear_fix">{recipeDetail.coverSummary}</div>
                                </div>
                                <div className={"makings clear_fix"}>
                                    <h4>食用材料</h4>
                                    <div className="quantity">
                                        <div className="quantityDetail">
                                            <div className="doChange"><div className={"reduce"}></div></div>
                                            <div className="num">
                                                <input type="text" value={quantity} onChange={this.changeNum.bind(this)}/>
                                            </div>
                                            <div className="doChange"><div className={"reduce"}></div><div className={"add"}></div></div>
                                            <span>（份量/份）</span>
                                        </div>
                                    </div>
                                    <div className="measure clear_fix">
                                        {
                                            material.map((v,i)=>(
                                                <div className="floor" key={i}>
                                                    <div>{v.name}</div>
                                                    <div>{v.weight}</div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="stepWrap clear_fix">
                                <div className="stepContainer clear_fix">
                                    {
                                        step.map((v,i)=>(
                                            <div className="box" key={i}>
                                                <h5>步骤{i+1}</h5>
                                                <div className={"stepImg"}>
                                                    <img src={v.image} alt=""/>
                                                </div>
                                                <div className="troduction clear_fix">
                                                    <div className={"clear_fix"}>
                                                        <p>{v.text}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="tip">小贴士</div>
                            <div className="tipContent clear_fix">
                                <div className="box clear_fix">
                                    <p>{recipeDetail.tip}</p>
                                </div>
                            </div>
                            <div className="title">
                                <span>作业</span>
                                <strong>查看更多</strong>
                            </div>
                            <div className="homeworkList">
                                <div className="showList">
                                    <div className="listInfo">
                                        {
                                            dish.map((v,i)=>(
                                                <div className="list" key={i}>
                                                    <div className="imgs">
                                                        <img src={v.coverImage} alt=""/>
                                                    </div>
                                                    <div className="cilent">
                                                        <div className="avator">
                                                            <img src={v.clientImage} alt=""/>
                                                        </div>
                                                        <div className="sign">{v.clientName}</div>
                                                    </div>
                                                    <div className="info">{v.coverSummary}</div>
                                                    <div className="thumbUp">
                                                        <div className="thumbs">
                                                            <img src="https://image.hongbeibang.com/FmwV3erfnWllNy3UkmPLji-iWRn8?imageMogr2/strip/thumbnail/640x640" alt=""/>
                                                        </div>
                                                        <div className="upNum">{v.likeNum}</div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="uploadDone">
                                    <div className="btn">
                                        <div className="cinema">
                                            <img src="https://image.hongbeibang.com/FstDrTWNqnY76dJTq964YhL5zr2A?200X200&imageView2/1/w/48/h/48" alt=""/>
                                        </div>
                                        <div className={"myWork"}>上传我的作品</div>
                                    </div>
                                </div>
                            </div>
                            {/*可优化为组件*/}
                            <div className="title">
                                <span>食谱推荐</span>
                                <strong>查看更多</strong>
                            </div>
                            <div className="commendList">
                                <div className="listBox">
                                    {
                                        recipe.map((v,i)=>(
                                            <div className="listInfo" key={i}>
                                                <Link to={"/recipe/"+v.clientId+"/"+v.contentId}>
                                                    <div className="infoImg">
                                                        <img src={v.image} alt=""/>
                                                    </div>
                                                    <div className="charactor">{v.title}</div>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="title">
                                <span>作者食谱</span>
                                <strong>查看更多</strong>
                            </div>
                            <div className="commendList">
                                <div className="listBox">
                                    {
                                        ownRecipe.map((v,i)=>(
                                            <div className="listInfo" key={i}>
                                                <Link to={"/recipe/"+v.clientId+"/"+v.contentId}>
                                                    <div className="infoImg">
                                                        <img src={v.coverImage} alt=""/>
                                                    </div>
                                                    <div className="charactor">{v.coverTitle}</div>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            {/*推荐课程*/}
                            <div className="title">
                                <span>课程推荐</span>
                                <strong>查看更多</strong>
                            </div>
                            <div className="commendVideoList">
                                <div className="VideoBox">
                                    {
                                        videoList.map((v,i)=>(
                                            <div className="VideoInfo" key={i}>
                                                <div className="VideoImg">
                                                    <img src={v.coverImage} alt=""/>
                                                </div>
                                                <div className="learning">{v.buyNum>1000?<span>1000+</span>:<span>{v.buyNum}</span>}<span>在学</span></div>
                                                <div className="charactor">{v.coverTitle}</div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="commentWrap clear_fix">
                                <div className="commentTop">帮友评论</div>
                                <div className="commentBar">
                                    <div className="barTitle">
                                        <div className="barContent">
                                            <div className="barImg">
                                                <img src="https://image.hongbeibang.com/FqGb2jBAO5iaoaxD6zSC2QFyhJ-8?54X54&imageView2/1/w/54/h/54" alt=""/>
                                            </div>
                                            <div className="barNum">{likeNum}</div>
                                        </div>
                                    </div>
                                    <div className="barTitle">
                                        <div className="barContent">
                                            <div className="barImg">
                                                <img src="https://image.hongbeibang.com/FnacfRCC7inRIVSCQEET0ZM6RanM?54X54&imageView2/1/w/54/h/54" alt=""/>
                                            </div>
                                            <div className="barNum">{rewardNum}</div>
                                        </div>
                                    </div>
                                    <div className="barTitle">
                                        <div className="barContent">
                                            <div className="barImg">
                                                <img src="https://image.hongbeibang.com/FqTdO6uI2bG732ZjIO4ascLh2DcE?54X54&imageView2/1/w/54/h/54" alt=""/>
                                            </div>
                                            <div className="barNum">{comment.count}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="commentInfoList clear_fix">
                                <div className="borders"></div>
                                <ul className={"clear_fix"}>
                                    {
                                        commentList.map((v,i)=>(
                                            <li className={"clear_fix"} key={i}>
                                                <div className="top">
                                                    <div className="avator">
                                                        <img src={v.clientImage} alt=""/>
                                                    </div>
                                                    <div className="nickName">
                                                        <div className={"name"}>{v.clientName}</div>
                                                        <div className={"createTime"}>{v.modifyTime}</div>
                                                    </div>
                                                </div>
                                                <div className="content">{v.coverSummary}</div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({recipeDetail}){
    return{
        recipeDetail
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(recipeDetailInfo,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(recipeDetail);