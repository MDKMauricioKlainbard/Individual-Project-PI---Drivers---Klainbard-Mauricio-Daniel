import CardList from "../../components/CardList/CardList";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getSearchedDrivers } from "../../redux/driversSlice";
import axios from "axios";

export default function SearchedDrivers () {
    const searchedDrivers = useSelector(state=>state.drivers.searchedDrivers);
    return (
        <CardList drivers = {searchedDrivers}/>
    )
}