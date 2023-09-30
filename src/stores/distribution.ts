import { makeAutoObservable } from "mobx"
import { TRelicName, relics } from "../utils/relics"
import { TInstruction } from "../utils/distribution"
import { relicsStore } from "./relics"
import { playerStore } from "./players"
import _ from "lodash"

class DistributionStore {
  constructor() {
    makeAutoObservable(this)
  }

  distributionInProgress = false

  currentInstruction: TInstruction | undefined
  skippedRelics: TRelicName[] = []

  currentInstructionIndex = 1
  totalInstructionCount = 0

  initializeDistribution = (): void => {
    if (relicsStore.totalRelicCount <= 0) {
      return
    }

    this.distributionInProgress = true
    this.currentInstructionIndex = 1
    this.totalInstructionCount = relicsStore.totalRelicCount
    this.skippedRelics = []
    this.generateNextInstruction()
  }

  private generateNextInstruction = (): void => {
    // find all players with the lowest AP
    const lowestAP = _.min(Object.values(playerStore.playerAP))

    const playersWithLowestAP = _.filter(
      playerStore.playersAsArray,
      (player) => player.AP === lowestAP
    )

    // select a random player from that list
    const randomPlayer = _.sample(playersWithLowestAP)

    // get the most expensive relic still available
    const relic = relicsStore.currentSortedRelics[0]

    // generate instruction to add the relic to that player
    this.currentInstruction = {
      targetPlayer: randomPlayer!.id,
      targetRelic: relic.id,
    }
  }

  distributeCurrentInstruction = (): void => {
    const instruction = this.currentInstruction!

    playerStore.addPlayerAP(
      instruction.targetPlayer,
      relics[instruction.targetRelic].value
    )

    playerStore.addPlayerItem(instruction.targetPlayer, instruction.targetRelic)

    relicsStore.removeRelic(instruction.targetRelic)

    this.currentInstructionIndex++

    if (relicsStore.totalRelicCount > 0) {
      this.generateNextInstruction()
    } else {
      this.finalizeDistribution()
    }
  }

  skipCurrentInstruction = (keep = false): void => {
    if (keep) {
      this.skippedRelics.push(this.currentInstruction!.targetRelic)
    }

    this.currentInstructionIndex++

    const relic = relicsStore.currentSortedRelics[0]
    relicsStore.removeRelic(relic.id)

    if (relicsStore.totalRelicCount > 0) {
      this.generateNextInstruction()
    } else {
      this.finalizeDistribution()
    }
  }

  finalizeDistribution = (): void => {
    if (this.skippedRelics.length > 0) {
      relicsStore.restoreSkippedRelics(this.skippedRelics)
      this.initializeDistribution()
    } else {
      this.currentInstructionIndex = 1
      this.distributionInProgress = false
      relicsStore.resetRelics()
    }
  }
}

export const distributionStore = new DistributionStore()
