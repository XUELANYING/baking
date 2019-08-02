import React from 'react';
import '../../asset/css/loading.scss'
import img from '../../asset/img/loading.gif'

export default class Loading extends React.Component {
    render() {
        return (
            <div className={"loading"} style={{height:"100%",width:"100%"}}>
                <img className={'loading-img'} src={img} alt=""/>
            </div>
        )
    }
}
