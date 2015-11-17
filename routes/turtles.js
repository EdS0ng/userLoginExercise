'use strict';

var express = require('express');
var router = express.Router();
var User = require('../models/user')

var authMiddleware = require('../config/auth');

router.get('/', authMiddleware, function(req, res) {
  res.render('turtles', {title:'Main Page'});
});

router.get('/profile', authMiddleware, function (req, res){
  User.findById(req.cookies.userId, function (err, data){
    if (err) return err;
    res.render('profile', {title:'Profile', email:data.email, about: data.about})
  })
});

router.post('/', authMiddleware, function (req, res){
  User.findByIdAndUpdate(req.cookies.userId, {email: req.body.email, about:req.body.about}, function (err, data){
    if (err) return err;
    res.send(data);
  });
});

module.exports = router;
