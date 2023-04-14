import mongoose from "mongoose";
//Os exercicios seram acionados estáticamente
const ExerciseSchema = new mongoose.Schema({
  id: Number,
  name: String,
  image: String,
  charge: Number,
  movements: Number,
  description: String,
});

export default mongoose.model("exercise", ExerciseSchema);
