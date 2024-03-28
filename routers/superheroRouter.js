const superheroRouter = require('express').Router();
const superheroController = require('../controllers/superhero.controller');
const { findSuperhero } = require('../middlewares/superhero.mw');

superheroRouter.post('/', superheroController.createSuperhero);
superheroRouter.get('/', superheroController.getAllSuperheros);
superheroRouter.get('/:superheroId', findSuperhero, superheroController.getOneSuperhero);
superheroRouter.delete('/:superheroId', findSuperhero, superheroController.deleteSuperhero);
superheroRouter.put('/:superheroId', findSuperhero, superheroController.updateSuperhero);

module.exports = superheroRouter;