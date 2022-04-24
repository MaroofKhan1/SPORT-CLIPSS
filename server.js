var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');
var methodOverride = require('method-override');
// let documentOne = document.querySelector('output');


// const apikey = 'AIzaSyDnAkfLdBv_E0Ki3U8ExDQWSGT_UhS2Kac';
// const searchTerm = 'khan';
// const url = `https://youtube.googleapis.com/youtube/v3/search/?part=snippet&key=${apikey}&q=${searchTerm}&maxResults=5`;
// console.log(url);

// const output = document.querySelector('.output');
// const btn = document.createElement('button');
// btn.textContent = 'Get Data';
// btn.style.display = 'block';
// output.append(btn);
// // console.log(document);

// btn.addEventListener('click',(e)=> {
//   fetch(url).then(rep=>rep.json())
//   .then((data)=>{
//     console.log(data);
//   })
// })





require('dotenv').config();
require('./config/database');
require('./config/passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const e = require('express');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use(session( {
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Make user available within every EJS template
app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=ESPN=AIzaSyDnAkfLdBv_E0Ki3U8ExDQWSGT_UhS2Kac&key=AIzaSyDnAkfLdBv_E0Ki3U8ExDQWSGT_UhS2Kac')
// .then((results)=>{
//   return results.json()
// }).then((data)=>{
//   let videos = data.items
//   for(video of videos){

//   }
// });



module.exports = app;
