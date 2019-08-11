import imgLoading from '../../asset/img/imgLoding.gif/'
import more from "../../asset/img/more.gif";
export function loading(MyCom){
    class Context extends MyCom{
        render(){
            console.log(this.state.isLoading);
            {
                if(this.state.isLoading){
                    return (
                        <div
                            style={{width: "100%", margin: "0 auto", background: "#ccc", display: "flex", justifyContent: "center"}}
                            ref={"wrapper"}>
                            <img src={more} alt=""/>
                        </div>
                    )
                }else{
                    return super.render();
                }
            }
            // return super.render();
            // return (
            //     <div>高阶组件 继承</div>
            // )
        }
    }
    return Context;
}
