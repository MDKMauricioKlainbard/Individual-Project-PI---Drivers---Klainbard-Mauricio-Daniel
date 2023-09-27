import styles from './FooterHome.module.css'
import Title from '../Title/Title'

export default function FooterHome() {
    return (
            <footer className = {styles.footer}>
                <Title title = {'Klainbard, Mauricio Daniel - September 2023'}/>
            </footer>
    )
}