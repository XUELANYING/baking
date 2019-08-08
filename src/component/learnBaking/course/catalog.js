import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import actionCreator from "../../../store/actionCreator";
import "../../../asset/css/learnBaking/lessonSeries.scss"

class Catalog extends React.Component {
    render() {
        console.log(343443,this.props.catalogList)
        return (
            <div className={"catalog"}>

                {
                    this.props.catalogList.map((v,i)=>(
                        <div className={"ca-com"} key={i}>

                            <dl>
                                <dt className={"ca-pic"}><img src={v.image} alt=""/></dt>
                                <dd className={"ca-tit"}>
                                    <p>{v.title}</p>
                                    <span className={"ca-see"}>免费试看</span>
                                </dd>
                            </dl>
                        </div>
                    ))
                }
            </div>
        )
    }
    componentDidMount(){
        this.props.getCatalogList();
    }
}
export default connect((state) => ({catalogList: state.learnBaking.catalogList}),
    (dispatch) => (bindActionCreators(actionCreator, dispatch)))(Catalog)
