import React from "react";
import KindList from "../kindList"
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import actionCreator from "../../../store/actionCreator";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import "../../../asset/css/learnBaking/swiperstyle.scss"
 class Recomme extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div>
                <div  className="swiper-container">
                    <div className="swiper-wrapper" >
                        {
                            this.props.swiperList.slice(0,5).map((v,i)=>(
                                <div className="swiper-slide" key={i}>
                                    {
                                        v.item.map((v1,i)=>(
                                            <img  key={i} src={v1.image} alt=""/>
                                        ))
                                    }
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
        // this.props.getSwiperList();
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
export default connect((state) => ({swiperList: state.learnBaking.swiperList}),
    (dispatch) => (bindActionCreators(actionCreator, dispatch)))(Recomme)