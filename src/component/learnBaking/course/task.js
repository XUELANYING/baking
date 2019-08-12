import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import actionCreator from "../../../store/actionCreator";
import {Link}from "react-router-dom";

 class Task extends React.Component {
    render() {
        return (
            <div className={"ta-wrap"}>
                    {
                        this.props.taskLisk.map((v,i)=>(
                            <div key={i} className="ta-com">
                                <Link exact={0} className={"ca-l"} to={"/school/"+v.contentId}>
                                <dl className={"ta-out"}>
                                    <dt>
                                             <img src={v.image} alt=""/>
                                    </dt>
                                    <dd className={"ta-tit"}>
                                        <h4><img src={v.clientImage} alt=""/><em>{v.clientName}</em></h4>
                                        <p>{v.introduce?v.introduce:"零基础也能100%成功的新手专栏"}</p>
                                        <h5><img src="https://image.hongbeibang.com/Fj4ZDoVywR5b3huYgsOzfnPalXRt?76X76&imageView2/1/w/76/h/76|imageView2/1/w/76/h/76"  alt=""/><span>{v.likeNum}</span></h5>
                                    </dd>
                                </dl>
                                </Link>
                            </div>
                        ))
                    }
            </div>
        )
    }
    componentDidMount(){
        this.props.getTaskList();
    }
}
export default connect((state) => ({taskLisk: state.learnBaking.taskLisk}),
    (dispatch) => (bindActionCreators(actionCreator, dispatch)))(Task)
