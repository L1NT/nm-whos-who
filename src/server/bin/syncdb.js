var orm = require('orm');

orm.connect('sqlite://meetup.db', function(err, db) {
	var models = require('../models');
	models(db, db.models);
	db.sync();
});
