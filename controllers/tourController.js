const Tour = require('./../models/tourModel');

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find({});

    res.status(200).json({
      status: 'success',
      result: tours.length,
      data: {
        tours: tours
      }
    });
  } catch (error) {
    res.status(404).json({
      status: 'Fail',
      message: error
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const { id } = req.params;
    const tour = await Tour.findById(id);
    res.status(200).json({
      status: 'success',
      data: {
        tours: tour
      }
    });
  } catch (error) {
    res.status(404).json({
      status: 'Fail',
      message: error
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: error
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const { id } = req.params;
    const tour = await Tour.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: 'success',
      data: {
        tours: tour
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: error
    });
  }
};

exports.deleteTour = async (req, res) => {
  // 204 -- no content
  try {
    const { id } = req.params;
    await Tour.deleteOne({ _id: id });
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: error
    });
  }
};
