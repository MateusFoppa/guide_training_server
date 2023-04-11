import mongoose from "mongoose";
import TrainingData from "../../interfaces/TrainingData";
import Exercise from "./Exercise";

const TrainingSchema = new mongoose.Schema({
  name: String,
  exercise: String

});

export default mongoose.model("training", TrainingSchema);
