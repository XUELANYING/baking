import React from "react";
import KindList from "../kindList"
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Swiper from "swiper";
import actionCreator from "../../../store/actionCreator";
import "swiper/dist/css/swiper.min.css";
import "../../../asset/css/learnBaking/swiperstyle.scss"
import {withRouter} from "react-router-dom"
 class Recomme extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div className="swiper-height swiper-container">
                    <div className="swiper-wrapper" >
                        {

                            this.props.swiperList.slice(0,6).map((v,i)=>(
                              <div className="swiper-slide" key={i}>
                                  <img src={v.images[0]} alt="" onClick={() => {

                                      this.props.history.replace("/lesson/"+v.educationCourseId+"/"+v.clientId)

                                  }}/>
                           </div>
                        ))
                        }
                    </div>

                    <div className="swiper-pagination"></div>
                </div>
                <KindList></KindList>
            </div>
        )
    }
    componentWillMount(){
        this.props.getSwiperList();
    }
    componentDidUpdate(){
        let swiper = new Swiper('.swiper-container', {
            // centeredSlides: true,

            // loop:true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });


    }
}
export default withRouter(connect((state) => ({swiperList: state.learnBaking.swiperList}),
    (dispatch) => (bindActionCreators(actionCreator, dispatch)))(Recomme))
