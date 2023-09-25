export default function filtersFrom(from,drivers) {
    switch (from) {
        case 'FromAPI':
            drivers = drivers.filter(driver=>!isNaN(driver.id))
            return drivers
        case 'CreatedInDB':
            drivers = drivers.filter(driver=>isNaN(driver.id))
            return drivers
        default:
            return drivers
    }
}