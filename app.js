const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();

const { router: adminRouters } = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouters);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3005);
