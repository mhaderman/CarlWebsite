var router = require('express').Router();
module.exports = router;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Carl on Duty' });
});
