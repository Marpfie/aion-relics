import { observer } from "mobx-react"
import { Accordion, Button, Container, Row } from "react-bootstrap"
import { useTranslation } from "react-i18next"

import { distributionStore } from "../stores/distribution"
import { playerStore } from "../stores/players"
import { relicsStore } from "../stores/relics"

import { Distribution } from "./Distribution"
import { Import } from "./Import"
import { Player } from "./Player"
import styles from "./playerList.module.scss"

export const PlayerList: React.FC = observer(() => {
  const { t } = useTranslation(["players", "distribution"])

  const players = Object.keys(playerStore.players)

  return (
    <Container className={styles.playerList}>
      <Row className="justify-content-md-center">
        <Button
          variant="success"
          onClick={() => playerStore.addPlayer()}
          disabled={distributionStore.distributionInProgress}
        >
          {t("add")}
        </Button>
      </Row>
      <Import />
      <Row className="justify-content-md-center">
        <Button
          variant="warning"
          disabled={
            distributionStore.distributionInProgress ||
            relicsStore.totalRelicCount <= 0 ||
            players.length <= 0
          }
          onClick={() => distributionStore.initializeDistribution()}
        >
          {t("distribution:distribute")}
        </Button>
      </Row>
      <Distribution />
      <Accordion flush>
        {players.map((key) => (
          <Player key={key} id={Number(key)} />
        ))}
      </Accordion>
    </Container>
  )
})
