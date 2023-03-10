var express = require('express');
var bodyParser = require('body-parser')

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.post('/', function(req, res, next) {
//   // console.log(`First Name : ${req.body.firstname}`);
//   // console.log(`Last Name : ${req.body.lastname}`);
//   res.send('POST recieved');
// });

router.use(bodyParser.urlencoded({extended: true}))

// POST route to handle form submission
router.post('/submit-form', (req, res) => {
  // Retrieve the form data from request body
  const { firstname, lastname } = req.body;

  // Log the form data in the console
  console.log(`First Name: ${req.body.firstname}`);
  console.log(`Last Name: ${req.body.lastname}`);

  // Send a response to the client
  res.send('POST recieved');
});

// // Start the server
// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });

module.exports = router;
