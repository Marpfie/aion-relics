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
    value: 9600,
  },
  greaterAncientCrown: {
    id: "greaterAncientCrown",
    value: 7200,
  },
  ancientCrown: {
    id: "ancientCrown",
    value: 4800,
  },
  lesserAncientCrown: {
    id: "lesserAncientCrown",
    value: 2400,
  },
  majorAncientChalice: {
    id: "majorAncientChalice",
    value: 4800,
  },
  greaterAncientChalice: {
    id: "greaterAncientChalice",
    value: 3600,
  },
  ancientChalice: {
    id: "ancientChalice",
    value: 2400,
  },
  lesserAncientChalice: {
    id: "lesserAncientChalice",
    value: 1200,
  },
  majorAncientSeal: {
    id: "majorAncientSeal",
    value: 2400,
  },
  greaterAncientSeal: {
    id: "greaterAncientSeal",
    value: 1800,
  },
  ancientSeal: {
    id: "ancientSeal",
    value: 1200,
  },
  lesserAncientSeal: {
    id: "lesserAncientSeal",
    value: 600,
  },
  majorAncientIcon: {
    id: "majorAncientIcon",
    value: 1200,
  },
  greaterAncientIcon: {
    id: "greaterAncientIcon",
    value: 900,
  },
  ancientIcon: {
    id: "ancientIcon",
    value: 600,
  },
  lesserAncientIcon: {
    id: "lesserAncientIcon",
    value: 300,
  },
}
