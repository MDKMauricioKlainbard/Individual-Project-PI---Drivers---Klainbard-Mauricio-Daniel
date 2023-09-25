export default function filtersOrder(order, drivers) {
    if (order === 'AlphabeticalAZ') {
        drivers = drivers.sort((a,b)=>{
            const A = a.name.toUpperCase();
            const B = b.name.toUpperCase();
            if (A < B) return -1
            if (A > B) return 1
            return 0
        })
    }
    if (order === 'AlphabeticalZA') {
        drivers = drivers.sort((a,b)=>{
            const A = a.name.toUpperCase();
            const B = b.name.toUpperCase();
            if (A < B) return 1
            if (A > B) return -1
            return 0
        })
    }
    if (order === 'AgeOY') {
        drivers = drivers.sort((a,b)=>{
            return new Date(a.datebirth) - new Date(b.datebirth)
        })
    }
    if (order === 'AgeYO') {
        drivers = drivers.sort((a,b)=>{
            return new Date(b.datebirth) - new Date(a.datebirth)
        })
    }
    return drivers
}