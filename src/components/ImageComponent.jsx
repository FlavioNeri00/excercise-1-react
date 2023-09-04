import React from "react"

class ImageComponent extends React.Component{
    render(){
        return(
            <img src={this.props.src} alt={this.props.alt} style={{maxWidth: "50%"}} />
        )
    }
}

export default ImageComponent