import React from "react";
import styled from 'styled-components';


const StyledCR = styled.h4`
    color: ${prop => prop.theme.fontColor};
    font-family: ${prop => prop.theme.font};
`

const Copyright = props => {
    const {copyright} = props
    return (
        <StyledCR>
            {copyright}
        </StyledCR>
    )
}

export default Copyright;