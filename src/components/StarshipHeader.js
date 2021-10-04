import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.header`
    text-align: center;
`;

const LogoArea = styled.div`
    margin: 1rem;
`;

const LogoImg = styled.img`
    width: 150px;
`;

export default function StarshipHeader() {
    return (
        <HeaderStyle>
            <LogoArea>
            <LogoImg src="logoBig.png" alt="logo" />
            </LogoArea>
        </HeaderStyle>
    )
}
