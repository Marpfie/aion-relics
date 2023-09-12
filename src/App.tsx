import { PlayerList } from "./components/PlayerList"
import { RelicTable } from "./components/RelicTable"
import styles from "./app.module.scss"

function App() {
  return (
    <div className={styles.app}>
      <RelicTable />
      <PlayerList />
    </div>
  )
}

export default App
