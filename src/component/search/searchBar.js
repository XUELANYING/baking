import React from "react";
import "../../asset/css/search/searchBar.scss";

export default class SearchhBar extends React.Component{
    render(){
        return (
            <div className="searchBoxL">
                <p className={"backImg"} onClick={()=>this.props.history.go(-1)}>
                    <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt=""/>
                </p>
                <div className={"searchText"}>
                    <input type="text" ref={"searchText"} placeholder={"搜索食谱/食材，烘焙/家常菜一应俱全"} onKeyPress={this.getSearchConList.bind(this)}/>
                </div>
                <span onClick={this.getSearchList.bind(this)}>{this.props.children}</span>
            </div>
        )
    }
    getSearchConList(e){
        let keyword = this.refs.searchText.value;
        if(e.nativeEvent.keyCode === 13){
            this.props.history.push("/search/recipe/"+keyword)
        }
    }
    getSearchList(){
        let keyword = this.refs.searchText.value;
        this.props.history.push("/search/recipe/"+keyword)
    }
}