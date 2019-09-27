let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET /about */
router.get('/about', (req, res, next) => {
  res.render('about', {
    message: 'Content from the controller goes here'
  })
});
module.exports = router;
