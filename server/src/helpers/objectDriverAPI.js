module.exports = (propsDriverAPI) => {
    let image;
    let teams = [];
    if (propsDriverAPI.teams) {
        
        teams = propsDriverAPI.teams.split(',');
        teams = teams.map(team=>team.trim());
        for (let i = 0; i<teams.length; i++) {
            teams[i] = {name: teams[i]}
        }
    }
    if(!propsDriverAPI.image.url) {
        image = "https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"
    }
    else {
        image = propsDriverAPI.image.url;
    }
    return {
        id: propsDriverAPI.id,
        name: propsDriverAPI.name.forename,
        surname: propsDriverAPI.name.surname,
        description: propsDriverAPI.description,
        nationality: propsDriverAPI.nationality,
        datebirth: propsDriverAPI.dob,
        image: image,
        Teams: teams,
    }
} 