import React from 'react'
export function topTab(MyCom) {
    class TopTab extends React.Component{
        constructor(){
            super();
            this.state = {
                s1:{
                    left: <img className={'icon'} src='https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48' />,//左箭头
                    right:"举报"
                },
                s2:{
                    left: <img className={'icon'} src='https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48' />,//左箭头
                    right:<span className={'collect'}>收藏</span>
                },
                s3:{
                    left: <img className={'icon'} src='https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48' />,//左箭头
                    right:"回答"
                },
                s4:{
                    left:<span className={"tab"} onClick={()=>{
                        this.props.history.push('/questionAndAnswer')
                    }}>取消</span>,
                    right:"下一步"
                }
            }
        }
        render(){
            /*const props = {
                ...this.props,
                ...{
                    newsTypeName:this.state[this.props.newsType].title
                }
            }*/
            const info = this.state[this.props.styleType];
            return (
                <div>
                    <MyCom info={info}></MyCom>
                </div>

            )
        }
    }
    return TopTab;
}
