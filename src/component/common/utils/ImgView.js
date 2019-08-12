import React from 'react'
import PropTypes from 'prop-types'
import '../../../asset/css/questionAnswer/clientInfo.scss';
/**
 * 解析图片url中的图片大小
 * @param {array} list 图片列表
 */
function formatImg(list) {
    return list.map(url => {
        return {
            url
        }
    })
}

export default class ImgView extends React.Component {
    static propTypes = {
        imgList: PropTypes.array.isRequired,
        list: PropTypes.array.isRequired,//初始图片列表
        height: PropTypes.string.isRequired,
        width: PropTypes.string.isRequired,
    }
    state = {
        imgList: [],
        list: [],
        height:null,
        width:null
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.list !== prevState.list) {
            console.log( nextProps.list)
            return {
                imgList: formatImg(nextProps.list),
                list: nextProps.list,
                height:nextProps.height,
                width:nextProps.width,
            }
        }
        return null
    }

    render() {
        const { imgList,height,width } = this.state

        return (
            <div  className={"box-wrap-img"}>
                {
                    imgList.map((item,i) => (
                        <div key={i}>
                            <div className={"img-box"} style={{ width: `${width}%`,height: `${height}` ,backgroundColor: "#EEEDEB"  }}>
                                <div className={"loadingBox"} style={{ backgroundImage: `url(${this.imgLoading})`,backgroundSize:"100%",backgroundColor: "#EEEDEB" }}></div>
                                <img src={item.url} alt=""/>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
