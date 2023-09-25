module.exports = (data) => {
    let teams = [];
    teams = data.map(driver=>driver.teams);
    const teamsNoRepeated = new Set();
    teams.forEach(teamsString=>{
        if (teamsString) {
            let names = teamsString.split(',');
            names = names.map(namesString=>namesString.trim());
            names.forEach(name=>{
                teamsNoRepeated.add(name);
            })
        }
    })
    return [...teamsNoRepeated]
}