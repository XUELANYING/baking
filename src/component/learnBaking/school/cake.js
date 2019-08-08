import React from "react";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link}from "react-router-dom";
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
                                <Link to={v.link}>
                                <dt>
                                    <img src={v.verticalImages} alt=""/>
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
// console.log('ahah',this.props.categoryId)
    }
}
export default connect((state) => ({variousList: state.learnBaking.variousList}),
    (dispatch) => (bindActionCreators(actionCreator,dispatch)))(Cake)