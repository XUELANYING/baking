﻿import LearnBaking from '../views/learnBaking/learnBaking'
import BarkingRing from '../views/bakingRing/bakingRing'
import Nest from '../views/nest/nest'
import QuestionAnswer from '../views/questionAnswer/questionAnswer'
import Baike from "../views/learnBaking/baike";
import University from "../views/learnBaking/university";
import LessonSeries from "../views/learnBaking/lessonSeries";
import Classify from "../views/learnBaking/classify";
import Essence from '../views/questionAnswer/essence';
import New from '../views/questionAnswer/new';
import Hot from '../views/questionAnswer/hot'
// 烘焙圈
import Attention from '../views/bakingRing/attention'
import Latest from '../views/bakingRing/latest'
import Expert from '../views/bakingRing/expert'
import QuestionDetail from '../component/questionAnswer/questionDetail'
import More from "../component/learnBaking/more"
import AnswerDetail from '../component/questionAnswer/answerDetail'
import EditQuestion from '../component/questionAnswer/editQuestion'
import ClientInfo from '../component/questionAnswer/clientInfo'
import QuestionDescription from '../component/questionAnswer/questionDescription'
import Lesson from "@views/learnBaking/lesson"
import Student from "@views/learnBaking/student"
import School from "@views/learnBaking/school"
import CourseList from "@views/learnBaking/courseList"
/*郭郭的路由跳转*/
import opusTaber from "@component/Me/opusTaber"
import addlistOne from "./Me/router/addlistORoute"
import addlistTwo from "./Me/router/addlistTRouter"
import ActivityDetail from '../component/bakingRing/activityDetail'
import BakingCircleDetail from '../component/bakingRing/bakingCircleDetail'
import DishDetail from '../component/bakingRing/dishDetail'



export default {
    basename: "/m",
    routers: [
        {
            component: LearnBaking,
            name: "学烘焙",
            to: '/',
            exact: true,
            meta: {
                title: "烘焙帮",
                unActive: 'https://image.hongbeibang.com/FhngZoiK_s7Zw4K3DxLogRfqoO06?50X50&imageView2/1/w/50/h/50',
                active: "https://image.hongbeibang.com/FsxN7RUFRJ9Zdris5Z22haR2xIhj?50X50&imageView2/1/w/50/h/50",
                isShow: true,
            },
            sceneConfig: {
                enter: 'from-right',
                exit: 'to-right'
            },
            children: [//子路由

            ]
        },
        {//百科
            component:Baike,
            name:"技巧百科",
            to:"/baike",
            display: true,//隐藏
            meta:{
                title:"烘焙百科",
                unActive:"https://image.hongbeibang.com/Fl493FjRZluXqCNJnvhRYw_IGKZO?80X80&imageView2/1/w/80/h/80",
                isAppear:true,
            }
        },
        {//学堂
            component:University,
            name:"视频学堂",
            to:"/university",
            display: true,//隐藏
            meta:{
                title:"烘焙帮学堂",
                unActive:"https://image.hongbeibang.com/Fp0nBR7-xD2caoLENB7qZgmu9vZT?80X80&imageView2/1/w/80/h/80",
                isAppear:true,
            },
            children:[
                {
                    component:More,
                    name:"查看更多",
                    to:"/university/allLessons"
                }
            ]
        },
        {//教程
            component:LessonSeries,
            name:"新手教程",
            to:"/lessonSeries",
            display: true,//隐藏
            meta:{
                title:"烘焙帮教程",
                unActive:"https://image.hongbeibang.com/FkU-5lDUu7y7CurjkdJYWh-ZIg3x?80X80&imageView2/1/w/80/h/80",
                isAppear:true,
            }
        },
        {//分类
            component:Classify,
            name:"食谱分类",
            to:"/classify",
            display: true,//隐藏
            meta:{
                title:"烘焙食谱_烘焙分类_食谱分类_全部分类_分类浏览_烘焙帮",
                unActive:"https://image.hongbeibang.com/FkcHmIr5rX7zXeHET_Rew64lVrgx?80X80&imageView2/1/w/80/h/80",
                isAppear:true,
            }
        },
        {
            component: BarkingRing,
            to: '/show',
            name: "烘焙圈",
            sceneConfig: {
                enter: 'from-right',
                exit: 'to-right'
            },
            meta: {
                title: "烘焙圈_烘焙秀秀_烘焙帮",
                unActive: 'https://image.hongbeibang.com/Fkpdn7F9EWxvNeSS8M7V4_xbRPlf?50X50&imageView2/1/w/50/h/50',
                active: 'https://image.hongbeibang.com/Flc4c0tB_BGGFnA-ORFowqfNOpaD?50X50&imageView2/1/w/50/h/50',
                isShow: true,
            },
            
        },
        {
            component: QuestionAnswer,
            to: '/questionAndAnswer',
            name: "问答",
            meta: {
                title: "烘焙问答_烘焙社区_烘焙交流_烘焙帮问答_烘焙帮社区_社区_烘焙帮",
                unActive: 'https://image.hongbeibang.com/Flm_lYHJQA56h0VyhdRhQ1i5iO06?50X50&imageView2/1/w/50/h/50',
                active: 'https://image.hongbeibang.com/Fj5pW1jZYwlS9rB3h_nsvXNptuPX?50X50&imageView2/1/w/50/h/50',
                isShow: true,
            },
            sceneConfig: {
                enter: 'from-right',
                exit: 'to-right'
            },
            children: [//子路由
                {
                    component: Essence,
                    name: "精华问答",
                    path: '/questionAndAnswer/essence',
                    to: '/questionAndAnswer/essence',
                    meta: {
                        title: "烘焙问答_烘焙社区_烘焙交流_烘焙帮问答_烘焙帮社区_社区_烘焙帮",
                        isShow: true,
                    },
                },
                {
                    component: New,
                    name: "最新问题",
                    path: '/questionAndAnswer/new',
                    to: '/questionAndAnswer/new',
                    meta: {
                        title: "烘焙问答_烘焙社区_烘焙交流_烘焙帮问答_烘焙帮社区_社区_烘焙帮",
                        isShow: true,
                    },
                },
                {
                    component: Hot,
                    name: "最热问题",
                    path: '/questionAndAnswer/hot',
                    to: '/questionAndAnswer/hot',
                    meta: {
                        title: "烘焙问答_烘焙社区_烘焙交流_烘焙帮问答_烘焙帮社区_社区_烘焙帮",
                        isShow: true,
                    },
                },
                {
                    component: QuestionDetail,
                    path: '/question',
                    to: '/question/:contentId',
                    isHide: true
                }
            ]
        },
        {
           component:ActivityDetail,
           path:'/activity/',
           to:'/activity/:id',
            display:true,//隐藏
            meta: {
                unActive: null,
                active: null
            }

        },
        {
            component:DishDetail,
            path:'/dish/',
            to:'/dish/:id',
            display:true,//隐藏
            meta: {
                unActive: null,
                active: null
            }

        },
        {
            component:BakingCircleDetail,
            path:'/bakingCircle/',
            to:'/bakingCircle/:id',
            display:true,//隐藏
            meta: {
                unActive: null,
                active: null
            }
        },
        {
            component: Nest,
            to: '/me',
            name: "小窝",
            exact: true,
            meta: {
                title: "郭郭的小窝_烘焙帮",
                unActive: 'https://image.hongbeibang.com/FrYeKj0MohOJQuNzUgCugg90cHCS?50X50&imageView2/1/w/50/h/50',
                active: 'https://image.hongbeibang.com/FpNSY800vY0I5ytvWaqDbdJqT0HR?50X50&imageView2/1/w/50/h/50',
                isShow: true,
            },
            sceneConfig: {
                enter: 'from-right',
                exit: 'to-right'
            },
            children: [//子路由
            ]
        },

        {   //////////////郭郭的路由跳转////////////////
            to: "/me/opustaber/:id",
            path: '/me/opustaber/:id',
            context: "切换",
            component: opusTaber,
            display: true,
            exact: true,
            meta: {
                title: "作品和食品_烘焙帮",
                keywored: "关键字",
                descrieption: "描述",
                isShow: false,
            },
            children:[]
        },
        ...addlistOne,
        ...addlistTwo,

        {
            component: QuestionDetail,
            path: '/question/',
            to: '/question/:id/',
            exact: true,
            display: true,//隐藏
            meta: {
                unActive: null,
                active: null
            }
        },
        {
            component: AnswerDetail,
            path: '/answer/',
            to: '/answer/:contentId/',
            display: true,//隐藏
            meta: {
                unActive: null,
                active: null
            }
        },
        {

            to: "/lesson/:contentId/:clientId",
            path: "/lesson/:contentId/:clientId",
            content: "详情",
            component: Lesson,
            display: true,
            meta: {
                keywored: "关键字",
                descrieption: "描述",
            }
        },
        {

            to: "/student/:contentId",
            path: "/student/:contentId",
            content: "学员作品",
            component: Student,
            display: true,
            meta: {
                keywored: "关键字",
                descrieption: "描述",
            }
        },
        {
            to: "/courseList/:contentId/:clientId",
            path: "/courseList/:contentId/:clientId",
            content: "课程列表",
            component: CourseList,
            display: true,
            meta: {
                keywored: "关键字",
                descrieption: "描述",
            }
        },
        {
            to: "/university/:contentId",
            path: "/university/:contentId",
            content: "作品",
            component: School,
            display: true,
            meta: {
                keywored: "关键字",
                descrieption: "描述",
            }
        },
        {
            component: EditQuestion,
            path: '/edit/question',
            to: '/edit/question',
            display: true,//隐藏
            meta: {
                unActive: null,
                active: null
            }
        },
        {
            component: QuestionDescription,
            path: '/question/description',
            to: '/question/description/:text',
            exact: true,
            display: true,//隐藏
            meta: {
                unActive: null,
                active: null
            }
        },
        {
            component: ClientInfo,
            path: '/clientInfo',
            to: '/clientInfo/:clientId',
            display: true,//隐藏
            meta: {
                unActive: null,
                active: null
            }
        },
    ]
}
