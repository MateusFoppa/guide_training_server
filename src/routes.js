import { Router } from "express";

import training from "./app/controllers/TrainigController";

import exercise from "./app/controllers/ExerciseController";

const routes = new Router();

// Training
routes.get("/training/", training.index);
routes.get("/training/:_id", training.show);
routes.post("/training", training.create);
routes.put("/training/:_id", training.update);
routes.patch("/training/:_id", training.update);
routes.delete("/training/:_id", training.destroy);

// Exercise
routes.get("/exercise/", exercise.index);
routes.get("/exercise/:_id", exercise.show);
routes.post("/exercise", exercise.create);
routes.put("/exercise/:_id", exercise.update);
routes.delete("/exercise/:_id", exercise.destroy);

export default routes;
