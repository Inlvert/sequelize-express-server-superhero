const router = require('express').Router();
const groupRouter = require('./groupRouter');
const superheroRouter = require('./superheroRouter');


router.use('/superheros', superheroRouter);
router.use('/groups', groupRouter);



module.exports = router;