import styles from './Title.module.css'
import { useDispatch } from 'react-redux'
import { searchStatus } from '../../redux/driversSlice';
import closureGoHome from '../../helpersFunctions/TitleHeader/goHome';

export default function Title ({title, goTo}) {
    const dispatch = useDispatch();
    const goHome = closureGoHome(dispatch, searchStatus)
    return (
        <div className = {styles.container}>
            <h1 onClick = {goTo ? goHome : ()=>{console.log("Don't touch me.")}} className = {styles.title}>
                {title}
            </h1>
        </div>
    )
}