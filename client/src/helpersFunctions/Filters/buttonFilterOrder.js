export default function closureButtonFilterOrder (filters, setFilters) {
    return function buttonFilterOrder (event) {
        const {value} = event.target;
        setFilters({
            ...filters,
            order: value,
        })
    }
}