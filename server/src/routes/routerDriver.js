const {Router} = require('express');
const routerDriver = Router();


const getAllDrivers = require('../controllers/getAllDrivers');
const getDriverById = require('../controllers/getDriverById');
const createDriver = require('../controllers/createDriver');
const getDriversByName = require('../controllers/getDriversByName');


routerDriver.get('/drivers',async(req,res)=>{
    try {
        const drivers = await getAllDrivers();
        res.status(200).json(drivers);
    }
    catch(error) {
        res.status(404).json({error:error.message})
    }
})

routerDriver.get('/drivers/:idDriver',async(req,res)=>{
    const {idDriver} = req.params;
    const {bdd} = req.query;
    try {
        const driver = await getDriverById(idDriver,bdd);
        res.status(200).json(driver);
    }
    catch(error) {
        res.status(404).json({error:error.message})
    }
})

routerDriver.get('/driversName',async(req,res)=>{
    const {name} = req.query;
    try {
        const drivers = await getDriversByName(name);
        res.status(200).json(drivers);
    }
    catch(error){
        res.status(404).json({error:error.message})
    }
})

routerDriver.post('/drivers',async(req,res)=>{
    const {name, image, surname, description, nationality, datebirth, Teams} = req.body;
    try {
        const driver = await createDriver(name,surname,description,nationality,datebirth,image, Teams);
        res.status(200).json(driver);
    }
    catch(error) {
        res.status(400).json({error:error.message})
    }
})



module.exports = routerDriver;