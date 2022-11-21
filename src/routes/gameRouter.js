import express from "express"
import * as gameService from "../services/gameService"

const router = express.Router()

// Listen to POST /games
router.post("/", function (req, res) {
  if (!req.body.name) {
    return res.status(400).send("Missing name parameter")
  }
  const newGame = gameService.createGame(req.body.name)
  res.status(201).json({ id: newGame.id, name: newGame.name })
})


// Listen to GT /games
router.get("/", function (req, res) {
  const games = index.getGames()

  const croppedGames = games.map(game => {return {id:game.id, name:game.name}})
  res.status(200).json(croppedGames)
})


export default router