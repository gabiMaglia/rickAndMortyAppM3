/* eslint-disable react/prop-types */

import { styled } from 'styled-components'

const GoBtn = ({content}) => {
  return (
    <GoButton>{content}</GoButton>
  )
}


const GoButton = styled.button`
    display: block;
    width: 120px;
    height: 30px;
    line-height: 26px;
    border-radius: 10px;
    border: .1px solid #f4faf3;
    text-align: center;
    margin-top: 25px;
    margin-bottom: -20px;
    background: none;
    text-transform: uppercase;
    text-decoration: none;
    transition: 0.2s ease-in;
    font-weight: 800;
    color: #ffffff;
    
    
    
    &:hover {
      transform: scale(1.1);
      background-color: white;
      color: black;
      border: .1px solid #000000;
      font-size: 100px;
    }



`

export default GoBtn