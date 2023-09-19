import React from 'react'
import { styled } from 'styled-components'

const GoBtn = ({content}) => {
  return (
    <GoButton>{content}</GoButton>
  )
}


const GoButton = styled.button`
    display: block;
    width: 206px;
    height: 56px;
    line-height: 56px;
    border-radius: 10px;
    border: .1px solid #f4faf3;
    text-align: center;
    margin: 15px auto;
   background: none;
    text-transform: uppercase;
    text-decoration: none;
    transition: 0.2s ease-in;
    color: #ffffff;
    

    &:hover {
        transform: scale(1.1);
    }



`

export default GoBtn