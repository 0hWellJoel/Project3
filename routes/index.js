const router = require('express').Router();
const userRoutes = require('./users');

router.use(userRoutes);

module.exports = router;