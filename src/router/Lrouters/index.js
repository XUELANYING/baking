import React from 'react'
import Loadable from "../../common/height/loadable"
const List = Loadable(()=> import('../../views/search/list'));
const Search = Loadable(()=> import('../../views/search'));
const RecipeResult = Loadable(()=> import('../../views/search/recipeDetail'));
export default [
    {
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
            title:"_烘焙食谱_烘焙帮食谱_烘焙搜索结果_烘焙帮搜索结果_烘焙帮",
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
