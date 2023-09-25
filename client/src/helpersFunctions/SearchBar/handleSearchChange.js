import axios from 'axios'

const closureSearchChange = (setOptions) => {
    const handleSearchChange = (event) => {
        const value = event.target.value;
        axios.get(`http://localhost:3001/driversName?name=${value}`)
        .then(data=>{
            setOptions({
                entries: data.data,
                found: true,
            })
        })
        .catch(error=>{
            setOptions({
                entries: [],
                found: false,
            })
        })
    }
    return handleSearchChange
}


export default closureSearchChange