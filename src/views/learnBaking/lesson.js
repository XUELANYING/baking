import React, {Component} from 'react';
import "@asset/css/learnBaking/lesson.scss"
import actionCreator from "@store/actionCreator";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import BScroll from "better-scroll"
import {withRouter, Link} from "react-router-dom"
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import PlayUrl from "../../component/learnBaking/lesson/playUrl"
import TrySeeUrl from "../../component/learnBaking/lesson/trySeeUrl";
import LoadingMore from "@component/common/loadingMore";
class Lesson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentId: 0,
            clientId:0,
            isVideo: true,
            open: false,
        };
    }

    render() {
        const sidebar = (
            <div className={"codeList"}>
                <List>
                    <List className="Item">
                        <h3>设置</h3>
                    </List>
                </List>
            </div>);
        return (
            this.props.lessonList.shareTitle ? <div className={"lessonCom"}>
                {
                    this.state.isVideo ? <PlayUrl/> : <TrySeeUrl/>
                }
                <div className={"titles"}>
                    <p>{this.state.isVideo ? this.props.lessonList.shareTitle : "试看步骤:"+this.props.lessonList.trySeeTitle}</p>
                    <div className={"On-line"}>
                        <div className={"On-line-l"}>
                            <img
                                src="https://image.hongbeibang.com/FgRQxfAWq4kOdLc5xd_GxWm03Vs_?54X54&imageView2/1/w/54/h/54"
                                alt=""/>
                            <span><i>{this.props.lessonList.buyNum>1000?"1000+":this.props.lessonList.buyNum}</i>人在学</span>
                        </div>
                        <div className={"On-line-r"}>
                            <img
                                src="https://image.hongbeibang.com/FvlaRxbO9YVI0n8uMoFepUzffkWK?imageView2/1/w/640/h/640"
                                alt=""/>
                            <span onTouchEnd={this.handOnTouch.bind(this)}>{this.state.isVideo ?"试看课程":"课程介绍"}</span>
                        </div>
                    </div>
                </div>

                    {/*1111*/}
                {/*</Button>*/}
                <div className={"Study"}  onClick={this.onOpenChange}>
                        <div className="study_work">
                            <div className="study_top">
                                <div className="study_dian"></div>
                                <p>永久无限次回看</p>
                                <div className="study_dian"></div>
                                <p>购买后即看</p>
                                <div className="study_dian"></div>
                                <p>烘焙帮自营课程</p>
                            </div>
                            <div className="study_bot">
                                <div className="study_dian"></div>
                                <p>高效的学习体验</p>
                                <div className="study_dian"></div>
                                <p>分步骤学习</p>
                                <div className="cart_dian"></div>
                                <p>专注打造唯一品类</p>
                            </div>
                        </div>
                        <div className="study_san">
                            <img src="https://image.hongbeibang.com/Fqee_DzmTrYWinRY2tMPfDtu1ym8" alt=""/>
                        </div>

                    {/*<Drawer*/}
                        {/*position={'bottom'}*/}
                        {/*className="my_Top"*/}
                        {/*sidebar={sidebar}*/}
                        {/*style={{ minHeight: document.documentElement.clientHeight }}*/}
                        {/*contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}*/}
                        {/*sidebarStyle={{ border: '1px solid #ddd' }}*/}
                        {/*enableDragHandle*/}
                        {/*open={this.state.open}*/}
                        {/*onOpenChange={this.onOpenChange}*/}
                    {/*>*/}

                    {/*</Drawer>*/}
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
                                            this.props.history.push("/school/"+item.contentId)
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
                            <p>{this.props.lessonList.clientName}</p>
                        </div>
                        <div dangerouslySetInnerHTML={{__html: this.props.lessonList.teacherIntroduce}}></div>
                    </div>
                    <div className={"tutorCourse"}>
                        <div className={"show-title"}>
                            <p>导师的其他课程</p>
                            <span onClick={()=>this.props.history.push("/courseList/"+this.props.lessonList.educationCourseId+"/"+this.props.lessonList.clientId)}>查看全部</span>
                        </div>
                        <div className="curr_con" ref={'currList'}>
                            <ul className={"show_curr"}>
                                {
                                    this.props.curriculumList.map((item, index) => (
                                        <li className={"curr_list"} key={index} onClick={() => {

                                            this.props.history.replace("/lesson/"+item.educationCourseId+"/"+item.clientId)

                                        }}>
                                            <div className="curr_img">
                                                <img src={item.image} alt=""/>
                                                <div className="buynum"><span>{item.buyNum>1000?"1000+":item.buyNum}</span>人在学</div>
                                            </div>
                                            <div className="curr_less">
                                                <p>{item.shareTitle}</p>
                                            </div>
                                        </li>
                                    ))
                                }
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
                                    <p onClick={()=>this.props.history.push("/university")}>蛋糕</p>
                                </div>
                            </div>
                            <div className="cake">
                                <div className="cake_c">
                                    <img
                                        src="https://image.hongbeibang.com/Frs8TmZhk4PrxBY2cvA9e3jbbdrB?100X116&imageView2/1/w/100/h/116"
                                        alt=""/>
                                    <p onClick={()=>this.props.history.push("/university")}>甜点</p>
                                </div>
                            </div>
                            <div className="cake">
                                <div className="cake_c">
                                    <img
                                        src="https://image.hongbeibang.com/ForyDTluoYKimnQmobG6agmowKzy?100X116&imageView2/1/w/100/h/116"
                                        alt=""/>
                                    <p onClick={()=>this.props.history.push("/university")}>面包</p>
                                </div>
                            </div>
                            <div className="cake">
                                <div className="cake_c">
                                    <img
                                        src="https://image.hongbeibang.com/FuCKHBljrYAFuTjTs0B1fkNcUhWw?100X116&imageView2/1/w/100/h/116"
                                        alt=""/>
                                    <p onClick={()=>this.props.history.push("/university")}>中式点心</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{background: "#fff", height: "21px"}}></div>
                <footer className="fotq">
                    <div className={"foot-lq"}>
                        <img src="https://image.hongbeibang.com/FjlY1hEsTozcG0oGvSXzNqRIc8gb?imageView2/1/w/640/h/640"
                             alt=""/>
                        <span>更多课程</span>
                    </div>
                    <div className={"foot-cq"}>
                        <div className="img"><img src="https://image.hongbeibang.com/FoOJzEIUP4G3Ub0wp_XeNNYIHH0s?imageView2/1/w/640/h/640"
                                                  alt=""/></div>
                        <span>咨询</span>
                    </div>
                    <div className={"foot-r"} onClick={()=>this.props.history.push("/cart/"+this.props.lessonList.educationCourseId)}>￥9.9购买本课程</div>
                </footer>
            </div> : null

        )
    }

    handOnTouch() {
        this.setState({
            isVideo: !this.state.isVideo
        })
    }

    componentDidMount() {

        this.props.getLesson(this.props.match.params.contentId)
        this.props.getHomeWork(this.props.match.params.contentId)
        this.props.getCurr({pageIndex:0,contentId:this.props.match.params.contentId,clientId:this.props.match.params.clientId})
        this.forceUpdate();
    }
    getSnapshotBeforeUpdate() {
        return document.documentElement.scrollTop || document.body.scrollTop > 0 ? true : false;
    }

    componentDidUpdate(prevProps, prevState, scroll) {
        // 窗口发生滚动，滚动最顶端
        if (scroll === true) {
            window.scrollTo(0, 0);
        }
        if (this.refs.hotList) {
            this.scroll = new BScroll(this.refs.hotList, {
                scrollX: true,
                tap: true,
                click: true,
            })
        }



        if (this.refs.currList) {
            this.scroll = new BScroll(this.refs.currList, {
                scrollX: true,
                tap: true,
                click: true,
            })
        }
    }

    componentWillReceiveProps(nextProps){
        let contentId = this.props.match.params.contentId

        // console.log(234,this.props.match.params.contentId,nextProps.match.params.contentId)
    }
}

export default withRouter(connect((state) => ({
    lessonList: state.learnBaking.lessonList,
    introduces: state.learnBaking.introduces,
    homeworkList: state.learnBaking.homeworkList,
    curriculumList: state.learnBaking.curriculumList
}), (dispatch) => bindActionCreators(actionCreator, dispatch))(Lesson));
