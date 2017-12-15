//Models

var address_table = require('../model/leaderboard');
//Routing & utils
var router = require('express').Router(); function render(file,err,result,res){
  if(err)
    res.send(err);
  else
    res.render('leaderboard', {'result': result});
}; module.exports = router;
//Viewing All
router.get('/', function(req, res) {
    address_table.getAll((err, result) => {
      render('index',err,result,res)
  });
});
