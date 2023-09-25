import axios from "axios"

const closureEnterPress = (navigate, dispatch, getSearchedDrivers) => {
    const handleEnterPress = (event) => {
        if(event.key === 'Enter') {
            const value = event.target.value;
            axios.get(`http://localhost:3001/driversName?name=${value}`)
            .then(data=>{
                dispatch(getSearchedDrivers(data.data))
            })
            .catch(error=>{
                dispatch(getSearchedDrivers([]))
            })
            navigate(`/home/driversName?name=${event.target.value}`)
        }
    }
    return handleEnterPress
}

export default closureEnterPress