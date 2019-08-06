import React,{Component} from 'react'


import './style.css'
class ProductItem extends Component {
    constructor(props) {
        super(props)
        this.updateImagePosition = this.updateImagePosition.bind(this)
        this.setShowImage = this.setShowImage.bind(this)
        this.state = {
            viewport: {
                showImage: false
            }
        }
    }
    render() {
        return (
            <li>
                <div>
                    <h4>{this.props.title}</h4>
                    <ProductImage
                        showImage={this.state.showImage}
                        imageSrc={this.props.image}
                        viewport={this.props.viewport}
                        updateImagePosition={this.updateImagePosition}
                    />
                </div>
            </li>
        )
    }
    updateImagePosition(top,height) {
        if(this.state.image) {
            return;
        }
        const {viewTop,viewBottom} = this.props.viewport;
        const imageScope = top + height;

        if(imageScope >= viewTop && imageScope <= viewBottom) {
            this.setShowImage(true)
        }
    }
    setShowImage(flag) {
        this.setState({
            showImage: !!flag
        })
    }
    componentWillMount() {
        if(this.props.showImage) {
            this.setShowImage(true)
        }
    }
}



export default ProductItem
