import { makeAutoObservable } from "mobx"
import { TRelicName, defaultRelicMap } from "../utils/relics"
import _ from "lodash"

export type TPlayer = {
  id: number
  name: string
  AP: number
}

class PlayerStore {
  constructor() {
    makeAutoObservable(this)
  }

  lastPlayerId = 1

  players: Record<number, string> = {
    1: "Player 1",
  }

  playerAP: Record<number, number> = {
    1: 0,
  }

  playerItems: Record<number, Record<TRelicName, number>> = {
    1: _.cloneDeep(defaultRelicMap),
  }

  get playersAsArray(): TPlayer[] {
    return Object.entries(this.players).map(([id, name]) => ({
      id: Number(id),
      name,
      AP: this.playerAP[Number(id)],
    }))
  }

  addPlayer = (): void => {
    this.lastPlayerId++
    this.players[this.lastPlayerId] = `Player ${this.lastPlayerId}`
    this.playerAP[this.lastPlayerId] = 0
    this.playerItems[this.lastPlayerId] = _.cloneDeep(defaultRelicMap)
  }

  removePlayer = (playerNumber: number): void => {
    delete this.players[playerNumber]
    delete this.playerAP[playerNumber]
    delete this.playerItems[playerNumber]
  }

  renamePlayer = (playerNumber: number, name: string): void => {
    this.players[playerNumber] = name
  }

  setPlayerAP = (playerNumber: number, ap: number): void => {
    if (ap >= 0) {
      this.playerAP[playerNumber] = ap
    }
  }

  addPlayerAP = (playerNumber: number, ap: number): void => {
    this.playerAP[playerNumber] += ap
  }

  addPlayerItem = (playerNumber: number, item: TRelicName): void => {
    this.playerItems[playerNumber][item]++
  }
}

export const playerStore = new PlayerStore()
