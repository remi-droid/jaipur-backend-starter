import * as db from "../database"
import { shuffle } from "lodash"

// Créer et retourne un deck mélangé avec 3 chameaux en moins.
export function initDeck() {

    const deck = []
    let i = 0

    // On ajoute Diamant, Or, Argent
    for (i=0; i < 6; i++) deck.push('diamond')

    // On ajoute Diamant, Or, Argent
    for (i=0; i < 6; i++) deck.push('gold')

    // On ajoute Diamant, Or, Argent
    for (i=0; i < 6; i++) deck.push('silver')

    // Vetements
    for (i=0; i < 8; i++) deck.push('cloth')

    // Epices
    for (i=0; i < 8; i++) deck.push('spice')

    // Cuirs
    for (i=0; i < 8; i++) deck.push('leather')
    
    // Chameaux
    for (i=0; i < 11 - 3; i++) deck.push('camel')

    // Melange du deck
    return shuffle(deck)
}

// Pioche x cartes d'un deck.
export function drawCards(deck, count = 1) {

    const tabCartesPiochees = []

    // On ajoute les cartes piochees dans le nouveau tableau et 
    // on les retire du deck
    for (let i = 0; i < count; i++)
    {
        tabCartesPiochees.push(deck.pop())
    }
    
    return tabCartesPiochees
}

// Déplace les chameaux de la main d'un joueur (_players[i].hand) vers son enclos (_players[i].camelsCount).
export function putCamelsFromHandToHerd(game) {
    // TODO
    // Pour chaque joueur:
    //  Pour chaque chameau dans la main du joueur
    //  Enlever le chameau de la main et le mettre dans l'enclos
}

// Créer un objet game.
export function createGame(name) {

    const deck = initDeck()
    const market = drawCards(deck, 2)
    market.push("camel")
    market.push("camel")
    market.push("camel")

    const game = 
    {
        // identifiant de la partie
        id: 1,
        name: name,
        // pioche
        _deck: deck,
        // marché
        market: market,
        _players: [
            {
                // main
                hand: ["cloth", "silver", "diamonds"],
                // nombre de chameaux
                camelsCount: 2, 
                // Score actuel
                score: 0,
            },
            {
                hand: ["gold", "gold", "leather", "diamonds", "spice"],
                camelsCount: 0,
                score: 0,
            }
        ],
        // joueur courant (0 ou 1)
        currentPlayerIndex: 0,
        tokens: {
            diamonds: [7,7,5,5,5],
            gold: [6,6,5,5,5],
            silver: [5,5,5,5,5],
            cloth: [5,3,3,2,2,1,1],
            spice: [5,3,3,2,2,1,1],
            leather: [4,3,2,1,1,1,1,1,1],
        },
        // ne pas oublier de les mélanger au début de la partie
        _bonusTokens: {
            3: [2,1,2,3,1,2,3],
            4: [4,6,6,4,5,5],
            5: [8,10,9,8,10]
        },
        // Identifiant du gagnant si la partie est terminée sinon vaut undefined.
        winnerId: undefined
    }
    
    // TODO
    // Initialiser un nouveau deck avec la fonction précédente
    // Créer le marché avec 3 chameaux et 2 cartes piochés du deck
    // Générer un nouvel identifiant pour la partie
    // Pour chaque joueur:
    //  Créer la main en piochant 5 cartes du deck
    //  Initialiser l'enclos à 0
    //  Initialiser le score à 0
    // Créer les objets contenant les jetons
    // Rassembler le tout pour créer la partie
    // Mettre les chameaux des mains des joueurs dans leurs enclos avec la fonction précédente
    // Retourner la partie 
    return {}
}