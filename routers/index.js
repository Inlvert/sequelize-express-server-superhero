const router = require('express').Router();
const imageRouter = require('./imageRouter');
const superheroRouter = require('./superheroRouter');


router.use('/superheros', superheroRouter);
router.use('/images', imageRouter);



module.exports = router;