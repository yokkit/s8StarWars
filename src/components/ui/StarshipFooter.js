import React from 'react';
import styled from 'styled-components';

const StarshipFooterStyled = styled.footer`
    display: flex;
    justify-content: center;
    height: 200px;
    background: url("/imgs/footerImg.jpg") no-repeat top;
    background-color: #000;
`;

export default function StarshipFooter() {
    return (
        <StarshipFooterStyled>
        </StarshipFooterStyled>
    )
}
