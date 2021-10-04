import React from 'react';
import styled from 'styled-components';

const StarshipItemStyle = styled.div`
    border-radius: 5px;
    border: 1px solid #505050;
    padding: 1rem;
    margin: .5rem;
    background-color: #505050;
`;

const StarshipName = styled.h2`
    margin-top:0;
    font-size: 1.2rem;
    color: white;
`;

const StarshipModel = styled.p`
    font-size: .8rem;
    color: #b5b5b5;
`;

export default function StarshipItem(props) {
    return (
        <StarshipItemStyle key={props.index}>
            <StarshipName>{props.item.name}</StarshipName>
            <StarshipModel>{props.item.model}</StarshipModel>
        </StarshipItemStyle>
    )
}
