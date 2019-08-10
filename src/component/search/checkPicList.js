import React from "react";
import "./checkPicList.scss";
import Swiper from "swiper";

export default class CheckoutPicList extends React.Component {
    constructor(){
        super();
        this.state = {
            swiperImages:[]
        }
    }
    componentDidMount(){
        if(this.props.images.length!==0){
            this.setState({
                swiperImages:this.props.images
            },()=>{
                var mySwiper = new Swiper('.lunbo', {
                    pagination: {
                        el: '.pages',
                    },
                });
            })
        }
    }
    getDirective(){
        this.props.message()
    }
    render() {
        let {swiperImages} = this.state
        return (
            <div className="swiper-container lunbo" onClick={this.getDirective.bind(this)}>
                <div className="swiper-wrapper lunbo-wrapper clear_fix">
                    {
                        swiperImages.map((v,i)=>(
                            <div className="swiper-slide" key={i}>
                                <img src={v} alt=""/>
                            </div>
                        ))
                    }
                </div>
                <div className="swiper-pagination pages"></div>
            </div>
        )
    }
}