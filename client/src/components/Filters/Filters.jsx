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
            <h3 className = {styles.h3}>Filters</h3>
            <div className = {styles.filter}>
                <label className = {styles.filterName}>From:</label>
                <select className = {styles.select} onChange = {buttonFilterFrom}>
                    <option className = {styles.options} selected value = 'Everyone'>Everyone</option>
                    <option className = {styles.options} value = "FromAPI">From API</option>
                    <option className = {styles.options} value = "CreatedInDB">Created in DB</option>
                </select>
            </div>
            <div className = {styles.filter}>
                <label className = {styles.filterName}>Order:</label>
                <select className = {styles.select} onChange = {buttonFilterOrder}>
                    <option className = {styles.options} selected value = 'No order'>No order</option>
                    <option className = {styles.options} value = 'AlphabeticalAZ'>Alphabetical A-Z</option>
                    <option className = {styles.options} value = 'AlphabeticalZA'>Alphabetical Z-A</option>
                    <option className = {styles.options} value = 'AgeOY'>Age from old to young</option>
                    <option className = {styles.options} value = 'AgeYO'>Age from young to old</option>
                </select>
            </div>
            <div className = {styles.filter}>
                <label className = {styles.filterName}>Team:</label>
                <select className = {styles.select} onChange = {buttonFilterTeam}>
                    <option className = {styles.options} selected value = 'Everyone'>Everyone</option>
                    {teams.map(team=>{
                        return(
                            <option className = {styles.options} value = {team.name}>{team.name}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}