
import React from "react";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link}from "react-router-dom";
import LazyLoad from 'react-lazyload';
import actionCreator from "../../../store/actionCreator";
import "../../../asset/css/learnBaking/cake.scss"

class Cake extends React.Component {
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div id="cake">
                {
                    this.props.variousList.map((v,i)=>(

                            <dl key={i}>
                                <Link to={"/lesson/"+v.educationCourseId+"/"+v.clientId}>
                                <dt>
                                    <LazyLoad once height="225" width={"160px"}
                                              placeholder={<div className={"loadingBox"}><img
                                                  src={this.imgLoading}/></div>}>
                                        <img src={v.verticalImages} alt=""/>
                                    </LazyLoad>
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
    componentDidMount(){
        console.log(this.props.categoryId);
        this.props.getVariousList(this.props.categoryId);
    }
    componentWillReceiveProps(nextProps){

    }
}
export default connect((state) => ({variousList: state.learnBaking.variousList}),
    (dispatch) => (bindActionCreators(actionCreator,dispatch)))(Cake)

