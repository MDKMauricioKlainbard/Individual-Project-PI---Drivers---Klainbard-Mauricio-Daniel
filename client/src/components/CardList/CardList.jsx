import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from 'axios';
import styles from './CardList.module.css'
import { getDrivers, getTeams } from "../../redux/driversSlice";
import Card from "../Card/Card";

export default function CardList ({drivers}) {
    return (
        <div class = {styles.container}>
            {drivers.length ? drivers.map((driver)=>{
                return(
                    <Card id = {driver.id} name = {driver.name} image = {driver.image}/>
                )
            }) : <p>No results.</p>}
        </div>
    )
}