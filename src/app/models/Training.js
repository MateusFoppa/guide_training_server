import mongoose from "mongoose";
import TrainingData from "../../interfaces/TrainingData";


const TrainingSchema = new mongoose.Schema({
  exercise: TrainingData,
  name: String,
  id: {
    type: Number,
    require: false
  }
});

export default mongoose.model("training", TrainingSchema);
