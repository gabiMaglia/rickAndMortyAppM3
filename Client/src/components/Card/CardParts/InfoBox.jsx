import React from "react";
import { styled } from "styled-components";

const DivBox = styled.div`
  border-radius: 4px;
  background-color: white;
  color: black;
  flex: 1;
  text-align: center;
  margin: 1rem;
  box-shadow: 7px 9px 3px #707070;
`;
const InfoLabel = styled.label`
  display: block;
  background-color: black;
  color: white;
  height: 2rem;
`;

const Info = styled.h4`
  margin: 0;
  height: 3rem;
  display: grid;
  place-content: center;

`;

/**
 * This function represents the balck and white info box in the cards and detail
 *
 * @returns {React.JSX}
 */

const InfoBox = ({ title, info }) => {
  return (
    <DivBox>
      <InfoLabel htmlFor="gender">{title}</InfoLabel>
      <Info>{info}</Info>
    </DivBox>
  );
};

export default InfoBox;
