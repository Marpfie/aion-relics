import { observer } from "mobx-react"
import { Button, ButtonGroup, Col, Form } from "react-bootstrap"
import { useTranslation } from "react-i18next"

import { distributionStore } from "../stores/distribution"
import { relicsStore } from "../stores/relics"
import { TRelic } from "../utils/relics"

import styles from "./relicCol.module.scss"

export const RelicCol: React.FC<{ relic: TRelic }> = observer(({ relic }) => {
  const { t } = useTranslation("relicNames")

  const imageUrl = new URL(`../assets/${relic.id}.png`, import.meta.url).href

  return (
    <Col md="auto">
      <div>
        {t(relic.id)} - {relic.value}
      </div>
      <div className={styles.relicInput}>
        <img src={imageUrl} alt={relic.id} />
        <Form.Control
          disabled={distributionStore.distributionInProgress}
          type="number"
          min={0}
          value={relicsStore.relicCount[relic.id]}
          onChange={(ev) =>
            relicsStore.setRelicCount(relic.id, Number(ev.target.value))
          }
        />
        <ButtonGroup>
          <Button
            disabled={distributionStore.distributionInProgress}
            size="sm"
            variant="primary"
            onClick={() => relicsStore.addRelic(relic.id)}
          >
            +
          </Button>
          <Button
            disabled={distributionStore.distributionInProgress}
            size="sm"
            variant="primary"
            onClick={() => relicsStore.removeRelic(relic.id)}
          >
            -
          </Button>
        </ButtonGroup>
      </div>
    </Col>
  )
})
