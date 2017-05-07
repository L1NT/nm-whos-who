module.exports = function(db, models) {
  models.Meetup = db.define("meetup", {
    id: Number,
		name: String,
    desc: String,
    link: String,
		created: Number, //Date,
		join_mode: String,
    member_count: Number,
    who: String
	});

  models.Photo = db.define("photo", {
    id: Number,
    base_url: String,
    highres_link: String,
    photo_id: Number,
    photo_link: String,
    thumb_link: String,
    type: String
  });

  models.Member = db.define("member", {
    id: Number,
    bio: String,
    birthday: String,
    country: String,
    city: String,
    state: String,
    hometown: String,
    joined: Number, //Date,
    link: String,
    membership_count: Number,
    name: String,
    photo_id: Number,
    status: String,
    topics: String,
    visited: Number //Date
	});
  models.Member.hasOne('photo', models.Photo);
  models.Member.hasMany('meetups', models.Meetup, {}, {reverse: 'members', key: true});

  // require('./background').getGroupIds(models);
};
