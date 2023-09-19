import { PlayerList } from "./components/PlayerList"
import { RelicTable } from "./components/RelicTable"
import styles from "./app.module.scss"
import { LanguageButtons } from "./components/LanguageButtons"

function App() {
  return (
    <div className={styles.app}>
      <RelicTable />
      <PlayerList />
      <LanguageButtons />
    </div>
  )
}

export default App
