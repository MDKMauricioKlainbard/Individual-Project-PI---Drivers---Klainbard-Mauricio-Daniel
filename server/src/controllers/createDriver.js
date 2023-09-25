const {Driver, Team} = require('../db');

module.exports = async (name,surname,description,nationality,datebirth,image, Teams) => {
    console.log(name,surname,description,nationality,datebirth,image,Teams)
    if(!image) {
        image = "https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png";
    }
    if (!name || !surname || !description || !nationality || !datebirth || !Teams.length) {
        throw Error('Datos incompletos.')
    }
    
    const driver = await Driver.create({
        name,
        surname,
        description,
        image,
        nationality,
        datebirth,
    });

    for (let i = 0; i < Teams.length; i++) {
        let team = await Team.findOne({where:{name:Teams[i]}});
        await driver.addTeams(team)
    }
    console.log(driver)
    return driver;
}