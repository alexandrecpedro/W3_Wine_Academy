var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session")
const sequelize = require('./database/config/db');

const methodOverride = require("method-override")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//var loginRouter = require("./routes/cadastro");
var adminRouter = require("./routes/admin");
var databaseRouter = require("./routes/db");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride("_method"));
app.use(session({
  secret:"w3Academia",
  resave:true,
  saveUninitialized:false}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use('/', indexRouter);
app.use('/aluno', usersRouter);
//app.use('/cadastro', loginRouter);
app.use("/admin", adminRouter)
app.use("/database", databaseRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

sequelize.sync({ force: false }).then(() => {
  console.log("Estamos conectado a base de dados");
}).catch(error => {
  console.log("Erro!", error);
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
