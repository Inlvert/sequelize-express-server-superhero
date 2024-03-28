const { Superhero } = require('../models');
const createHttpError = require('http-errors');

module.exports.findSuperhero = async (req, res, next) => {
  try {
    const {
      params: { superheroId },
    } = req;

    const superhero = await Superhero.findByPk(superheroId);

    if(!superhero) {
      return next(createHttpError(404, 'superhero not found'));
    }

    req.superhero = superhero;

    next();
  } catch (error) {
    next(error);
  }
};