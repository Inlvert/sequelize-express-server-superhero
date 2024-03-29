const powerRouter = require('express').Router();
const powerController = require('../controllers/power.controller');

powerRouter.post('/', powerController.createPower);
powerRouter.get('/', powerController.getAllSuperheroPower);
powerRouter.get('/:powerId', powerController.getPower);
powerRouter.put('/:powerId', powerController.updatePower);
powerRouter.delete('/:powerId', powerController.deletePower);


module.exports = powerRouter;