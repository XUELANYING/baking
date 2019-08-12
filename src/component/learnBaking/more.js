import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link,withRouter}from "react-router-dom";
import actionCreator from "../../store/actionCreator";
import "../../asset/css/learnBaking/cake.scss";

class More extends React.Component {
    constructor(props){
        super(props);
        this.state={
            moreList:[]
        }
    }
    render(){
        return(
            <div id="cake">
                {
                    this.props.moreList.map((v,i)=>(
                        <dl key={i}>
                            <Link to={"/lesson/"+v.educationCourseId+"/"+v.clientId}>
                                <dt>
                                  <img src={v.image} alt=""/>
                                    <i>{v.buyNum>1000?"1000+人参加":v.buyNum+"人参加"}</i>
                                </dt>
                                <dd>{v.shareTitle}</dd>
                            </Link>
                        </dl>

                    ))
                }
            </div>
        )
    }
    componentWillMount(){
        this.props.getMoreList(this.props.match.params.id);
    }
}

export default connect((state) => ({moreList: state.learnBaking.moreList}),
    (dispatch) => (bindActionCreators(actionCreator,dispatch)))(withRouter(More))