import React from "react";
import styled from "styled-components";

const StarshipDataStyle = styled.div`
  margin: 5% 10%;
`;
const StarshipMainStyle = styled.div`
  display: flex;
  align-items: left;
  background-color: #222;
  border-radius: 10px;
  @media (max-width: 992px) {
    margin: 5%;
    min-width: 350px;
    flex-direction: column;
  }
`;

const StarshipImageDivStyle = styled.div`
  flex: 1 1 0;
  img {
    width: 100%;
    height: 100%;
    border-right: #9e4f60 solid 5px;
    border-bottom: none;
    border-radius: 10px 0 0 10px;
    @media (max-width: 992px) {
      border-bottom: #9e4f60 solid 5px;
      border-right: none;
      border-radius: 10px 10px 0 0;
    }
  }
`;

const ShipDescriptionStyle = styled.div`
  flex: 1 1 0;
  max-width: 800px;
  padding: 0 5%;
  font-size: 0.8rem;
  @media (max-width: 992px) {
    padding-bottom: 10%;
  }
`;

const StarshipFiguresStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media (max-width: 992px) {
    margin: 0 3%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ShipDataitemsStyle = styled.div`
  border-right: #333 1px solid;
  margin: 5% 0;
  margin-left: 5px;
  padding: 1% 2%;
  width: 215px;
  &:nth-child(4n) {
    border-right: none;
  }
  @media (max-width: 1324px) {
    &:nth-child(4n) {
      border-right: #333 1px solid;
    }
    &:nth-child(3n) {
      border-right: none;
    }
  }
  @media (max-width: 992px) {
    &:nth-child(4n) {
      border-right: #333 1px solid;
    }
    &:nth-child(3n) {
      border-right: #333 1px solid;
    }
    &:nth-child(2n) {
      border-right: none;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-top: #333 1px solid;
    &:first-child {
      border-top: none;
    }
    &:nth-child(3n) {
      border-right: none;
    }
  }
`;
const ShipDataKeyStyle = styled.div`
  padding-bottom: 10%;
  text-transform: uppercase;
  @media (max-width: 768px) {
    padding-bottom: 2%;
  }
`;
const ShipDataValueStyle = styled.div`
  color: #9e4f60;
`;

export default function StarshipData(props) {
  const ship = props.pageItem;
  const shipDatasObj = {
    Model: ship.model,
    Manufacturer: ship.manufacturer,
    "Cost in credits": ship.cost_in_credits,
    Length: ship.length,
    "Max atomosphering speed": ship.max_atmosphering_speed,
    "Number of Crew": ship.crew,
    "Number of passengers": ship.passengers,
    "Cargo capacity": ship.cargo_capacity,
    Consumables: ship.consumables,
    "Hyperdrive rating": ship.hyperdrive_rating,
    MGLT: ship.MGLT,
    "Starship class": ship.starship_class,
  };

  return (
    <StarshipDataStyle>
      <StarshipMainStyle>
        <StarshipImageDivStyle>
          <img src={`/imgs/starships/${props.id}.png`} alt={ship.name} />
        </StarshipImageDivStyle>
        <ShipDescriptionStyle>
          <h1> {ship.name} </h1>
          <div>
            Bacon ipsum dolor amet tongue sirloin meatloaf, tail ham hock
            pastrami alcatra picanha pancetta pig flank sausage hamburger.
            Sirloin swine pork belly hamburger shank. Shank doner pork, tri-tip
            hamburger kielbasa meatloaf sausage rump capicola. Pork chop short
            loin buffalo frankfurter pig turducken. Landjaeger frankfurter
            boudin shank. Drumstick doner pork belly frankfurter sausage ribeye
            pig turducken biltong.
          </div>
        </ShipDescriptionStyle>
      </StarshipMainStyle>
      <StarshipFiguresStyle>
        {Object.keys(shipDatasObj).map((key, index) => (
          <ShipDataitemsStyle key={index}>
            <ShipDataKeyStyle>{key}</ShipDataKeyStyle>
            <ShipDataValueStyle>{shipDatasObj[key]}</ShipDataValueStyle>
          </ShipDataitemsStyle>
        ))}
      </StarshipFiguresStyle>
    </StarshipDataStyle>
  );
}
