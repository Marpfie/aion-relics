import { observer } from "mobx-react"
import { Button, Container, Row } from "react-bootstrap"
import { playerStore } from "../stores/players"
import { Player } from "./Player"
import styles from "./playerList.module.scss"

export const PlayerList: React.FC = observer(() => {
  const players = Object.keys(playerStore.players)

  return (
    <Container className={styles.playerList}>
      <Row className="justify-content-md-center">
        <Button variant="success" onClick={() => playerStore.addPlayer()}>
          Add Player
        </Button>
      </Row>
      <Row className="justify-content-md-center">
        <Button>TBA: Import Players and current AP from DPS Meter</Button>
      </Row>
      <Row className="justify-content-md-center">
        <Button variant="warning">Distribute AP</Button>
      </Row>
      {players.map((key) => (
        <Player key={key} id={Number(key)} />
      ))}
    </Container>
  )
})
