import { TRelicName } from "./relics"

export type TInstruction = {
  id: number
  targetPlayer: number
  targetRelic: TRelicName
}
