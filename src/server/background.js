var https = require('https');
var orm = require('orm');

// module.exports = function(req, res, next) {
var apiKey = '22225a3233f4b254d50203e317a2c50';
var url = 'api.meetup.com';
module.exports = {

  getGroupIds: function(models) {
    // console.dir(app.get('models'))
    var queryStr = '?';
    queryStr += 'location=milwaukee';
    queryStr += '&category=34';
    queryStr += '&sign=true';
    queryStr += '&key=' + apiKey;

    orm.connect('sqlite://meetup.db', function(err, db) {
      var models = require('./models');
      models(db, db.models);

      https.request({
        host: url,
        path: '/find/groups' + queryStr
      }, function(resp) {
        var str = '';

        //another chunk of data has been recieved, so append it to `str`
        resp.on('data', function (chunk) {
          str += chunk;
        });

        //the whole response has been recieved, so we just print it out here
        resp.on('end', function () {
          var meetups = JSON.parse(str);
          meetups.forEach(function(meetup) {
            db.models.Meetup.find(meetup.id, function(err, mu) {
              if (err) {
                db.models.Meetup.create({
                  id: meetup.id,
                  name: meetup.name,
                  desc: meetup.description,
                  link: meetup.link,
              		created: meetup.created, //Date,
              		join_mode: meetup.join_mode,
                  member_count: meetup.members,
                  who: meetup.who
                }, function(err) {console.log(err);});
              } else {
                mu.name = meetup.name;
                mu.desc = meetup.description;
                mu.link = meetup.link;
                mu.created = meetup.created;
                mu.join_mode = meetup.join_mode;
                mu.member_count = meetup.members;
                mu.who = meetup.who;
                mu.save(function(err) {console.log(err);});
              }
            });
          });
        });
      }).end();
    });

  }



};
