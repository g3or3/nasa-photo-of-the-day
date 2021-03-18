import React from "react";
import styled from "styled-components";


const StyledSummary = styled.div`
    color: ${prop => prop.theme.fontColor};
    font-family: ${prop => prop.theme.font};
    width: 70%;
    margin: 0 auto;
`

const Summary = props => {
    const {summary} = props
    return (
        <StyledSummary>
            {summary}
        </StyledSummary>
    )
}

export default Summary;