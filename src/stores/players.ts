import { makeAutoObservable } from "mobx"

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
  }

  removePlayer = (playerNumber: number): void => {
    delete this.players[playerNumber]
    delete this.playerAP[playerNumber]
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
}

export const playerStore = new PlayerStore()
