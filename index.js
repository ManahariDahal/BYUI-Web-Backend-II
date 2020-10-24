const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');
const errorController = require('./controllers/error');
const User = require('./models/user');

const cors = require('cors');

const MONGODB_URI = process.env.MONGODB_URI || 
  "mongodb+srv://DatabaseUser:tBjzgjbgunetzQWr@cluster0.me8xf.mongodb.net/<dbname>";

const PORT = process.env.PORT || 5000 // So we can run on heroku || (OR) localhost:5000


const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});

const csrfProtection = csrf();

const corsOptions = {
    origin: "https://mysterious-journey-87274.herokuapp.com/",
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);

app.use(csrfProtection);
app.use(flash());

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});


app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});


app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);



mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(PORT);
  })
  .catch(err => {
    console.log(err);
  })


// // Route setup. You can implement more in the future!
// const ta01Routes = require('./routes/ta01');
// const ta02Routes = require('./routes/ta02');
// const ta03Routes = require('./routes/ta03'); 
// const ta04Routes = require('./routes/ta04');


// app.use((req, res, next) => {
//   User.findById('5f828f52fd55b727f601347b')
//     .then(user => {
//       req.user = user;
//       next();
//     })
//     .catch(err => console.log(err));
// });



// const options = {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     family: 4
// };



/* Br. Birche's code */
// app.use(express.static(path.join(__dirname, 'public')))
//    .set('views', path.join(__dirname, 'views'))
//    .set('view engine', 'ejs')
//    // For view engine as Pug
//    //.set('view engine', 'pug') // For view engine as PUG. 
//    // For view engine as hbs (Handlebars)
//    //.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'})) // For handlebars
//    //.set('view engine', 'hbs')
//    // .use(bodyParser({extended: false})) // For parsing the body of a POST
//    .use(bodyParser.urlencoded({extended: true}))
//    .use(bodyParser.json({extended: true}))
//    .use('/ta01', ta01Routes)
//    .use('/ta02', ta02Routes) 
//    .use('/ta03', ta03Routes) 
//    .use('/ta04', ta04Routes)
//    // .use('/prove03', prove03)
//    .get('/', (req, res, next) => {
//      // This is the primary index, always handled last. 
//      res.render('pages/index', {title: 'Welcome to my CSE341 repo', path: '/'});
//     })
//    .use((req, res, next) => {
//      // 404 page
//      res.render('pages/404', {title: '404 - Page Not Found', path: req.url})
//    })
//    // .listen(PORT, () => console.log(`Listening on ${ PORT }`));