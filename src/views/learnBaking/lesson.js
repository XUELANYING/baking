import React, {Component} from 'react';
import "@asset/css/learnBaking/lesson.scss"
import actionCreator from "@store/actionCreator";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import BScroll from "better-scroll"
import {withRouter, Link} from "react-router-dom"
import PlayUrl from "../../component/learnBaking/lesson/playUrl"
import TrySeeUrl from "../../component/learnBaking/lesson/trySeeUrl";
import LoadingMore from "@component/common/loadingMore";
class Lesson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentId: 10497,
            isVideo: true
        };
    }

    render() {
        console.log(this, 111)
        return (
            this.props.lessonList.shareTitle ? <div className={"lessonCom"}>
                {
                    this.state.isVideo ? <PlayUrl/> : <TrySeeUrl/>
                }
                <div className={"titles"}>
                    <p>{this.state.isVideo ? this.props.lessonList.shareTitle : this.props.lessonList.trySeeTitle}</p>
                    <div className={"On-line"}>
                        <div className={"On-line-l"}>
                            <img
                                src="https://image.hongbeibang.com/FgRQxfAWq4kOdLc5xd_GxWm03Vs_?54X54&imageView2/1/w/54/h/54"
                                alt=""/>
                            <span>1000+人在学</span>
                        </div>
                        <div className={"On-line-r"}>
                            <img
                                src="https://image.hongbeibang.com/FvlaRxbO9YVI0n8uMoFepUzffkWK?imageView2/1/w/640/h/640"
                                alt=""/>
                            <span onTouchEnd={this.handOnTouch.bind(this)}>试看课程</span>
                        </div>
                    </div>
                </div>
                <div className={"Study"}>
                    <div className="study_con">
                        <div className="study_top">
                            <p>永久无限次回看</p>
                            <p>购买后即看</p>
                            <p>烘焙帮自营课程</p>
                        </div>
                        <div className="study_bot">
                            <p>高效的学习体验</p>
                            <p>分步骤学习</p>
                            <p>专注打造唯一品类</p>
                        </div>
                    </div>
                </div>
                <div className={"show_lesson"}>
                    <div className={"homework"}>
                        <div className={"show-title"}>
                            <p>学员作业</p>
                            <span onClick={()=>this.props.history.push("/student/"+this.props.lessonList.educationCourseId)}>查看更多</span>

                        </div>
                        <div className="homework_con" ref={'hotList'}>
                            <ul className={"show_con"}>
                                {
                                    this.props.homeworkList.map((item, index) => (
                                        <li className={"show_list"} key={index} onClick={() => {
                                            this.props.history.push("/university/"+item.contentId)
                                        }}>
                                            <img src={item.image[0]} alt=""/>
                                            <div className="user_less">
                                                <div className="user_img">
                                                    <img src={item.clientImage} alt=""/>
                                                    <h3>{item.clientName}</h3>
                                                </div>
                                                <p>{item.introduce}</p>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                    </div>
                    {
                        this.props.lessonList.introduces.map((item, index) => (
                            <div className={"WillLearn"} key={index}>
                                <div className={"show-title"}>
                                    <p>{item.title}</p>
                                </div>
                                <div dangerouslySetInnerHTML={{__html: item.introduce}}></div>
                            </div>
                        ))
                    }
                    <div className="tutor">
                        <div className={"show-title"}>
                            <p>导师介绍</p>
                        </div>
                        <div className="tutor_introduce">
                            <img src={this.props.lessonList.clientImage} alt=""/>
                            <p>微光</p>
                        </div>
                        <div dangerouslySetInnerHTML={{__html: this.props.lessonList.teacherIntroduce}}></div>
                    </div>
                    <div className={"tutorCourse"}>
                        <div className={"show-title"}>
                            <p>导师的其他课程</p>
                            <span onClick={()=>this.props.history.push("/courseList")}>查看全部</span>
                        </div>
                        <div className="curr_con" ref={'currList'}>
                            <ul className={"show_curr"}>
                                {
                                    this.props.curriculumList.map((item, index) => (
                                        <li className={"curr_list"} key={index}>
                                            <img src={item.image} alt=""/>
                                            <div className="curr_less">
                                                <p>{item.shareTitle}</p>
                                            </div>
                                        </li>
                                    ))
                                }
                                <LoadingMore handleList={"getCurr"}></LoadingMore>
                            </ul>
                        </div>
                    </div>
                    <div className={"School"}>
                        <img
                            src="https://image.hongbeibang.com/FgyNuZ8yE795vzF-O4lGF3G5Caxr?551X245&imageView2/1/w/551/h/242"
                            alt=""/>
                        <div className={"school_p"}>
                            烘焙帮学堂，是由烘焙帮推出的课程品牌。通过官方自制的教学视频，用最成功的烘焙配方、最细致的步骤讲解、最贴心的导师服务，让你烘焙100%成功！
                        </div>
                        <div className="scholl_img">
                            <div className="cake">
                                <div className="cake_c">
                                    <img
                                        src="https://image.hongbeibang.com/FvihrbO1twdtKSkz2WqB9KxUjjeg?100X116&imageView2/1/w/100/h/116"
                                        alt=""/>
                                    <p>蛋糕</p>
                                </div>
                            </div>
                            <div className="cake">
                                <div className="cake_c">
                                    <img
                                        src="https://image.hongbeibang.com/Frs8TmZhk4PrxBY2cvA9e3jbbdrB?100X116&imageView2/1/w/100/h/116"
                                        alt=""/>
                                    <p>甜点</p>
                                </div>
                            </div>
                            <div className="cake">
                                <div className="cake_c">
                                    <img
                                        src="https://image.hongbeibang.com/ForyDTluoYKimnQmobG6agmowKzy?100X116&imageView2/1/w/100/h/116"
                                        alt=""/>
                                    <p>面包</p>
                                </div>
                            </div>
                            <div className="cake">
                                <div className="cake_c">
                                    <img
                                        src="https://image.hongbeibang.com/FuCKHBljrYAFuTjTs0B1fkNcUhWw?100X116&imageView2/1/w/100/h/116"
                                        alt=""/>
                                    <p>中式点心</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{background: "#fff", height: "21px"}}></div>
                <footer>
                    <div className={"foot-l"}>
                        <img src="https://image.hongbeibang.com/FjlY1hEsTozcG0oGvSXzNqRIc8gb?imageView2/1/w/640/h/640"
                             alt=""/>
                        <span>更多课程</span>
                    </div>
                    <div className={"foot-c"}>
                        <img src="https://image.hongbeibang.com/FoOJzEIUP4G3Ub0wp_XeNNYIHH0s?imageView2/1/w/640/h/640"
                             alt=""/>
                        <span>咨询</span>
                    </div>
                    <div className={"foot-r"}>￥9.9购买本课程</div>
                </footer>
            </div> : null

        )
    }

    handOnTouch() {
        this.setState({
            isVideo: !this.state.isVideo
        })
        console.log(this.state.isVideo)
    }

    componentDidMount() {
        this.props.getLesson()
        this.props.getHomeWork()
        this.props.getCurr()
    }

    componentDidUpdate() {
        if (this.refs.hotList) {
            this.scroll = new BScroll(this.refs.hotList, {
                scrollX: true,
                tap: true,
                click: true,
            })
            console.log(this.scroll)
        }
        if (this.refs.currList) {
            this.scroll = new BScroll(this.refs.currList, {
                scrollX: true,
                tap: true
            })
        }
    }
}

export default withRouter(connect((state) => ({
    lessonList: state.learnBaking.lessonList,
    introduces: state.learnBaking.introduces,
    homeworkList: state.learnBaking.homeworkList,
    curriculumList: state.learnBaking.curriculumList
}), (dispatch) => bindActionCreators(actionCreator, dispatch))(Lesson));