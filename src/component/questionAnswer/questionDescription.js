import React from 'react';
import {withRouter,Link} from "react-router-dom"
import "../../asset/css/questionAnswer/eidtQuestion.scss"
import { Upload, Icon, Modal } from 'antd';

class QuestionDescription extends React.Component {
    constructor() {
        super();
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [],
        }
    }
    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await this.getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };

    handleChange = ({ fileList }) => this.setState({ fileList });
    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div className={"editQuestion"}>
                <div className={"tab"}>
                    <span onClick={()=>{
                        this.props.history.push('/questionAndAnswer')
                    }}>
                        <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt=""/></span>
                    <span onClick={this.handleOnClick.bind(this)}>完成</span>
                </div>
                <div className={"edit-wrap"}>
                    <input className={"edit-box"} type="text" ref={"val"} placeholder={"填写问题相关描述信息（选填）"}/>

                    <div>
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture"
                            fileList={fileList}
                            onPreview={this.handlePreview}
                            onChange={this.handleChange}
                        >
                            {fileList.length >= 8 ? null : uploadButton}
                        </Upload>
                        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                        </Modal>
                    </div>


                </div>
                <div className={"footer-upload"}>
                    <div className={"upload-box"}>
                        <span>上传图片</span>
                        <div>
                            <img src="https://image.hongbeibang.com/Fs_DiZiIStJ7iiZ4ODewDlt7LgXW?48X48&imageView2/1/w/48/h/48" alt=""/>
                        </div>
                        <input type="file" multiple="multiple" className={"upload"}/>

                    </div>
                </div>
            </div>
        )
    }
    handleOnClick(){

    }
    getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
}

export default withRouter(QuestionDescription)
