import { makeAutoObservable } from "mobx"
import { TRelic, TRelicName, oldRelics, newRelics } from "../utils/relics"
import _ from "lodash"

class RelicsStore {
  constructor() {
    makeAutoObservable(this)
  }

  newRelicValues = true

  relicCount: Record<TRelicName, number> = {
    majorAncientCrown: 0,
    greaterAncientCrown: 0,
    ancientCrown: 0,
    lesserAncientCrown: 0,
    majorAncientChalice: 0,
    greaterAncientChalice: 0,
    ancientChalice: 0,
    lesserAncientChalice: 0,
    majorAncientSeal: 0,
    greaterAncientSeal: 0,
    ancientSeal: 0,
    lesserAncientSeal: 0,
    majorAncientIcon: 0,
    greaterAncientIcon: 0,
    ancientIcon: 0,
    lesserAncientIcon: 0,
  }

  get relics() {
    return this.newRelicValues ? newRelics : oldRelics
  }

  get totalRelicValue(): number {
    let total = 0

    for (const relic in this.relicCount) {
      total +=
        this.relicCount[relic as TRelicName] *
        this.relics[relic as TRelicName].value
    }

    return total
  }

  get totalRelicCount(): number {
    let total = 0

    for (const relic in this.relicCount) {
      total += this.relicCount[relic as TRelicName]
    }

    return total
  }

  get sortedRelics(): TRelic[] {
    return _.sortBy(Object.values(this.relics), "value").reverse()
  }

  get currentSortedRelics(): TRelic[] {
    return _.filter(this.sortedRelics, (relic) => {
      return this.relicCount[relic.id] > 0
    })
  }

  setRelicValue = (newRelicValue: boolean): void => {
    this.newRelicValues = newRelicValue
  }

  addRelic = (relic: TRelicName): void => {
    this.relicCount[relic]++
  }

  removeRelic = (relic: TRelicName): void => {
    if (this.relicCount[relic] > 0) {
      this.relicCount[relic]--
    }
  }

  setRelicCount = (relic: TRelicName, count: number): void => {
    this.relicCount[relic] = count
  }

  resetRelics = (): void => {
    for (const relic in this.relicCount) {
      this.relicCount[relic as TRelicName] = 0
    }
  }

  restoreSkippedRelics = (skippedRelics: TRelicName[]): void => {
    for (const relic of skippedRelics) {
      this.relicCount[relic]++
    }
  }
}

export const relicsStore = new RelicsStore()
