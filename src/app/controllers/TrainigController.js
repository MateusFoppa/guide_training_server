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
      const { charge, movements, series } = req.params;
      const training = await Training.findOne({ charge, movements, series });

      if (!training) {
        return res.status(404).json();
      }

      await Training.updateOne(req.body);

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
}

export default new TrainingController();
