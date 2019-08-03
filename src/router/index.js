import LearnBaking from '../views/learnBaking/learnBaking'
import BarkingRing from '../views/bakingRing/bakingRing'
import Nest from '../views/nest/nest'
import QuestionAnswer from '../views/questionAnswer/questionAnswer'
import Baike from "../views/learnBaking/baike";
import University from "../views/learnBaking/university";
import Essence from '../views/questionAnswer/essence';
import New from '../views/questionAnswer/new';
import Hot from '../views/questionAnswer/hot'
// 烘焙圈
import Attention from '../views/bakingRing/attention'
import Latest from '../views/bakingRing/latest'
import Expert from '../views/bakingRing/expert'

import QuestionDetail from '../component/questionAnswer/questionDetail'
import AnswerDetail from '../component/questionAnswer/answerDetail'

import ActivityDetail from '../component/bakingRing/activityDetail'
import BakingCircleDetail from '../component/bakingRing/bakingCircleDetail'



export default {
    basename: "/m",
    routers: [
        {
            component: LearnBaking,
            name: "烘焙帮",
            to: '/',
            exact: true,
            meta: {
                title: "学烘焙",
                unActive: 'https://image.hongbeibang.com/FhngZoiK_s7Zw4K3DxLogRfqoO06?50X50&imageView2/1/w/50/h/50',
                active: "https://image.hongbeibang.com/FsxN7RUFRJ9Zdris5Z22haR2xIhj?50X50&imageView2/1/w/50/h/50",
                isShow: true,
            },
            children: [//子路由

            ]
        },
        {
            component: BarkingRing,
            to: '/show',
            name: "烘焙圈",
            meta: {
                title: "烘焙圈_烘焙秀秀_烘焙帮",
                unActive: 'https://image.hongbeibang.com/Fkpdn7F9EWxvNeSS8M7V4_xbRPlf?50X50&imageView2/1/w/50/h/50',
                active: 'https://image.hongbeibang.com/Flc4c0tB_BGGFnA-ORFowqfNOpaD?50X50&imageView2/1/w/50/h/50',
                isShow: true,
            },
            // 添加子路由
            children:[
                {
                    component: Attention,
                    name: "关注",
                    path: '/show/attention',
                    to: '/show/attention',
                    meta: {
                        title: "烘焙圈_烘焙秀秀_烘焙帮",
                        isShow: true,
                    },
                },
                {
                    component: Latest,
                    name: "最新",
                    path: '/show/latest',
                    to: '/show/latest',
                    meta: {
                        title: "烘焙圈_烘焙秀秀_烘焙帮",
                        isShow: true,
                    },
                },
                {
                    component: Expert,
                    name: "达人",
                    path: '/show/expert',
                    to: '/show/expert',
                    meta: {
                        title: "烘焙圈_烘焙秀秀_烘焙帮",
                        isShow: true,
                    },
                },
            ]
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
            to: '/client',
            name: "小窝",
            meta: {
                title: "的小窝_烘焙帮",
                unActive: 'https://image.hongbeibang.com/FrYeKj0MohOJQuNzUgCugg90cHCS?50X50&imageView2/1/w/50/h/50',
                active: 'https://image.hongbeibang.com/FpNSY800vY0I5ytvWaqDbdJqT0HR?50X50&imageView2/1/w/50/h/50',
                isShow: true,
            },
            children: [//子路由

            ]
        },
        {
            component: QuestionDetail,
            path: '/question/',
            to: '/question/:id/',
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
        }
    ]
}
