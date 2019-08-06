import React,{Component} from 'react'
import router from '../../router'
import { NavLink} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import actionCreator from "../../store/actionCreator";
import ShowListCommon from '../../component/bakingRing/ShowListCommon'
class Latest extends Component{
    render(){
        return (
            <div id={'baking_body'}>
                <div className={'baking_activity'}>
                    {
                        this.props.activityList.map((v,i)=>(
                            <div key={i}>
                                {
                                v.item.map((v,i)=>(
                                    <NavLink className={'baking_activity_item'} to={'/activity/'+v.activityContentId} key={i}>
                                        <img src={v.image} alt=""/>
                                    </NavLink>
                                ))
                            }
                            </div>
                        ))
                    }

                </div>
                <div className={'baking_type_wrap'}>
                    <div className={'baking_type'}>
                        {
                            this.props.communityList.map((v,i)=>(
                                <div key={i} >
                                    <NavLink to={'/bakingCircle/'+v.communityId} style={{background:this.randomColor(1)}}>{v.name}</NavLink>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <ShowListCommon></ShowListCommon>
            </div>
        )
    }
    randomColor(alpha){

            if(alpha>1 || isNaN(alpha) || alpha<0){
                alpha=1;
            }
            let color="rgba(";
            for(let
                    i=0;i<3;i++){
                color+=parseInt(Math.random()*230);
                color+=",";
            }
            color+=alpha+")";
            return color;

    }
    componentDidMount(){
        // console.log('jing--------------------',this.props.activityList);
        console.log(222,this.props.activityList);
        this.props.getActivityList();
        console.log(222111111111111111,this.props.activityList);
        console.log(333,this.props.communityList);
        this.props.getCommunityList();
        console.log(333,this.props.communityList);

    }
}
export default connect((state)=>({
    activityList:state.bakingRing.activityList,
    communityList:state.bakingRing.communityList,
    showList:state.bakingRing.showList
}),(dispatch)=>(bindActionCreators(actionCreator,dispatch)))(Latest)