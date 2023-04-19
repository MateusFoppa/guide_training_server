export interface TrainingData {
  id: {
    type: Number,
    require: true
  }
  name: {
    type: String,
    require: true
  }
  image: {
    type: String,
    require: false
  }
  charge: {
    type: Number,
    require: false
  }
  series: {
    type: Number,
    require: false
  }
  movements: {
    type: Number,
    require: false
  }
  description: {
    type: String,
    require: false
  }
}
