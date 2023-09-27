import axios from "axios"
import { searchStatus } from "../../redux/driversSlice";

const closureEnterPress = (navigate, dispatch, getSearchedDrivers) => {
    const handleEnterPress = (event) => {
        if(event.key === 'Enter') {
            dispatch(searchStatus(true))
            const value = event.target.value;
            axios.get(`http://localhost:3001/driversName?name=${value}`)
            .then(data=>{
                dispatch(getSearchedDrivers(data.data))
            })
            .catch(error=>{
                dispatch(getSearchedDrivers([]))
            })
            //navigate(`/home/driversName?name=${event.target.value}`)
        }
    }
    return handleEnterPress
}

export default closureEnterPress