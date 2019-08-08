import React,{Component} from 'react'
import router from '../../router'
import { NavLink} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import actionCreator from "../../store/actionCreator";
import ShowListCommon from '../../component/bakingRing/ShowListCommon'
import filter from '../../asset/filter'
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
                                    <NavLink to={'/bakingCircle/'+v.communityId} style={{background:filter.randomColor(1)}}>{v.name}</NavLink>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <ShowListCommon showProps={this.props.showList}></ShowListCommon>
            </div>
        )
    }
 
    componentDidMount(){
        this.props.getShowList();
        this.props.getActivityList();
        this.props.getCommunityList();
    }
}
export default connect((state)=>({
    activityList:state.bakingRing.activityList,
    communityList:state.bakingRing.communityList,
    showList:state.bakingRing.showList
}),(dispatch)=>(bindActionCreators(actionCreator,dispatch)))(Latest)