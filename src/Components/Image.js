import React from "react";

const NasaImg = props => {
    const {image} = props
    return (
        <img
            alt = 'APOD'
            className = 'idkyet'
            src = {image}
        /> 
    )
}

export default NasaImg;