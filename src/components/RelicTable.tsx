import clsx from "clsx"
import { observer } from "mobx-react"
import { ButtonGroup, Col, Container, Row, ToggleButton } from "react-bootstrap"
import { useTranslation } from "react-i18next"

import AP from "../assets/ap.png"
import { relicsStore } from "../stores/relics"

import { RelicCol } from "./RelicCol"
import styles from "./relicTable.module.scss"

export const RelicTable: React.FC = observer(() => {
  const { t } = useTranslation("distribution")

  return (
    <Container>
      <Row>
        <Col className={styles.totalAP}>
          <ButtonGroup>
            <ToggleButton
              key="old"
              type="radio"
              // variant={idx % 2 ? 'outline-success' : 'outline-danger'}
              name="radio"
              value="old"
              checked={!relicsStore.newRelicValues}
              onClick={() => relicsStore.setRelicValue(false)}
            >
              {t("relicValues.old")}
            </ToggleButton>
            <ToggleButton
              key="new"
              type="radio"
              // variant={idx % 2 ? 'outline-success' : 'outline-danger'}
              name="radio"
              value="new"
              checked={relicsStore.newRelicValues}
              onClick={() => relicsStore.setRelicValue(true)}
            >
              {t("relicValues.new")}
            </ToggleButton>
          </ButtonGroup>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <RelicCol relic={relicsStore.relics.majorAncientCrown} />
        <RelicCol relic={relicsStore.relics.majorAncientSeal} />
      </Row>
      <Row className="justify-content-md-center">
        <RelicCol relic={relicsStore.relics.greaterAncientCrown} />
        <RelicCol relic={relicsStore.relics.greaterAncientSeal} />
      </Row>
      <Row className="justify-content-md-center">
        <RelicCol relic={relicsStore.relics.ancientCrown} />
        <RelicCol relic={relicsStore.relics.ancientSeal} />
      </Row>
      <Row className={clsx("justify-content-md-center", styles.fourthRow)}>
        <RelicCol relic={relicsStore.relics.lesserAncientCrown} />
        <RelicCol relic={relicsStore.relics.lesserAncientSeal} />
      </Row>
      <Row className="justify-content-md-center">
        <RelicCol relic={relicsStore.relics.majorAncientChalice} />
        <RelicCol relic={relicsStore.relics.majorAncientIcon} />
      </Row>
      <Row className="justify-content-md-center">
        <RelicCol relic={relicsStore.relics.greaterAncientChalice} />
        <RelicCol relic={relicsStore.relics.greaterAncientIcon} />
      </Row>
      <Row className="justify-content-md-center">
        <RelicCol relic={relicsStore.relics.ancientChalice} />
        <RelicCol relic={relicsStore.relics.ancientIcon} />
      </Row>
      <Row className="justify-content-md-center">
        <RelicCol relic={relicsStore.relics.lesserAncientChalice} />
        <RelicCol relic={relicsStore.relics.lesserAncientIcon} />
      </Row>
      <Row>
        <Col className={styles.totalAP}>
          <h4>{t("totalAP", { value: relicsStore.totalRelicValue })}</h4>
          <img src={AP} />
        </Col>
      </Row>
    </Container>
  )
})
