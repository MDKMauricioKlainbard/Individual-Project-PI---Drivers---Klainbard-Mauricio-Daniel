import styles from './Landing.module.css'
import { useNavigate } from 'react-router-dom';
import closureStartApp from '../../helpersFunctions/Landing/startApp';


export function Landing() {
    const navigate = useNavigate();
    const startApp = closureStartApp(navigate)
    return (
        <div className = {styles.container}>
            <div className = {styles.buttonContainer}>
                <button onClick = {startApp} className = {styles.button}>Step on the gas and start the race!</button>
            </div>
        </div>
    )
}

