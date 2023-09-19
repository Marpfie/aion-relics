import { observer } from "mobx-react"
import { Button, ButtonGroup } from "react-bootstrap"
import { useTranslation } from "react-i18next"

import styles from "./LanguageButtons.module.scss"

export const LanguageButtons: React.FC = observer(() => {
  const { i18n } = useTranslation("relicNames")

  return (
    <ButtonGroup className={styles.buttons}>
      <Button
        variant={i18n.resolvedLanguage === "de" ? "secondary" : "primary"}
        onClick={() => i18n.changeLanguage("de")}
      >
        DE
      </Button>
      <Button
        variant={i18n.language === "en" ? "secondary" : "primary"}
        onClick={() => i18n.changeLanguage("en")}
      >
        EN
      </Button>
    </ButtonGroup>
  )
})
