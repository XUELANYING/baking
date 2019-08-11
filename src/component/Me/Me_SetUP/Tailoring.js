import React from "react";
import {
    Route,
    Link,
    withRouter
} from "react-router-dom"
import "@asset/css/nest/Me/Ticeimg.scss"
import ClassCropperModal from '../addlistOSon/ClassCropperModal'
import HooksCropperModal from '../addlistOSon/HooksCropperModal'
//创建人；郭宇迪
//功能：图片裁剪
//时间： 8/7 晚
//优化：scss 样式

 const MAX_FILE_SIZE = 5 * 1024 * 1024 // 文件最大限制为5M
 class  Ticeimg extends React.Component{

     constructor(props) {
         super(props)

         this.state = {
             classModalVisible: false,
             hooksModalVisible: false,

             classModalFile: null,
             hooksModalFile: null,

             classResultImgUrl: null,
             hooksResultImgUrl: null
         }
     }

     handleClassFileChange = e => {
         const file = e.target.files[0]

         if (file) {
             if (file.size <= MAX_FILE_SIZE) {
                 this.setState(
                     {
                         classModalFile: file // 先把上传的文件暂存在state中
                     },
                     () => {
                         this.setState({
                             classModalVisible: true // 然后弹出modal
                         })
                     }
                 )
             } else {
                 console.log('文件过大')
             }
         }
     }

     handleHooksFileChange = e => {
         const file = e.target.files[0]

         if (file) {
             if (file.size <= MAX_FILE_SIZE) {
                 this.setState(
                     {
                         hooksModalFile: file // 先把上传的文件暂存在state中
                     },
                     () => {
                         this.setState({
                             hooksModalVisible: true // 然后弹出modal
                         })
                     }
                 )
             } else {
                 console.log('文件过大')
             }
         }
     }

     handleGetResultImgUrl = key => blob => {
         const str = URL.createObjectURL(blob)
         this.setState({
             [key]: str
         })
     }

     render(){
         const {
             hooksModalVisible,
             hooksModalFile,
             hooksResultImgUrl
         } = this.state
        return (
            <div className={"Ticeimg"}>
                <div className={"ticeimg_top"}>
                    <img
                        src="https://image.hongbeibang.com/FvpCr89mpooArX7SM26_s5CqdeNL?imageMogr2/strip/thumbnail/640x640" alt=""
                        onClick={()=>{
                            this.props.history.go(-1)
                        }}
                    />
                </div>

                  <div className={"ticeimg_cneter"}>

                      <div className="half-area">

                              <div className={hooksResultImgUrl?"img-container":null}>
                                  {hooksResultImgUrl && (
                                      <img
                                          className="img"
                                          src={hooksResultImgUrl}
                                          alt="classResultImgUrl"
                                      />
                                  )}
                              </div>
                          {
                              hooksResultImgUrl?<p className={"hooksP"}>新的头像</p>:null
                          }
                          <label className="ticeimg_bottom">
                              <span>
                                  <img src="https://image.hongbeibang.com/FtUJvHaECXwl58x67bktx4KSjnym?imageMogr2/strip/thumbnail/640x640"  className={"sns"} alt=""  onChange={this.handleHooksFileChange}/>
                              </span>
                               <p>点击上传头像</p>
                              <input
                                  type="file"
                                  accept="image/jpeg,image/jpg,image/png"
                                  className="base-upload-input"
                                  onChange={this.handleHooksFileChange}
                              />
                          </label>

                      </div>

                      {hooksModalVisible && (
                          <HooksCropperModal
                              uploadedImageFile={hooksModalFile}
                              onClose={() => {
                                  this.setState({ hooksModalVisible: false })
                              }}
                              onSubmit={this.handleGetResultImgUrl('hooksResultImgUrl')}
                          />
                      )}
                  </div>

            </div>
        )

    }
}
export default  withRouter(Ticeimg)
