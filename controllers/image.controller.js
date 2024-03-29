const createHttpError = require("http-errors");
const { Image, Superhero } = require("../models");

module.exports.createImage = async (req, res, next) => {
  try {
    const { body: {superheroId, ...body} } = req;

    const imageAutor = await Superhero.findByPk(superheroId);

    if(!imageAutor) {
      return next(createHttpError(404, 'superhero not found'));
    }

    const image = await Image.create(body);

    await image.addSuperhero(imageAutor);

    res.send({data: image})


  } catch (error) {
    next(error);
  }
};



