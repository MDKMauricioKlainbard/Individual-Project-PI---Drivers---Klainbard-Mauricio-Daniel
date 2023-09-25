import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { changeFilters } from "../../redux/driversSlice"
import styles from './Filters.module.css'
import closureButtonFilterFrom from "../../helpersFunctions/Filters/buttonFilterFrom"
import closureButtonFilterOrder from "../../helpersFunctions/Filters/buttonFilterOrder"
import closureButtonFilterTeam from "../../helpersFunctions/Filters/buttonFilterTeam"

export default function Filters () {
    const teams = useSelector(state=>state.drivers.teams)
    const dispatch = useDispatch();
    const [filters, setFilters] = useState({
        from: '',
        order: '',
        team: '',
    })
    const buttonFilterFrom = closureButtonFilterFrom(filters,setFilters)
    const buttonFilterOrder = closureButtonFilterOrder(filters,setFilters)
    const buttonFilterTeam = closureButtonFilterTeam(filters,setFilters)
    useEffect(()=>{
        dispatch(changeFilters(filters))
    },[filters])
    return (
        <div className = {styles.container}>
            <h3>Filters</h3>
            <div className = {styles.filter}>
                <label>From:</label>
                <select onChange = {buttonFilterFrom}>
                    <option selected value = 'Everyone'>Everyone</option>
                    <option value = "FromAPI">From API</option>
                    <option value = "CreatedInDB">Created in DB</option>
                </select>
            </div>
            <div className = {styles.filter}>
                <label>Order:</label>
                <select onChange = {buttonFilterOrder}>
                    <option selected value = 'No order'>No order</option>
                    <option value = 'AlphabeticalAZ'>Alphabetical A-Z</option>
                    <option value = 'AlphabeticalZA'>Alphabetical Z-A</option>
                    <option value = 'AgeOY'>Age from old to young</option>
                    <option value = 'AgeYO'>Age from young to old</option>
                </select>
            </div>
            <div className = {styles.filter}>
                <label>Team:</label>
                <select onChange = {buttonFilterTeam}>
                    <option selected value = 'Everyone'>Everyone</option>
                    {teams.map(team=>{
                        return(
                            <option value = {team.name}>{team.name}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}