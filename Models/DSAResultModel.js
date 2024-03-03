const mongoose = require('mongoose');
const AppError = require('../utils/appError');

const resultSchema = new mongoose.Schema({
  contestNumber: {
    type: Number,
    required: [true, 'Provide a contest number'],
    unique: true,
  },
  contestName: {
    type: String,
    required: [true, 'Provide a contest name'],
  },
  Results: [
    {
      usn: {
        type: String,
        required: [true, 'Please provide a valid usn'],
        lowercase: true,
      },
      branch: {
        type: String,
        required: [true, 'Please provide a branch'],
        lowercase: true,
        enum: {
          values: ['cse', 'ece', 'ise'],
          message: 'The type should be cse, ece, or ise',
        },
      },
      name: {
        type: String,
        required: [true, 'Provide a name'],
      },
      points: {
        type: Number,
        required: [true, 'Provide the points'],
      },
      timeLeft: {
        type: Number,
        required: [true, 'Provide the time'],
      },
    },
  ],
});

const DSAResult = mongoose.model('DSAResult', resultSchema);

module.exports = DSAResult;
