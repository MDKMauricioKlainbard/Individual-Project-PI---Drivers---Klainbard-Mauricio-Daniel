const {Router} = require('express');
const routerTeam = Router();

const getAllTeams = require('../controllers/getAllTeams');
const postAllTeams = require('../controllers/postAllTeams');

routerTeam.get('/teams',async(req,res)=>{
    try {
        const teams = await getAllTeams();
        res.status(200).json(teams);
    }
    catch (error) {
        res.status(404).json({error:error.message});
    }
})

routerTeam.post('/teams',async(req,res)=>{
    try {
        const teams = await postAllTeams();
        res.status(200).json(teams);
    }
    catch (error ) {
        res.status(404).json({error:error.message})
    }
})

module.exports = routerTeam;