import Training from "../models/Training";

class TrainingController {
  async index(req, res) {
    try {
      const training = await Training.find();

      return res.json(training);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async show(req, res) {
    try {
      const { _id } = req.params;
      const training = await Training.findOne({ _id });

      if (!training) {
        return res.status(404).json();
      }

      return res.json(training);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async create(req, res) {
    try {
      const training = await Training.create(req.body);

      return res.status(201).json(training);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async update(req, res) {
    try {
      const { charge, movements, series } = req.body;
      // const { _id } = req.params;
      // console.log(_id);
      const training = await Training.findOne({ charge, movements, series });

      if (!training) {
        return res.status(404).json();
      }

      await training.updateOne(req.body);

      return res.status(200).json();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async destroy(req, res) {
    try {
      const { _id } = req.params;
      const training = await Training.findOne({ _id });

      if (!training) {
        return res.status(404).json();
      }

      await training.deleteOne();

      return res.status(200).json();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // Criando Exercise dentro de Training
  async createExercise(req, res) {
    try {
      const training_id = req.params;
      const { _id, name, image, charge, movements, description } = req.body;

      const training = await Training.findById(training_id);

      if (!training) {
        return res.status(404).json({ error: "Treinamento não encontrado" });
      }

      const exercise = {
        _id,
        name,
        image,
        charge,
        movements,
        description,
      };
      console.log(training);
      training.exercise.push(exercise);
      await training.save();

      return res.status(201).json(training);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
}
export default new TrainingController();
