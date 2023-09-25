module.exports = (driverBDD) => {
    return {
        id: driverBDD.id,
        name: driverBDD.name,
        surname: driverBDD.surname,
        description: driverBDD.description,
        nationality: driverBDD.nationality,
        datebirth: driverBDD.datebirth,
        image: driverBDD.image,
        Teams: driverBDD.Teams
    }
}