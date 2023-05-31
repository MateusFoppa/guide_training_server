import { Router } from "express";

import training from "./app/controllers/TrainigController";

import exercise from "./app/controllers/ExerciseController";

import user from "./app/controllers/UserController";

// eslint-disable-next-line import/no-extraneous-dependencies
const jwt = require("jsonwebtoken");

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

// Middleware de Authenticator jwt
// eslint-disable-next-line consistent-return
const checkToken = (req, res, next) => {
  // eslint-disable-next-line dot-notation
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Acesso Negado" });
  }

  try {
    const secret = process.env.SECRET;

    jwt.verify(token, secret);
    next();
  } catch (err) {
    res.status(400).json({ msg: "Token Inválido" });
  }
};

// User
// // Private Route
routes.get("/user/:id", checkToken, user.show);

// Register User
routes.post("/auth/register", user.register);

// Login User
routes.post("/auth/login", user.login);

// Criando Rotas para adicionar exercicios dentro de Training

// Rota GET
// routes
//   .route("/trainings/:id/exercises")
//   .get("/trainings/:id")
//   .get("/exercises");
routes.post("/training/:_id/exercise", training.createExercise);

export default routes;
