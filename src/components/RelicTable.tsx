import { Col, Container, Row } from "react-bootstrap"
import { relics } from "../utils/relics"
import { RelicCol } from "./RelicCol"
import { relicsStore } from "../stores/relics"
import { observer } from "mobx-react"
import styles from "./relicTable.module.scss"
import clsx from "clsx"
import AP from "../assets/ap.png"

export const RelicTable: React.FC = observer(() => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <RelicCol relic={relics.majorAncientCrown} />
        <RelicCol relic={relics.majorAncientSeal} />
      </Row>
      <Row className="justify-content-md-center">
        <RelicCol relic={relics.greaterAncientCrown} />
        <RelicCol relic={relics.greaterAncientSeal} />
      </Row>
      <Row className="justify-content-md-center">
        <RelicCol relic={relics.ancientCrown} />
        <RelicCol relic={relics.ancientSeal} />
      </Row>
      <Row className={clsx("justify-content-md-center", styles.fourthRow)}>
        <RelicCol relic={relics.lesserAncientCrown} />
        <RelicCol relic={relics.lesserAncientSeal} />
      </Row>
      <Row className="justify-content-md-center">
        <RelicCol relic={relics.majorAncientChalice} />
        <RelicCol relic={relics.majorAncientIcon} />
      </Row>
      <Row className="justify-content-md-center">
        <RelicCol relic={relics.greaterAncientChalice} />
        <RelicCol relic={relics.greaterAncientIcon} />
      </Row>
      <Row className="justify-content-md-center">
        <RelicCol relic={relics.ancientChalice} />
        <RelicCol relic={relics.ancientIcon} />
      </Row>
      <Row className="justify-content-md-center">
        <RelicCol relic={relics.lesserAncientChalice} />
        <RelicCol relic={relics.lesserAncientIcon} />
      </Row>
      <Row>
        <Col className={styles.totalAP}>
          <h4>Total AP: {relicsStore.totalRelicValue}</h4>
          <img src={AP} />
        </Col>
      </Row>
    </Container>
  )
})
