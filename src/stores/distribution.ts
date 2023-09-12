import { makeAutoObservable } from "mobx"
import { relics } from "../utils/relics"
import { TInstruction } from "../utils/distribution"
import { relicsStore } from "./relics"
import { playerStore } from "./players"
import _ from "lodash"

class DistributionStore {
  constructor() {
    makeAutoObservable(this)
  }

  distributionInProgress = false

  distributedAP: Record<number, number> = {}

  distributionInstructions: TInstruction[] = []

  currentInstructionIndex = 1
  totalInstructionCount = 0

  get currentInstruction(): TInstruction {
    return this.distributionInstructions[0]
  }

  initializeDistributedAP = (): void => {
    this.distributedAP = {}

    playerStore.playersAsArray.forEach((player) => {
      this.distributedAP[player.id] = playerStore.playerAP[player.id]
    })
  }

  initializeDistribution = (): void => {
    if (relicsStore.totalRelicCount <= 0) {
      return
    }

    this.distributionInProgress = true
    this.currentInstructionIndex = 1
    this.totalInstructionCount = 0
    this.initializeDistributedAP()
    this.generateInstructions()
  }

  private generateInstructions = (): void => {
    this.distributionInstructions = []

    const count = _.cloneDeep(relicsStore.relicCount)

    relicsStore.sortedRelics.forEach((relic) => {
      while (count[relic.id] > 0) {
        // find all players with the lowest AP
        const lowestAP = _.min(Object.values(this.distributedAP))

        const playersWithLowestAP = _.filter(
          playerStore.playersAsArray,
          (player) => this.distributedAP[player.id] === lowestAP
        )

        // select a random player from that list
        const randomPlayer = _.sample(playersWithLowestAP)

        // generate instruction to add the relic to that player
        this.distributionInstructions.push({
          id: this.distributionInstructions.length + 1,
          targetPlayer: randomPlayer!.id,
          targetRelic: relic.id,
        })

        this.totalInstructionCount++

        // add relic value to distributedAP
        this.distributedAP[randomPlayer!.id]! += relic.value

        count[relic.id]--
      }
    })
  }

  distributeCurrentInstruction = (): void => {
    // Assigns the relic AP to the player and removes the instruction from the list
    const instruction = this.distributionInstructions[0]

    playerStore.addPlayerAP(
      instruction.targetPlayer,
      relics[instruction.targetRelic].value
    )

    relicsStore.removeRelic(instruction.targetRelic)

    this.distributionInstructions.shift()
    this.currentInstructionIndex++

    if (this.distributionInstructions.length !== 0) {
      return
    }
    this.currentInstructionIndex = 1
    this.distributionInProgress = false
    relicsStore.resetRelics()
    return
  }
}

export const distributionStore = new DistributionStore()
