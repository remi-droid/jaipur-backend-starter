import express from "express"
import * as gameService from "../services/gameService"

import * as db from "../database"

const router = express.Router()

// Listen to POST /games
router.post("/", function (req, res) {
  if (!req.body.name) {
    return res.status(400).send("Missing name parameter")
  }
  const newGame = gameService.createGame(req.body.name)
  res.status(201).json({ id: newGame.id, name: newGame.name })
})


router.get("/", function (req, res) {
  const games = []
  res.status(200).json(games.map((game) => ({id:10, name:"toto"})))
})

export default router