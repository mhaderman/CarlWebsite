var router = require('express').Router();
module.exports = router;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('leaderboard', { title: 'Carl on Duty Leaderboards' });
});
