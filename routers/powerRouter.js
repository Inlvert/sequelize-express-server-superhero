const powerRouter = require('express').Router();
const powerController = require('../controllers/power.controller');

powerRouter.post('/', powerController.createPower);
powerRouter.get('/', powerController.getAllSuperheroPower);

module.exports = powerRouter;