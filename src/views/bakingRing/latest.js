import React,{Component} from 'react'
import { NavLink} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Loadable from "../../common/height/loadable"
import actionCreator from '../../store/actionCreator';
import LazyLoad from 'react-lazyload'
const ShowListCommon = Loadable(()=> import('../../component/bakingRing/ShowListCommon'));


class Latest extends Component{
    constructor(){
        super();
        this.state={
            colorList:['#94BFBB','#927472','#E5AA9C','#5BADA6','#b78b9f','#acbcc9','#8f7671','#acb99b','#aca6bb','#c3d0ad']
        }
    }
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
                                        <LazyLoad height='70' placeholder={<div className={"loadingBox"}><img src={this.imgLoading}/></div>}>
                                            <img src = {v.image} alt =''/>
                                        </LazyLoad>
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
                                    <NavLink to={'/bakingCircle/'+v.communityId} style={{background:this.state.colorList[i]}}>{v.name}</NavLink>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <ShowListCommon showProps={this.props.showList} boxList={'getShowList'}></ShowListCommon>
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
