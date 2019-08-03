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
                学习烘焙
            </div>
        )
    }

}
