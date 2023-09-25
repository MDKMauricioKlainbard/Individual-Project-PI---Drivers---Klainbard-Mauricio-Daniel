import CardList from "../../components/CardList/CardList";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getSearchedDrivers } from "../../redux/driversSlice";
import axios from "axios";

export default function SearchedDrivers () {
    const searchedDrivers = useSelector(state=>state.drivers.searchedDrivers);
    /*const dispatch = useDispatch();
    const searchedDrivers = useSelector(state=>state.drivers.searchedDrivers);
    const query = new URLSearchParams(useLocation().search);
    const name = query.get('name');*/
    /*useEffect(()=>{
        if(!name) {
            dispatch(getSearchedDrivers([]))
        }
        else{
            axios.get(`http://localhost:3001/driversName?name=${name}`)
            .then((data)=>{
                dispatch(getSearchedDrivers(data.data))
            })
        }
        
    },[])*/
    return (
        <CardList drivers = {searchedDrivers}/>
    )
}