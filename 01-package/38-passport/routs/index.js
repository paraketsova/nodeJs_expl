const express = require(express);
const router = express.Router();


router.get('/'), (request, response) => {
  response.render('welcome')
}

router.get('/register', (request, response) => {
  response.render('register')
})

module.exports = router