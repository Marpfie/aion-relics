import { observer } from "mobx-react"
import { Accordion, Button, Col, Form, Row } from "react-bootstrap"
import { useTranslation } from "react-i18next"

import { distributionStore } from "../stores/distribution"
import { playerStore } from "../stores/players"
import { relicsStore } from "../stores/relics"

import styles from "./player.module.scss"

export const Player: React.FC<{ id: number }> = observer(({ id }) => {
  const { t } = useTranslation(["players", "relicNames"])

  return (
    <Accordion.Item eventKey={`${id}`}>
      <Accordion.Header>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Form.Control
              type="string"
              value={playerStore.players[id]}
              onClick={(ev) => ev.stopPropagation()}
              onChange={(ev) => playerStore.renamePlayer(id, ev.target.value)}
            />
          </Col>
          <Col md="auto">
            <Form.Control
              disabled={distributionStore.distributionInProgress}
              type="number"
              value={playerStore.playerAP[id]}
              onClick={(ev) => ev.stopPropagation()}
              onChange={(ev) =>
                playerStore.setPlayerAP(id, Number(ev.target.value))
              }
            />
          </Col>
          <Col md="auto">
            <Button
              disabled={distributionStore.distributionInProgress}
              variant="danger"
              onClick={(ev) => {
                ev.stopPropagation()
                playerStore.removePlayer(id)
              }}
            >
              {t("remove")}
            </Button>
          </Col>
        </Row>
      </Accordion.Header>
      <Accordion.Body className={styles.grid}>
        {relicsStore.sortedRelics.map((relic) => {
          if (playerStore.playerItems[id][relic.id] > 0) {
            const imageUrl = new URL(
              `../assets/${relic.id}.png`,
              import.meta.url
            ).href
            return (
              <div key={`${id}-${relic.id}`}>
                {playerStore.playerItems[id][relic.id]}
                {"x "}
                <img src={imageUrl} alt={relic.id} />{" "}
                {t(`relicNames:${relic.id}`)} - {relic.value}
              </div>
            )
          } else {
            return null
          }
        })}
      </Accordion.Body>
    </Accordion.Item>
  )
})
