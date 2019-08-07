import QuestionAnswer from '../../views/questionAnswer/questionAnswer'
import Essence from '../../views/questionAnswer/essence';
import New from '../../views/questionAnswer/new';
import Hot from '../../views/questionAnswer/hot'
import QuestionDetail from '../../component/questionAnswer/questionDetail'
import AnswerDetail from '../../component/questionAnswer/answerDetail'
import EditQuestion from '../../component/questionAnswer/editQuestion'
import ClientInfo from '../../component/questionAnswer/clientInfo'
import QuestionDescription from '../../component/questionAnswer/questionDescription'

export default [
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
