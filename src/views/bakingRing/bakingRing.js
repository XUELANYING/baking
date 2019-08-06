import React from 'react';
import {Switch, Link, Route,withRouter} from 'react-router-dom'


class BakingRing extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: ""
        }
    }

    render() {
        return (
            <div>
                BakingRing
            </div>
        )
    }
}
export default withRouter(BakingRing)
