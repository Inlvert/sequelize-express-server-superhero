const groupRouter = require('express').Router();
const groupController = require('../controllers/group.controller')

groupRouter.post('/', groupController.createGroup);
groupRouter.get('/', groupController.getAllGroups);

module.exports = groupRouter;