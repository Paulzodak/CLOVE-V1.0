import React from "react";
import { InputCard } from "../UI/Input.styled";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMode } from "../redux/ui";
import { setUserInput } from "../redux/search";
import styled from "styled-components";

const SearchInput = styled.input`
  height: 80%;
  margin: 1% 0;
  width: 100%;
  border: none;
  background-color: #3d3d49;
  border-radius: 2rem;
  font-size: 1rem;
  padding: 0 9rem 0 2rem;
  color: white;
  &:focus {
    color: white;
    border: none;
  }
  @media (max-width: 500px) {
    padding: 0 6rem 0 0.5rem;
  }
`;
const Search = () => {
  const dispatch = useDispatch();
  const inputs = useSelector((state) => state.search.userInput);
  console.log(inputs);
  const focusHandler = () => {
    dispatch(setSearchMode({ searchMode: true }));
  };
  const inputHandler = (e) => {
    dispatch(setUserInput({ userInput: e.target.value }));
  };
  const blurHandler = (e) => {
    dispatch(setSearchMode({ searchMode: false }));
  };
  return (
    <SearchInput
      className="NavInput"
      placeholder={"Type Here..."}
      onFocus={focusHandler}
      onChange={inputHandler}
      onBlur={blurHandler}
      value={inputs}
    />
  );
};

export default Search;
