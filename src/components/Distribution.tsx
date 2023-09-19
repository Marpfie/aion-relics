import { observer } from "mobx-react"
import React from "react"
import { distributionStore } from "../stores/distribution"
import { Alert, Button, Row } from "react-bootstrap"
import { playerStore } from "../stores/players"
import { relics } from "../utils/relics"
import styles from "./distribution.module.scss"

export const Distribution: React.FC = observer(() => {
  const instruction = distributionStore.currentInstruction

  if (distributionStore.distributionInProgress && instruction) {
    const imageUrl = new URL(
      `../assets/${instruction.targetRelic}.png`,
      import.meta.url
    ).href

    return (
      <Row>
        <Alert variant="success">
          <h4>
            {playerStore.players[instruction.targetPlayer]} receives{" "}
            <img src={imageUrl} alt={instruction.targetRelic} />{" "}
            {relics[instruction.targetRelic].name}
          </h4>
          <Button
            variant="success"
            style={{ marginRight: "0.5em" }}
            onClick={distributionStore.distributeCurrentInstruction}
          >
            Ok
          </Button>
          <Button
            onClick={distributionStore.skipCurrentInstruction}
            variant="danger"
          >
            Skip
          </Button>
          <b className={styles.step}>
            Instruction {distributionStore.currentInstructionIndex}/
            {distributionStore.totalInstructionCount}
          </b>
        </Alert>
      </Row>
    )
  } else {
    return null
  }
})
