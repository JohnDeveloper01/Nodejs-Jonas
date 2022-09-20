const express = require('express');
const morgran = require('morgan');
const tourRouter = require('./routes/toursRouter');
const userRouter = require('./routes/usersRouter');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'developer') {
  app.use(morgran('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('hello from middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
