import React from 'react';
import styled from 'styled-components';

const StarshipFooterStyled = styled.footer`
    display: flex;
    justify-content: center;
`;

export default function StarshipFooter() {
    return (
        <StarshipFooterStyled>
            <img src="/imgs/footerImg.jpg" alt="footer"/>
        </StarshipFooterStyled>
    )
}
