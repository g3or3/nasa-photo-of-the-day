import React from "react";

const Img = props => {
    const {image} = props
    return (
        <img
            alt = 'APOD'
            src = {image}
        /> 
    )
}

export default Img;