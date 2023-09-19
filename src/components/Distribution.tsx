import { observer } from "mobx-react"
import React from "react"
import { Alert, Button, Row } from "react-bootstrap"
import { useTranslation } from "react-i18next"

import { distributionStore } from "../stores/distribution"
import { playerStore } from "../stores/players"

import styles from "./distribution.module.scss"

export const Distribution: React.FC = observer(() => {
  const { t } = useTranslation(["distribution", "relicNames"])

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
            {t("instruction", {
              playerName: playerStore.players[instruction.targetPlayer],
            })}
            <img src={imageUrl} alt={instruction.targetRelic} />{" "}
            {t(`relicNames:${instruction.targetRelic}`)}
          </h4>
          <Button
            variant="success"
            style={{ marginRight: "0.5em" }}
            onClick={distributionStore.distributeCurrentInstruction}
          >
            {t("ok")}
          </Button>
          <Button
            onClick={distributionStore.skipCurrentInstruction}
            variant="danger"
          >
            {t("skip")}
          </Button>
          <b className={styles.step}>
            {t("step", {
              step: distributionStore.currentInstructionIndex,
              total: distributionStore.totalInstructionCount,
            })}
          </b>
        </Alert>
      </Row>
    )
  } else {
    return null
  }
})
