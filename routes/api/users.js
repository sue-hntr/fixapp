const express = require('express')
const router = require("express").Router();
const User = require('../../models/user');
const passport = require('../../passport')
const usersController = require("../../controllers/usersController");



///////COMMENTED OUT CONTROLLER RELATED INFO SO THAT CAN TEST AUTHENTICATION MERN
// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

//   router
//   .route("/signin")
// //   .get(usersController.findById)
//   .post(usersController.create)
// //   .delete(usersController.remove);


// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

///////COMMENTED OUT CONTROLLER RELATED INFO SO THAT CAN TEST AUTHENTICATION MERN

// router.post('/', (req, res) => {
//   console.log('user signup');

//   const { username, password } = req.body
//   // ADD VALIDATION
//   User.findOne({ username: username }, (err, user) => {
//       if (err) {
//           console.log('User.js post error: ', err)
//       } else if (user) {
//           res.json({
//               error: `Sorry, already a user with the username: ${username}`
//           })
//       }
//       else {
//           const newUser = new User({
//               username: username,
//               password: password
//           })
//           newUser.save((err, savedUser) => {
//               if (err) return res.json(err)
//               res.json(savedUser)
//           })
//       }
//   })
// })

// router.post(
//   '/signin',
//   function (req, res, next) {
//       console.log('routes/user.js, signin, req.body: ');
//       console.log(req.body)
//       next()
//   },
//   passport.authenticate('local'),
//   (req, res) => {
//       console.log('signed in', req.user);
//       var userInfo = {
//           username: req.user.username
//       };
//       res.send(userInfo);
//   }
// )

// router.get('/', (req, res, next) => {
//   console.log('===== user!!======')
//   console.log(req.user)
//   if (req.user) {
//       res.json({ user: req.user })
//   } else {
//       res.json({ user: null })
//   }
// })

// router.post('/logout', (req, res) => {
//   if (req.user) {
//       req.logout()
//       res.send({ msg: 'logging out' })
//   } else {
//       res.send({ msg: 'no user to log out' })
//   }
// })





module.exports = router;
