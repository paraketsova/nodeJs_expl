const express = require(express);
const router = express.Router();


//Handle login
router.get('/login'), (request, response) => {
  response.render('login')
}

router.get('/register', (request, response) => {
  response.render('login')
})

router.post('/register', (request, response, next) => {
  //do stuff
})

router.post('/register', (request, response) => {
  //do stuff
})

router.get('/logout', (request, response) => {
  //
})


module.exports = router