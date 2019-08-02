import React from 'react';
import {Link,Route,Switch} from 'react-router-dom'

export default class LearnBarking extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: ""
        }
    }

    render() {
        return (
            <div>
                <h1>LearnBarking</h1>
                <Switch>
                    {
                        this.props.children.map((v,i)=>(
                            <Route key={i} path={v.to} {...v}/>
                        ))
                    }
                </Switch>
                {
                    this.props.children.map((v,i)=>(
                        <Link key={i} to={v.to}>{v.name}</Link>
                    ))
                }

            </div>
        )
    }
    componentDidMount(){
        console.log(this.props)
    }
}
