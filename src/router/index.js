import LearnBaking from '../views/learnBaking/learnBaking'
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
import QuestionDetail from '../component/questionAnswer/questionDetail'
import AnswerDetail from '../component/questionAnswer/answerDetail'


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
            to:"/universitysss",
            display: true,//隐藏
            meta:{
                title:"烘焙帮学堂",
                unActive:"https://image.hongbeibang.com/Fp0nBR7-xD2caoLENB7qZgmu9vZT?80X80&imageView2/1/w/80/h/80",
                isAppear:true,
            }
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
            meta: {
                title: "烘焙圈_烘焙秀秀_烘焙帮",
                unActive: 'https://image.hongbeibang.com/Fkpdn7F9EWxvNeSS8M7V4_xbRPlf?50X50&imageView2/1/w/50/h/50',
                active: 'https://image.hongbeibang.com/Flc4c0tB_BGGFnA-ORFowqfNOpaD?50X50&imageView2/1/w/50/h/50',
                isShow: true,
            }
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
