/* eslint-disable react/prop-types */

import styled from "styled-components";
/**
 * This function represents the NavBar buttons
 *
 * @returns {React.JSX}
 */
const NavBtn = ({ content, type }) => {
  return <SearchButton type={type}>{content}</SearchButton>;
};
const SearchButton = styled.button`
  /* for button */
  text-decoration: none;
  color: var(--mainFontColor);
  text-decoration: none;
  text-transform: uppercase;
  text-align: right;
 
  font-weight: 400;
  letter-spacing: 1px;
  text-shadow: var(--mainFontColor) 1px 0 5px;
  background: none;
  cursor: pointer;

  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
`;
export default NavBtn;
