const { Superhero } = require("../models");
const createHttpError = require("http-errors");

module.exports.createSuperhero = async (req, res, next) => {
  try {
    const { body } = req;

    const superhero = await Superhero.create(body);

    console.log(superhero);

    res.send({data: superhero});
  } catch (error) {
    next(error);
  }
};

module.exports.getAllSuperheros = async (req, res, next) => {
  try {
    const superhero = await Superhero.findAll();

    console.log(superhero);

    res.send({data: superhero});
  } catch (error) {
    next(erroe);
  }
};

module.exports.getOneSuperhero = async (req, res, next) => {
  try {
    const {
      params: { superheroId },
    } = req;

    const superhero = await Superhero.findByPk(superheroId);

    if (!superhero) {
      return next(createHttpError(404, "superhero not found"));
    }

    console.log(superhero);

    res.send({ data: superhero });
  } catch (error) {
    next(error);
  }
};
