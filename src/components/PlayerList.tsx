import { observer } from "mobx-react"
import { Accordion, Button, Container, Row } from "react-bootstrap"
import { playerStore } from "../stores/players"
import { Player } from "./Player"
import styles from "./playerList.module.scss"
import { distributionStore } from "../stores/distribution"
import { Distribution } from "./Distribution"
import { relicsStore } from "../stores/relics"

export const PlayerList: React.FC = observer(() => {
  const players = Object.keys(playerStore.players)

  return (
    <Container className={styles.playerList}>
      <Row className="justify-content-md-center">
        <Button
          variant="success"
          onClick={() => playerStore.addPlayer()}
          disabled={distributionStore.distributionInProgress}
        >
          Add Player
        </Button>
      </Row>
      <Row className="justify-content-md-center">
        <Button disabled={distributionStore.distributionInProgress}>
          TBA: Import Players and current AP from DPS Meter
        </Button>
      </Row>
      <Row className="justify-content-md-center">
        <Button
          variant="warning"
          disabled={
            distributionStore.distributionInProgress ||
            relicsStore.totalRelicCount <= 0
          }
          onClick={() => distributionStore.initializeDistribution()}
        >
          Distribute AP
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
