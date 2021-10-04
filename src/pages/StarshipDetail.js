import React from 'react';
import styled from 'styled-components';
import StarshipContent from '../components/StarshipContent';
import StarshipHeader from '../components/StarshipHeader';

const StarshipDetailStyled = styled.div`
    color:white;
`;

export default function StarshipDetail() {
    return (
        <StarshipDetailStyled>
            <StarshipHeader />
            <StarshipContent />
        </StarshipDetailStyled>
    )
}
