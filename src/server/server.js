var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  orm = require('orm');

// db
app.use(orm.express('sqlite://' + __dirname + '/meetup.db', {
    define: require('./models')
}));

// routes
app.use(require('./routes'));

app.listen(port);

require('./background').getGroupIds(app);
