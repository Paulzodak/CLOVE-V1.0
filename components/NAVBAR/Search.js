import React from "react";
import { InputCard } from "../UI/Input.styled";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMode } from "../redux/ui";
import { setUserInput } from "../redux/search";
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
    <InputCard
      className="NavInput"
      height={"80%"}
      mg={"1% 0%"}
      width={"100%"}
      bd={"none"}
      bg={"#3D3D49"}
      br={"2rem"}
      placeholder={"Type Here..."}
      fs={"1rem"}
      pd={"0 2rem "}
      cl={"white"}
      phcl={"white"}
      fbd={"none"}
      onFocus={focusHandler}
      onChange={inputHandler}
      onBlur={blurHandler}
      value={inputs}
    ></InputCard>
  );
};

export default Search;
