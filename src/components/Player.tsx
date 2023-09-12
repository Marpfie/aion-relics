import { Button, Col, Form, Row } from "react-bootstrap"
import { observer } from "mobx-react"
import { playerStore } from "../stores/players"
import { distributionStore } from "../stores/distribution"

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
          disabled={distributionStore.distributionInProgress}
          type="number"
          value={playerStore.playerAP[id]}
          onChange={(ev) =>
            playerStore.setPlayerAP(id, Number(ev.target.value))
          }
        />
      </Col>
      <Col md="auto">
        <Button
          disabled={distributionStore.distributionInProgress}
          variant="danger"
          onClick={() => playerStore.removePlayer(id)}
        >
          Remove
        </Button>
      </Col>
    </Row>
  )
})
