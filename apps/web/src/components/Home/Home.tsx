import styles from './Home.module.css'
import { Navbar } from '../Navbar/Navbar'
import { Sidebar } from '../Sidebar/Sidebar'
import { InputBox } from '../InputBOX/InputBox'

export function Home () {
    return (
        <div className={styles.background}>
          <div>
            <Navbar/>
          </div>
          <div>
             <Sidebar/>
             <main>
                <h1>Welcome to Scoutedge</h1>
                <InputBox/>
             </main>
             <footer>
                <p>Dawn can help you with thinhs like...</p>
             </footer>
          </div>
        </div>
    )
}