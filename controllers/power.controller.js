const createHttpError = require("http-errors");
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

module.exports.getPower = async (req, res, next) => {
  try {
    const { params: { powerId }, superhero } = req;

    const power = await Power.findOne({
      where: {
        id: powerId,
        superheroId: superhero.id
      }
    })

    if(!power) {
      return next(createHttpError(404, 'power not found'))
    }

    res.send({data: power});

  } catch (error) {
    next(error);
  }
};


module.exports.updatePower = async (req, res, next) => {
  try {
    const {superhero, params: {powerId}, body} = req;

    const [updateCount, [power]] = await Power.update(body, {
      where: {
        id: powerId,
        superheroId: superhero.id
      },
      returning: true
    });
    
    if(updateCount !== 1) {
      return next(createHttpError(404, 'power not found'))
    }

    res.send({data: power});

  } catch (error) {
    next(error)
  }
};

module.exports.deletePower = async (req, res, next) => {
  try {
    const {superhero, params: {powerId}} =req;

    const power = await Power.findOne({
      where: {
        id: powerId,
        superheroId: superhero.id
      }
    });

    if(!power) {
      return next(createHttpError(404, 'power not found'))
    }

    await power.destroy();

    res.send({data: power})

  } catch (error) {
    next(error);
  }
}