const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require("express-handlebars")
const app = express();

const admindata = require('./routes/admin');
const shopRoutes = require('./routes/shop');
 
// app.engine(
//     'hbs',
//     expressHbs({
//       layoutsDir: 'views/layouts/',
//       defaultLayout: 'main-layout',
//       extname: 'hbs'
//     })
//   );
app.set("view engine","ejs")
app.set("views","views")
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', admindata.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000,()=>console.log("listening on 3000"));
