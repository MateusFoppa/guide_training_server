import mongoose from "mongoose";

const ExerciseSchema = new mongoose.Schema({
  name: String,
  image: String,
  charge: Number,
  movements: Number,
  description: String,
  date: { type: Date, default: Date.now }
});

export default mongoose.model("exercise", ExerciseSchema);
