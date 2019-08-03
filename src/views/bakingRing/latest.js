import React,{Component} from 'react'
import router from '../../router'
import { NavLink} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import actionCreator from "../../store/actionCreator";
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
                                <div key={i}>
                                    <NavLink to={'/community/'+v.communityId}>{v.name}</NavLink>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
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
    communityList:state.bakingRing.communityList
}),(dispatch)=>(bindActionCreators(actionCreator,dispatch)))(Latest)