import { React, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

/**
 * This function represents the Card Header
 *
 * @returns {React.JSX}
 */

const CardHeader = ({ name }) => {
  const regEx = /^[^\s]+\s+[^\s]+[^\s][^\s]/;
  const result = name?.match(regEx);
  if (result) name = name.split(" ").slice(0, 2).join(" ") + "...";
 

  return (
    <HeaderDiv>
      <CardName>{result ? result[0] + "..." : name}</CardName>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.header`
  background-color: black;
  display: flex;
  min-height: 60px;
  width: 320px;
  width: 100%;
  justify-content: space-between;
  animation: light 5s infinite;

  @keyframes light {
    0% {
      box-shadow: 0px 29px 45px -22px rgba(255, 255, 255, 1);
    }
    47% {
      box-shadow: 0px 29px 45px -22px rgba(255, 255, 255, 1);
    }
    48% {
      box-shadow: 0px 29px 45px -22px rgba(255, 255, 255, 0.3);
    }
    49% {
      box-shadow: 0px 29px 45px -20px rgba(255, 255, 255, 1);
    }
    52% {
      box-shadow: 0px 29px 45px -22px rgba(255, 255, 255, 1);
    }
    53% {
      box-shadow: 0px 29px 45px -22px rgba(255, 255, 255, 0.3);
    }
    54% {
      box-shadow: 0px 29px 45px -22px rgba(255, 255, 255, 1);
    }
    85% {
      box-shadow: 0px 29px 45px -22px rgba(255, 255, 255, 1);
    }
    87% {
      box-shadow: 0px 29px 45px -22px rgba(255, 255, 255, 0.3);
    }
    88% {
      box-shadow: 0px 29px 45px -22px rgba(255, 255, 255, 1);
    }
    100% {
      box-shadow: 0px 29px 45px -22px rgba(255, 255, 255, 1);
    }
  }
`;

const CardName = styled.h2`
  flex: 1;
  font-size: 120%;
  font-weight: 800;
  color: white;
  justify-self: center;
`;

export default CardHeader;
