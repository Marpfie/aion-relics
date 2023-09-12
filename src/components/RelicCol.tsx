import { Col, Form, Button, ButtonGroup } from "react-bootstrap"
import { TRelic } from "../utils/relics"
import styles from "./relicCol.module.scss"
import { observer } from "mobx-react"
import { relicsStore } from "../stores/relics"
import { distributionStore } from "../stores/distribution"

export const RelicCol: React.FC<{ relic: TRelic }> = observer(({ relic }) => {
  const imageUrl = new URL(`../assets/${relic.id}.png`, import.meta.url).href

  return (
    <Col md="auto">
      <div>
        {relic.name} - {relic.value}
      </div>
      <div className={styles.relicInput}>
        <img src={imageUrl} alt={relic.id} />
        <Form.Control
          disabled={distributionStore.distributionInProgress}
          type="number"
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
