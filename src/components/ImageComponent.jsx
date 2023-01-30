import { Component } from 'react'

class ImageComponent extends Component {
    render() {
        return <img className={this.props.myCssClass} src={this.props.mySrc} alt={this.props.myAlt}/>
    }
}

export default ImageComponent