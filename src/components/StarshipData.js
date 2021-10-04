import React from 'react';
import styled from 'styled-components';

const StarshipDataStyle = styled.div`
    margin: auto 30%;
    img {
        width: 100%;
        max-width: 800px;
        border-bottom: red solid 2px;
    }
`;


export default function StarshipData(props) {
    const ship = props.pageItem;
    return (
        <StarshipDataStyle>
        <img src={`/imgs/starships/${props.id}.png`} alt={ship.name} />
        <h1> {ship.name} </h1>
        <div>Model: {ship.model}</div>
        <div>Manufacturer: {ship.manufacturer}</div>
        <div>Cost in credits: {ship.cost_in_credits}</div>
        <div>Length{ship.length}: </div>
        <div>Max atomosphering: {ship.max_atmosphering}</div>
        <div>Number of Crew: {ship.crew}</div>
        <div>Number of passengers: {ship.passengers}</div>
        <div>Cargo capacity: {ship.cargo_capacity}</div>
        <div>Consumables: {ship.consumables}</div>
        <div>Hyperdrive rating: {ship.hyperdrive_rating}</div>
        <div>MGLT: {ship.MGLT}</div>
        <div>Starship :{ship.starship_class}</div>
        </StarshipDataStyle>
    )
}
