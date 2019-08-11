import React from 'react'
import Loadable from "../common/height/loadable"
import addlistOne from './Me/router/addlistORoute'
import addlistTwo from './Me/router/addlistTRouter'
//主路由
const LearnBaking = Loadable(()=> import('../views/learnBaking/learnBaking'));
const BarkingRing = Loadable(()=> import('../views/bakingRing/bakingRing'));
const Nest = Loadable(()=> import('../views/nest/nest'));
const QuestionAnswer = Loadable(()=> import('../views/questionAnswer/questionAnswer'));
/**/
const Baike = Loadable(()=> import('../views/learnBaking/baike'));
const University = Loadable(()=> import('../views/learnBaking/university'));
const LessonSeries = Loadable(()=> import('../views/learnBaking/lessonSeries'));
const Classify = Loadable(()=> import('../views/classify'));
const Login = Loadable(()=> import('../views/login'));
/**/
const QuestionDetail = Loadable(()=> import('../component/questionAnswer/questionDetail'));
const More = Loadable(()=> import('../component/learnBaking/more'));
const AnswerDetail = Loadable(()=> import('../component/questionAnswer/answerDetail'));
const EditQuestion = Loadable(()=> import('../component/questionAnswer/editQuestion'));
const ClientInfo = Loadable(()=> import('../component/questionAnswer/clientInfo'));
const QuestionDescription = Loadable(()=> import('../component/questionAnswer/questionDescription'));
/**/
const Lesson = Loadable(()=> import('@views/learnBaking/lesson'));
const Student = Loadable(()=> import('@views/learnBaking/student'));
const School = Loadable(()=> import('@views/learnBaking/school'));
const CourseList = Loadable(()=> import('@views/learnBaking/courseList'));
const Cart = Loadable(()=> import('@views/learnBaking/cart'));
/**/
const opusTaber = Loadable(()=> import('@component/Me/opusTaber'));
const ActivityDetail = Loadable(()=> import('../component/bakingRing/activityDetail'));
const BakingCircleDetail = Loadable(()=> import('../component/bakingRing/bakingCircleDetail'));
const DishDetail = Loadable(()=> import('../component/bakingRing/dishDetail'));

export default {
    basename: "/m",
    routers: [
        //登录
        {
            component:Login,
            name:"登录",
            to:"/login",
            display: true,//隐藏
            exact: true,
            meta:{
                title:"烘焙百科",
                isAppear:false,
            }
        },
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
            children: []
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

            ]
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
        {//百科
            component:Baike,
            name:"技巧百科",
            to:"/baike",
            display: true,//隐藏
            exact: true,
            meta:{
                title:"烘焙百科",
                unActive:"https://image.hongbeibang.com/Fl493FjRZluXqCNJnvhRYw_IGKZO?80X80&imageView2/1/w/80/h/80",
                isAppear:true,
            }
        },
        {//查看更多
            component:More,
            name:"查看更多",
            to:"/university/allLessons/:id",
            display: true,//隐藏
            exact: true,
            meta:{
                isAppear:false,
            },
        },
        {//学堂
            component:University,
            name:"视频学堂",
            to:"/university",
            display: true,//隐藏
            exact: true,
            meta:{
                title:"烘焙帮学堂",
                unActive:"https://image.hongbeibang.com/Fp0nBR7-xD2caoLENB7qZgmu9vZT?80X80&imageView2/1/w/80/h/80",
                isAppear:true,
            },
            children:[

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
            to: "/school/:contentId",
            path: "/school/:contentId",
            content: "作品",
            component: School,
            display: true,
            meta: {
                keywored: "关键字",
                descrieption: "描述",
            }
        },
        {
            to: "/cart/:contentId",
            path: "/cart/:contentId",
            content: "购买",
            component: Cart,
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
