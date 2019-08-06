import React from 'react';
import Cake from "../../component/learnBaking/school/cake.js";
import Recomme from "../../component/learnBaking/school/recomme.js";
import "../../asset/css/learnBaking/university.scss"

export default class University extends React.Component{
    constructor(props){
        super(props);
        this.data=[
            {
                title:"推荐",
            },
            {
                title:"蛋糕",
                categoryId:10163
            },
            {
                title:"甜品点心",
                categoryId:10162
            },
            {
                title:"面包",
                categoryId:10164
            },
            {
                title:"中式点心",
                categoryId:10166
            },
            {
                title:"面食",
                categoryId:10173
            },
            {
                title:"其他",
                categoryId:10180
            },
        ]
        this.state = {
            index:0,
        }
    }
    handlerChange(index){
        this.setState({
            index
        })
    }
    render(){
        return (
            <div className="sec">
                <div id="nav">
                    <div className="nav-child">
                        {
                            this.data.map((v,i)=>{
                                return (
                                    <div key={i}>
                                    <div id="nav-list" onClick={this.handlerChange.bind(this,i)} style={{color:i===this.state.index?"black":"gray",borderBottom:i===this.state.index?"2px solid red":""}} key={i}>{v.title}</div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
                <div className="wrap">
                    {
                        this.state.index===0?<Recomme></Recomme>:<div></div>
                    }
                    {
                        this.data.map((v,i)=>{
                            return(
                                <div key={i}>
                                    {
                                        this.state.index===i?<Cake categoryId={this.data[i].categoryId}></Cake>:null
                                    }

                                </div>
                            )
                        })

                    }

                </div>
        </div>)
    }
}