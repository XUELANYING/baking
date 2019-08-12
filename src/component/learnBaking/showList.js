
import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import LazyLoad from 'react-lazyload';
import actionCreator from "../../store/actionCreator";
import "../../asset/css/learnBaking/showList.scss"


class ShowList extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div className="l-list">
                <p><span>推荐课程</span></p>
                <div className={"sect"}>
                    {
                        this.props.recommendList.map((v, i) => (
                            <Link key={i} to={"/lesson/" + v.courseId + "/" + v.clientId}>
                                <dl>
                                    <dt>
                                        <LazyLoad once height="225" width={"160px"}
                                                  placeholder={<div className={"loadingBox"}><img
                                                      src={this.imgLoading}/></div>}>
                                            <img src={v.coverImage} alt=""/>
                                        </LazyLoad>
                                        <i>{v.collectNum > 1000 ? "1000+在学" : v.collectNum + "在学"}</i>
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

    componentDidMount() {
        this.props.getRecommendList();
    }
}

export default connect((state) => ({recommendList: state.learnBaking.recommendList}),
    (dispatch) => (bindActionCreators(actionCreator, dispatch)))(ShowList)


