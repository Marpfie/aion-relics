import { makeAutoObservable } from "mobx"
import { TRelic, TRelicName, relics } from "../utils/relics"
import _ from "lodash"

class RelicsStore {
  constructor() {
    makeAutoObservable(this)
  }

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

  get totalRelicValue(): number {
    let total = 0

    for (const relic in this.relicCount) {
      total +=
        this.relicCount[relic as TRelicName] * relics[relic as TRelicName].value
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
    return _.sortBy(Object.values(relics), "value").reverse()
  }

  get currentSortedRelics(): TRelic[] {
    return _.filter(this.sortedRelics, (relic) => {
      return this.relicCount[relic.id] > 0
    })
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
}

export const relicsStore = new RelicsStore()
