import React,{Component} from "react";
import {Link}from "react-router-dom";
import {bindActionCreators} from 'redux'
import actionCreator from "../../store/actionCreator";
import {connect} from 'react-redux'
import "../../asset/css/login/login.scss"
import {withRouter} from 'react-router-dom'

 class Login extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
     login(){
         this.props.getUserInfo();
         if(this.refs.userName.value===this.props.userInfo.userName && this.refs.passWord.value===this.props.userInfo.passWord) {
             this.props.history.push("/");
             console.log(1111);
             localStorage.userName = this.props.userInfo.userName;
             localStorage.passWord = this.props.userInfo.passWord;
             alert("欢迎进入！")
         }else {
             alert("用户名或密码错误")
         }
         console.log("存在",localStorage)
     }
    render(){
        console.log(888,this.props.userInfo.userName)
        return (
            <div className={"login-wrap"}>
                <form action="">
                        用户名: <input type="text" className={"userName"} name="userName" ref={"userName"}/><br/>
                        密  码: <input type="password" className={"passWord"} name="passWord" ref={"passWord"}/><br/>
                        <input type="submit" value={"登录"} onClick={this.login.bind(this)} />
                    <br/>
                        <Link to={"/"}><button>返回首页</button></Link>
                </form>

            </div>
        )
    }

     componentDidMount(){
         this.props.getUserInfo();
         console.log(199,this.props.userInfo);

     }
}
export default connect((state) => ({userInfo: state.learnBaking.userInfo}),
    (dispatch) => (bindActionCreators(actionCreator, dispatch)))(withRouter(Login))