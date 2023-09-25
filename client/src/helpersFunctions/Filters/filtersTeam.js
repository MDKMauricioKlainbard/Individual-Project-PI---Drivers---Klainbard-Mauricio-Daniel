export default function filtersTeam (team, drivers) {
    if (team === 'Everyone' || team === '') return drivers;
    if (team.length) {
        drivers = drivers.filter(driver=>{
        let teams = driver.Teams.map(team=>team.name)
        return teams.includes(team)
        })
        return drivers
    }
    
}