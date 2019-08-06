import React from 'react';
import {withRouter} from "react-router-dom"
import "../../asset/css/questionAnswer/eidtQuestion.scss"
import { ImagePicker, WingBlank, SegmentedControl } from 'antd-mobile';
const data = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
}, {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122',
}];
class QuestionDescription extends React.Component {
    constructor() {
        super();
        this.state = {
            files: data,
            multiple: false,
        }
    }
    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
    }
    onSegChange = (e) => {
        const index = e.nativeEvent.selectedSegmentIndex;
        this.setState({
            multiple: index === 1,
        });
    }
    render() {
        const { files } = this.state;

        return (
            <div className={"editQuestion"}>
                <div className={"tab"}>
                    <span onClick={()=>{
                        this.props.history.push('/questionAndAnswer')
                    }}>
                        <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt=""/></span>
                    <span onClick={this.handleOnClick.bind(this)}>完成</span>
                </div>
                <WingBlank>
                    <ImagePicker
                        files={files}
                        onChange={this.onChange}
                        onImageClick={(index, fs) => console.log(index, fs)}
                        selectable={files.length < 7}
                        multiple={this.state.multiple}
                    />
                </WingBlank>
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
}

export default withRouter(QuestionDescription)
