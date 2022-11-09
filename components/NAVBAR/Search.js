import React from "react";
import { InputCard } from "../UI/Input.styled";
import { useDispatch } from "react-redux";
import { setSearchMode } from "../redux/ui";
const Search = () => {
  const dispatch = useDispatch();
  const focusHandler = () => {
    dispatch(setSearchMode({ searchMode: true }));
  };
  return (
    <InputCard
      height={"80%"}
      mg={"1% 0%"}
      width={"100%"}
      bd={"none"}
      bg={"#3D3D49"}
      br={"2rem"}
      placeholder={"Type Here..."}
      fs={"0.8rem"}
      pd={"0 2rem "}
      phcl={"white"}
      onFocus={focusHandler}
    ></InputCard>
  );
};

export default Search;
