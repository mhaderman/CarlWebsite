var router = require('express').Router();
module.exports = router;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'Carl on Duty' });
});
