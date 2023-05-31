import { ExerciseData } from "./ExerciseData";

export interface TrainingData {
    exercise: {
        type: ExerciseData,
        require: true
      },
    name: {
        type: String,
        require: true
      }
}