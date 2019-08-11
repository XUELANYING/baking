import React,{Fragment} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import LazyLoad from 'react-lazyload';
import {Link, withRouter} from "react-router-dom";
import actionCreator from "../../store/actionCreator";
import "../../asset/css/learnBaking/showList.scss"
import Loading from '../common/loading'

class KindList extends React.Component {
    constructor() {
        super();
        this.state = {
            kindList: [],
            show:true
        }
    }

    render() {
        return (
            <Fragment>
                {
                    this.props.kindList.splice(1, this.props.kindList.length).map((v, i) => (
                        <div className="l-list" key={i}>
                            <p>
                                <span>{v.title}</span>
                                <em onClick={() => {
                                    this.props.history.push("/university/allLessons/" + v.categoryId)
                                }}>查看全部</em>
                            </p>
                            <div className={"sect"}>
                                {v.item.map((v1, i) => (
                                    <Link key={i} to={"/lesson/" + v1.educationCourseId + "/" + v1.clientId}>
                                        <dl>
                                            <dt>
                                                <LazyLoad style={{background: "#ccc"}} once height="225" width={"160px"}
                                                          placeholder={<div className={"loadingBox"}><img
                                                              src={this.imgLoading}/></div>}>
                                                    <img src={v1.image} alt=""/>
                                                </LazyLoad>
                                                <i>{v1.buyNum > 1000 ? "1000+在学" : v1.buyNum + "在学"}</i>
                                            </dt>
                                            <dd>{v1.shareTitle}</dd>
                                        </dl>
                                    </Link>
                                ))
                                }
                            </div>
                        </div>
                    ))
                }

            </Fragment>
        )
    }
    componentDidMount() {
        this.props.getKindList();
    }
}

export default connect((state) => ({kindList: state.learnBaking.kindList}),
    (dispatch) => (bindActionCreators(actionCreator, dispatch)))(withRouter(KindList))
