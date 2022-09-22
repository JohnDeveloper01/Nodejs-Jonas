const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../..//models/tourModel');

dotenv.config({ path: '/config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// reading json file

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

// import file into database

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('data successfully!');
  } catch (error) {
    if (error) throw error;
  }
};

// deleteData

const deleteData = async () => {
  try {
    await Tour.deleteMany();
  } catch (error) {
    if (error) throw error;
  }
};
