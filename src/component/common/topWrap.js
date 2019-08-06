import React from 'react';
import {withRouter} from 'react-router-dom'
import '../../asset/css/topWrap.scss'
import {topTab} from '../../common/high-order/index'

class TopWrap extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: ""
        }
    }

    render() {
        return (
            <div className={'clientInfo-top'}>
                    <span onClick={() => {
                        this.props.history.go(-1)
                    }}>
                        {this.props.info.left}

                    </span>
                <span className={"titleCon"}>{this.props.info.right}</span>
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props)
    }
}
export default topTab(withRouter(TopWrap))
