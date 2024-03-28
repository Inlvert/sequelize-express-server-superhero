const superheroRouter = require('express').Router();
const superheroController = require('../controllers/superhero.controller');

superheroRouter.post('/', superheroController.createSuperhero);

module.exports = superheroRouter;