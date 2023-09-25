import { useState } from "react";
import closureSearchChange from "../../helpersFunctions/SearchBar/handleSearchChange";
import { useNavigate } from "react-router-dom";
import closureButtonSearch from "../../helpersFunctions/SearchBar/buttonSearch";
import { getSearchedDrivers } from "../../redux/driversSlice";
import { useDispatch } from "react-redux";
import closureEnterPress from "../../helpersFunctions/SearchBar/handleEnterPress";
import styles from './SearchBar.module.css'

export default function SearchBar () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let [options, setOptions] = useState({
        entries: [],
        found: true,
    });
    const handleSearchChange = closureSearchChange(setOptions);
    const buttonSearch = closureButtonSearch(navigate);
    const handleEnterPress = closureEnterPress(navigate, dispatch, getSearchedDrivers);
    return (
        <div className = {styles.container}>
            <input className = {styles.search} onKeyDown = {handleEnterPress} onChange = {handleSearchChange} placeholder = 'Name...'></input>
            <ul className = {styles.list}>
                {options.entries.map(option=>{
                    let id = option.id.toString();
                    return (
                        <li className = {styles.item} onClick = {buttonSearch} id = {id}>{option.name} {option.surname}</li>
                    )
                })}
            </ul>
            {!options.found && <p>No results found.</p>}
        </div>
    )
}