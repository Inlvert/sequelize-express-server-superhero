const imageRouter = require('express').Router();
const imageController = require('../controllers/image.controller')


imageRouter.post('/', imageController.createImage)

module.exports = imageRouter;
