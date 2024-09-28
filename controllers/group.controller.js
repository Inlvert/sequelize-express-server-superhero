const createHttpError = require("http-errors");
const { Group, Superhero } = require("../models");

module.exports.createGroup = async (req, res, next) => {
  try {
    const {
      body: { superheroId, ...body },
    } = req;

    const groupAutor = await Superhero.findByPk(superheroId);

    if (!groupAutor) {
      return next(createHttpError(404, "user not found"));
    }
    const group = await Group.create(body);

    await group.addSuperhero(groupAutor);

    res.send(group);
  } catch (error) {
    next(error);
  }
};

module.exports.getAllGroups = async (req, res, next) => {
  try {

    const groups = await Group.findAll();

    res.send({ data: groups });

  } catch (error) {
    next(error);
  }
};
