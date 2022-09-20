const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const port = process.env.PORT || 3000;

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('DB connection successfully');
  })
  .catch(err => {
    console.log('Fail connection');
    if (err) throw err;
  });

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App running on port ${port}`);
});
