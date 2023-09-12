import { Button, Col, Form, Row } from "react-bootstrap"
import { observer } from "mobx-react"
import { playerStore } from "../stores/players"

export const Player: React.FC<{ id: number }> = observer(({ id }) => {
  return (
    <Row className="justify-content-md-center">
      <Col md="auto">
        <Form.Control
          type="string"
          value={playerStore.players[id]}
          onChange={(ev) => playerStore.renamePlayer(id, ev.target.value)}
        />
      </Col>
      <Col md="auto">
        <Form.Control
          type="number"
          value={playerStore.playerAP[id]}
          onChange={(ev) =>
            playerStore.setPlayerAP(id, Number(ev.target.value))
          }
        />
      </Col>
      <Col md="auto">
        <Button variant="danger" onClick={() => playerStore.removePlayer(id)}>
          Remove
        </Button>
      </Col>
    </Row>
  )
})
