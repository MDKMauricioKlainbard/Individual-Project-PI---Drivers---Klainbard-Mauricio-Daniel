export default function closureButtonFilterFrom(filters, setFilters) {
    return function buttonFilterFrom(event) {
        let {value} = event.target;
        setFilters({
            ...filters,
            from: value,
        })
    }
}