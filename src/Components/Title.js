import React from "react";
import styled from 'styled-components'


const StyledTitle = styled.h1`
    color: ${prop => prop.theme.fontColor};
    font-family: ${prop => prop.theme.font};
`

const Title = props => {
    const {title} = props
    return (
        <StyledTitle>
            {title}
        </StyledTitle>
    )
}

export default Title;