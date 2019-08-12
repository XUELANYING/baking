import React from 'react';
import '../../../asset/css/bakingRing/showlistcommon.scss'

export default class ComeBack extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
        this.handleScroll = this.handleScroll.bind(this)
    }
//回到顶部
    handleScroll() {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 220) {
            this.setState({
                show: true
            })
        } else {
            this.setState({
                show: false
            })
        }
    }

    backTop() {
        document.documentElement.scrollTop = 0;
    }
    componentWillMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }
    render() {
        return (
            <div className={'backTop'} style={{display: this.state.show ? 'block' : 'none'}}
                 onClick={this.backTop.bind(this)}>
                <i className={'iconfont icon-huidaodingbu-copy-copy'} onClick={this.backTop.bind(this)}></i>
            </div>
        )
    }
}
