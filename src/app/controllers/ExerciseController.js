import Exercise from "../models/Exercise";

class ExerciseController {
  async index(req, res) {
    try {
      const exercise = await Exercise.find();

      return res.json(exercise);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async show(req, res) {
    try {
      const { _id } = req.params;
      const exercise = await Exercise.findOne({ _id });

      if (!exercise) {
        return res.status(404).json();
      }

      return res.json(exercise);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async create(req, res) {
    try {
      const exercise = await Exercise.create(req.body);
      console.log(exercise.name)

      return res.status(201).json(exercise);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async update(req, res) {
    try {
      const { _id } = req.params;
      const exercise = await Exercise.findOne({ _id });

      if (!exercise) {
        return res.status(404).json();
      }

      await exercise.updateOne(req.body);

      return res.status(200).json();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async destroy(req, res) {
    try {
      const { _id } = req.params;
      const exercise = await Exercise.findOne({ _id });

      if (!exercise) {
        console.log(req.params._id)
        return res.status(404).json();

      }

      await exercise.deleteOne();

      return res.status(200).json();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new ExerciseController();
