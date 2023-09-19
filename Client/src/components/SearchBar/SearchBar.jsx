import { React, useState } from "react";

import styled from "styled-components";
import NavBtn from "../common/NavBtn";

export default function SearchBar({ addNew, maxChar, clearBoard }) {
  /**
   * This function represents the SearchBar
   * @returns {React.JSX}
   */
  const [input, setintput] = useState("");

  /**
   * Function that handle inputs write action
   */
  const handleWrite = (e) => {
    const inputValue = Number(e.target.value);
    setintput(inputValue);
  };

  /**
   * Function that handles random search
   */
  const handleRandomSearch = () => {
    const random = Math.trunc(Math.random() * maxChar);
    addNew(random);
  };
  /**
   * Function that handle how to clear the board
   */
  const handleClear = () => {
    clearBoard();
  };

  /**
   * Function that handle inputs write action
   *  @param {Event} title - The title of the book.
   */
  const handleIdSearch = (e) => {
    input && typeof input === "number" && input < maxChar
      ? addNew(input)
      : window.alert(`insert a number between 1 and ${maxChar}`);
    e.target.parentElement.previousElementSibling.value = "";
    // setintput("");
    
  };

  return (
    <SearchBarCont>
      <div onClick={handleClear}>
        <NavBtn content="Clear" />
      </div>
      <div onClick={handleRandomSearch}>
        <NavBtn content="Random" />
      </div>
      <SearchInput
        placeholder="insert id"
        onChange={handleWrite}
        type="search"
      />
      <div onClick={handleIdSearch}>
        <NavBtn content="Add" />
      </div>
    </SearchBarCont>
  );
}

//

const SearchBarCont = styled.div`
  text-align: center;
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 1rem;
  color: var(--mainFontColor);
  text-decoration: none;
  text-transform: uppercase;
  text-align: right;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 2px;
  text-shadow: var(--mainFontColor) 1px 0 5px;
  border-bottom: solid 1px var(--mainBorderColor);
  border: none;
  width: 420px;
  height: 3.3rem;
  background-color: rgba(0, 0, 0, 0.034);
  outline: none;
  &::-webkit-search-cancel-button {
    display: none;
  }
`;
