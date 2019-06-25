const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();

const { router: adminRouter } = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use(shopRoutes);

app.use((req, res) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3005);
