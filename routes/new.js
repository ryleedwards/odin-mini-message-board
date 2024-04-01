const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('New Form Page');
});

module.exports = router;
