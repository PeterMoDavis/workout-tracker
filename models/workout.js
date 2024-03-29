const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: String,
    default: () => new Date(),
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please specify resistance or cardio",
      },
      name: {
        type: String,
        trim: true,
        required: "Please choose an exercise name",
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      distance: {
        type: Number,
      },
      duration: {
        type: Number,
      },
      totalDuration: {
        type: Number,
      },
      totalWeight: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
