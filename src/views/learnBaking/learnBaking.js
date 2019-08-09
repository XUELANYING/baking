import React, {Fragment} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import router from "../../router";
import '../../asset/css/learnBaking/index.scss'
import ShowList from "../../component/learnBaking/showList"
import KindList from "../../component/learnBaking/kindList"


class LearnBarking extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: ""
        }
    }

    render() {
        return (
            <div>
                <div className={'positionFixed'}>
                    <div className={'x-searchWrap'}>
                        <span className={'getQus'}>
                            <img
                                src="https://image.hongbeibang.com/Fj1u8rBVnt5DLwXqhx8QKlRPLoGI?48X48&imageView2/1/w/48/h/48"
                                alt=""/>
                        </span>
                        <div className={'x-searchBox'} onClick={() => {
                                this.props.history.push('/search')
                            }}>
                            <img className={"l-ser"} src="https://image.hongbeibang.com/FltPAS-35CZfvSpnHacXWoqcfFz5?42X42&imageView2/1/w/42/h/42" alt=""/>
                            <span className={"search-key"}>搜索食谱/食材，烘焙/家常菜一应俱全</span>
                        </div>
                        <span>
                            <img className={'icon msg'}
                                 src="https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48"
                                 alt=""/>
                        </span>
                    </div>
                </div>
                <nav>
                    <div className="search"></div>
                    <div className={"l-w"}>
                        {
                            router.routers.map((v, i) => (
                                v.meta.isAppear ? <NavLink className={"l-bar"} key={i} to={v.to}>
                                    <img src={v.meta.unActive} alt=""/>
                                    <h3>{v.name}</h3>
                                </NavLink> : null

                            ))
                        }
                    </div>

                </nav>
                <ShowList></ShowList>
                <KindList></KindList>
            </div>
        )
    }
}

export default withRouter(LearnBarking)




