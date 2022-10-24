import * as gameService from "./gameService"

describe("Game service", () => {
  test("should put camels from hand to herd", () => {

    let game = {
      _players: [
        { hand: ["camel", "gold", "silver", "camel", "gold"], camelsCount: 0}
      ]
    }

    let oldCamelsCount = game._players[0].camelsCount
    
    gameService.putCamelsFromHandToHerd(game)

    let camelIndex = game._players[0].hand.findIndex((card) => card === "camel")
    
    expect(game._players[0].camelsCount).toEqual(oldCamelsCount + 2)
    expect(camelIndex).toEqual(-1)
  })

  test("should draw cards", () => {

    let deck = ["gold", "gold", "gold"]
    let drawncard = gameService.drawCards(deck, 1)
    expect(drawncard).toEqual(["gold"])
    expect(deck).toEqual(["gold", "gold"])

  })

  test("should init a deck", () => {
    // TODO

    let deck = gameService.initDeck()

    let diamonds = 0
    let golds = 0
    let silvers = 0
    let clothes = 0
    let spices = 0
    let leathers = 0
    let camels = 0  
    let others = 0

    for (let i = 0; i < deck.length; i++)
    {
      switch(deck[i])
      {
        case "diamond": 
          diamonds++;
          break;

        case "gold": 
          golds++;
          break;

        case "silver":
          silvers++;
          break;

        case "cloth":
          clothes++;
          break;
          
        case "spice":
          spices++;
          break;

        case "leather":
          leathers++;
          break;

        case "camel":
          camels++;
          break;

        default: 
          others++;
          break;
      }
    }

    //expect(deck.filter(card=> card ==="diamond").length).toEqual(6)

    expect(diamonds).toEqual(6)
    expect(golds).toEqual(6)
    expect(silvers).toEqual(6)
    expect(clothes).toEqual(8)
    expect(spices).toEqual(8)
    expect(leathers).toEqual(10)
    expect(camels).toEqual(11-3)
    expect(others).toEqual(0)

  })
})
