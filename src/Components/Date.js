import React from "react";
import styled from 'styled-components';


const StyledDate = styled.h3`
    color: ${prop => prop.theme.fontColor};
    font-family: ${prop => prop.theme.font};
`

const DateImg = props => {
    const {date} = props
    return (
        <StyledDate>
            {date}
        </StyledDate>
    )
}

export default DateImg;