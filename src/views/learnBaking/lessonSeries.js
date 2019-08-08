import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import actionCreator from "../../store/actionCreator";
// import {Link}from "react-router-dom";
import Catalog from "../../component/learnBaking/course/catalog";
import Introduce from "../../component/learnBaking/course/introduce";
import Task from "../../component/learnBaking/course/task";
import "../../asset/css/learnBaking/lessonSeries.scss"

class LessonSeries extends React.Component {
    constructor(){
        super();
        this.data=[
            {
                tit:"课程介绍",
                component:Introduce
            },
            {
                tit:"课程目录",
                component:Catalog
            },
            {
                tit:"学员作业",
                component:Task
            }

        ];
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
        return(
            <div className={"lesson"}>
                {
                    <div className={"lesson-wrap"}>
                        <img src={this.props.lessonLists.image} alt=""/>
                        <div className={"biaoti"}>
                            <p >{this.props.lessonLists.title}</p>
                            <div className={"study"}>
                                <img className={"icon"} src="https://image.hongbeibang.com/FgRQxfAWq4kOdLc5xd_GxWm03Vs_?54X54&imageView2/1/w/54/h/54" alt=""/>
                                {this.props.lessonLists.buyNum>1000?"1000+人在学":this.props.lessonLists.buyNum+"人在学"}
                            </div>
                        </div>
                        <div className="adv">
                            <h6 className={"ad-tit"}><em></em><a >永久无限次回看</a></h6>
                            <h6 className={"ad-tit"}><em></em><a>购买后即看</a></h6>
                            <h6 className={"ad-tit"}><em></em><a>烘焙帮自营课程</a></h6>
                            <h6 className={"ad-tit"}><em></em><a>高效的学习体验</a></h6>
                            <h6 className={"ad-tit"}><em></em><a>分步骤学习</a></h6>
                            <h6 className={"ad-tit"}><em></em><a>专注打造唯一品类</a></h6>
                        </div>
                    </div>
                }
                <div className={"comSwitch"}>
                    <ul className={"switchName"}>
                            {
                                this.data.map((v,i)=>{
                                    return (
                                        <li className={"btn"} onClick={this.handlerChange.bind(this,i)}  style={{color:i===this.state.index?"black":"gray",borderBottom:i===this.state.index?"2px solid red":""}} key={i}>{v.tit}</li>
                                    )
                                })
                            }
                    </ul>
                        <div >
                            {
                                this.data.map((v,i)=>{
                                    return(
                                        <div  style={{display:i===this.state.index?"block":"none"}} key={i}>
                                            {<v.component />}
                                        </div>
                                    )
                                })
                            }
                        </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getLessonList();
        console.log(55,this.props.getLessonList);

    }
}
export default connect((state) => ({lessonLists: state.learnBaking.lessonLists}),
    (dispatch) => (bindActionCreators(actionCreator, dispatch)))(LessonSeries)