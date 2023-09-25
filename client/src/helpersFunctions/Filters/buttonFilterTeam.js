export default function closureButtonFilterTeam (filters, setFilters) {
    return function buttonFilterTeam(event) {
        const {value} = event.target;
        setFilters({
            ...filters,
            team: value,
        })
    }
}