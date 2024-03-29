const { Power } = require("../models");

module.exports.createPower = async (req, res, next) => {
  try {
    const {superhero, body} = req;

    const power = await superhero.createPower(body);
    res.send({data: power});
  } catch (error) {
    next(error);
  }
};

module.exports.getAllSuperheroPower = async (req, res, next) => {
  try {
    const {superhero} = req;

    const power = await superhero.getPowers();

    res.status(201).send({data: power});

  } catch (error) {
    next(error);
  }
}

