const closureButtonSearch = (navigate) => {
    const buttonSearch = (event) => {
        let id = event.target.id;
        navigate(`/home/drivers/${id}`)
    }
    return buttonSearch
}

export default closureButtonSearch;