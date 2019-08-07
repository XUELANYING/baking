import Classify from "../../views/classify";
import List from "../../views/search/list";
import Search from "../../views/search";
import RecipeResult from "../../views/search/recipeDetail";

export default [
    {
        to:"/classify",
        path:"/classify",
        content:"分类",
        component:Classify,
        meta:{
            title:"烘焙食谱_烘焙分类_食谱分类_全部分类_分类浏览_烘焙帮",
            isShow:false
        }
    },{
        to:"/search",
        exact:true,
        path:"/search",
        content:"搜索",
        component:Search,
        meta:{
            isFooter:false
        }
    },{
        to:"/search/recipe",
        path:"/search/recipe/:keyword",
        component:List,
        meta:{
            title:"🔥冰皮月饼_烘焙食谱_烘焙帮食谱_烘焙搜索结果_烘焙帮搜索结果_烘焙帮",
            isShow:false
        }
    },{
        to:"/recipe",
        path:"/recipe/:clientId/:contentId",
        component:RecipeResult,
        meta:{
            isShow:false
        }
    }
]