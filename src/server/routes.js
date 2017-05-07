var express = require('express');
var router = express.Router();

var models = require('./models');

router.get('/', function(req, res, next) {
  res.json({
    '/members': 'returns a list of members filtered by "?query=" parameter',
    '/meetups': 'returns a list of meetups filtered by "?query=" parameter'
  });
});

router.get('/members', function(req, res, next) {
  req.models.Member
    .find()
    .where('LOWER(name) LIKE ?', ['%'+req.query.query.toLowerCase()+'%'])
    .all(function(err, members) {
      res.json(members);
    });
});

router.get('/meetups', function(req, res, next) {
  req.models.Meetup
    .find()
    .where('LOWER(name) LIKE ?', ['%'+req.query.query.toLowerCase()+'%'])
    .all(function(err, members) {
      res.json(members);
    });
});

module.exports = router;
