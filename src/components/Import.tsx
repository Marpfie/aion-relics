import { observer } from "mobx-react"
import { Button, Form, Row } from "react-bootstrap"
import { distributionStore } from "../stores/distribution"
import { useState } from "react"
import styles from "./import.module.scss"
import clsx from "clsx"
import { playerStore } from "../stores/players"
import { useTranslation } from "react-i18next"

export const Import: React.FC = observer(() => {
  const [importString, setImportString] = useState("")
  const { t } = useTranslation("import")

  return (
    <Row className={clsx("justify-content-md-center", styles.import)}>
      <Form.Control
        type="string"
        value={importString}
        onChange={(ev) => setImportString(ev.target.value)}
        placeholder={t("placeholder")}
      />
      <Button
        disabled={distributionStore.distributionInProgress}
        onClick={() => playerStore.importDpsMeterString(importString)}
      >
        {t("button")}
      </Button>
    </Row>
  )
})
