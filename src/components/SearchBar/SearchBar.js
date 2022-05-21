import React from "react";
import { SearchBar as SearchBarInput } from "./SearchBarStyle";

const SearchBar = ({placeholder, disabled, callback}) => {
    const handleChange = (e) => {
        callback(e.target.value)
    }
    return(
        <SearchBarInput disabled={disabled} placeholder={placeholder} onChange={handleChange}></SearchBarInput>
    )
}
export default SearchBar;