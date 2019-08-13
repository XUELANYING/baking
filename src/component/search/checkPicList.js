import React from "react";
import "../../asset/css/search/checkPicList.scss";
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
                new Swiper('.lunboRecipe', {
                    pagination: {
                        el: '.pages',
                    },
                    click:true,
                    initialSlide :this.props.index,
                    bulletActiveClass: 'my-bullet-active',
                    on: {
                        touchEnd: function (event) {
                            event.stopPropagation()
                        },
                        click:()=>{
                            this.props.message()
                        }
                    }
                });
            })
        }
    }
    render() {
        let {swiperImages} = this.state
        return (
            <div className="swiper-container lunboRecipe">
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