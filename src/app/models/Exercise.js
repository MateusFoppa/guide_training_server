import mongoose from "mongoose";

const ExerciseSchema = new mongoose.Schema({
  id: Number,
  name: String,
  image: String,
  charge: Number,
  movements: Number,
  description: String,
});

export default mongoose.model("exercise", ExerciseSchema);
