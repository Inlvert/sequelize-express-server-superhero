const { Superhero } = require("../models");

module.exports.createSuperhero = async (req, res, next) => {
  try {
    const {body} = req;

    const superhero = await Superhero.create(body);

    console.log(superhero);

    res.send(superhero)
    
  } catch (error) {
    next(error);
  }
};
