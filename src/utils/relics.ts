export type TRelicName =
  | "majorAncientCrown"
  | "greaterAncientCrown"
  | "ancientCrown"
  | "lesserAncientCrown"
  | "majorAncientChalice"
  | "greaterAncientChalice"
  | "ancientChalice"
  | "lesserAncientChalice"
  | "majorAncientSeal"
  | "greaterAncientSeal"
  | "ancientSeal"
  | "lesserAncientSeal"
  | "majorAncientIcon"
  | "greaterAncientIcon"
  | "ancientIcon"
  | "lesserAncientIcon"

export type TRelic = {
  id: TRelicName
  name: string
  value: number
}

export const defaultRelicMap: Record<TRelicName, number> = {
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

export const relics: Record<TRelicName, TRelic> = {
  majorAncientCrown: {
    id: "majorAncientCrown",
    name: "Major Ancient Crown",
    value: 9600,
  },
  greaterAncientCrown: {
    id: "greaterAncientCrown",
    name: "Greater Ancient Crown",
    value: 7200,
  },
  ancientCrown: {
    id: "ancientCrown",
    name: "Ancient Crown",
    value: 4800,
  },
  lesserAncientCrown: {
    id: "lesserAncientCrown",
    name: "Lesser Ancient Crown",
    value: 2400,
  },
  majorAncientChalice: {
    id: "majorAncientChalice",
    name: "Major Ancient Chalice",
    value: 4800,
  },
  greaterAncientChalice: {
    id: "greaterAncientChalice",
    name: "Greater Ancient Chalice",
    value: 3600,
  },
  ancientChalice: {
    id: "ancientChalice",
    name: "Ancient Chalice",
    value: 2400,
  },
  lesserAncientChalice: {
    id: "lesserAncientChalice",
    name: "Lesser Ancient Chalice",
    value: 1200,
  },
  majorAncientSeal: {
    id: "majorAncientSeal",
    name: "Major Ancient Seal",
    value: 2400,
  },
  greaterAncientSeal: {
    id: "greaterAncientSeal",
    name: "Greater Ancient Seal",
    value: 1800,
  },
  ancientSeal: {
    id: "ancientSeal",
    name: "Ancient Seal",
    value: 1200,
  },
  lesserAncientSeal: {
    id: "lesserAncientSeal",
    name: "Lesser Ancient Seal",
    value: 600,
  },
  majorAncientIcon: {
    id: "majorAncientIcon",
    name: "Major Ancient Icon",
    value: 1200,
  },
  greaterAncientIcon: {
    id: "greaterAncientIcon",
    name: "Greater Ancient Icon",
    value: 900,
  },
  ancientIcon: {
    id: "ancientIcon",
    name: "Ancient Icon",
    value: 600,
  },
  lesserAncientIcon: {
    id: "lesserAncientIcon",
    name: "Lesser Ancient Icon",
    value: 300,
  },
}
