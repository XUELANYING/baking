import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import actionCreator from "../../store/actionCreator";
import "../../asset/css/learnBaking/showList.scss";
import LazyLoad from 'react-lazyload';

class ShowList extends React.Component {
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div id="l-list">
                <p><span>推荐课程</span></p>
                <div className={"sect"}>
                    {
                        this.props.recommendList.map((v,i)=>(
                            <Link  key={i} to={"/lesson/"+v.courseId+"/"+v.clientId}>
                                <dl>
                                    <dt>
                                        <LazyLoad once height="70" placeholder={<div style={{position:"relative"}} className={"loadingBox"}><img src={this.imgLoading}/></div>}>
                                            <img src={v.coverImage} alt="" />
                                        </LazyLoad>
                                            <i>{v.collectNum>1000?"1000+在学":v.collectNum+"在学"}</i>
                                    </dt>
                                    <dd>{v.coverTitle}</dd>
                                </dl>
                            </Link>
                        ))
                    }
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getRecommendList();
        // console.log(1996,this.props.recommendList);

    }
}
export default connect((state) => ({recommendList: state.learnBaking.recommendList}),
    (dispatch) => (bindActionCreators(actionCreator, dispatch)))(ShowList)

