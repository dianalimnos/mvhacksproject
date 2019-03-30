var express = require('express');
const router = express.Router();

const auth = require('./helpers/auth');
const Quiz = require('../models/quiz');
const User = require('../models/user');

router.get('/', auth.requireLogin, (req, res, next) => {
  // Quiz.find({users: res.locals.currentUserId}).sort({ date: +1 }).exec(function(err, quiz) {
  //   if(err) {
  //     console.error(err);
  //   } else {
  //     res.render('days/index', { days: days });
  //   }
  // });
       res.render('quiz/index', { quiz: quiz });
});

// /* POST day. */
// router.post('/', auth.requireLogin, (req, res, next) => {
//   let day = new Day(req.body);
//   day.users.push(req.session.userId);
//
//   Day.create(day).then(() => {
//     return res.redirect('/days');
//   }).catch((err) => {
//     console.log(err.message);
//   });
//
//   // Day.save(function(err, day) {
//   //   console.log(day);
//   //   if (err) { console.error(err);}
//   //   return res.redirect('/days')
//   // });
// });
//
// Days new
router.get('/new', auth.requireLogin, (req, res, next) =>{
  User.findById(req.params.userId, function(err, quiz) {
    if(err) { console.error(err);}

    res.render('quiz/new');
  });
});
//
// // /* GET days by ID. */
// // router.get('/:id', auth.requireLogin, (req, res, next) => {
// //   Day.findById(req.params.id, (err, day) => {
// //     if (err) {
// //       console.log(err);
// //     }
// //     res.render('days/show', { day: day  });
// //   });
// // });
//
// // Days show
// router.get('/:id', auth.requireLogin, (req, res, next) => {
//   Day.findById(req.params.id, function(err, day) {
//     if(err) { console.error(err) };
//
//     res.render('days/show', { day: day });
//   });
// });

module.exports = router;