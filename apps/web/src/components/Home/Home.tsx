import styles from './Home.module.css'
import { Navbar } from '../Navbar/Navbar'
import { Sidebar } from '../Sidebar/Sidebar'
import { InputBox } from '../InputBox/InputBox'

export function Home () {
    return (
        <div className={styles.background}>
          <div>
            <Navbar/>
          </div>
          <div>
             <Sidebar/>
             <main className={styles.main}>
                <h1>Welcome to Scoutedge</h1>
                <InputBox/>
             <footer>
                <p>Dawn can help you with things like...</p>
             </footer>
             </main>
          </div>
        </div>
    )
}