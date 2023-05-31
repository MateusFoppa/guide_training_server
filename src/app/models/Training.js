import mongoose from "mongoose";
import ExerciseData from "../../interfaces/ExerciseData.ts";

const TrainingSchema = new mongoose.Schema({
  exercise: ExerciseData,
  name: String,
});

export default mongoose.model("training", TrainingSchema);
