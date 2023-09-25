import { useNavigate } from "react-router-dom"
import closureGoForm from "../../helpersFunctions/Form/goForm"
import styles from './FormButton.module.css'

export default function FormButton () {
    const navigate = useNavigate();
    const goForm = closureGoForm(navigate)
    return (
        <div className = {styles.container}>
            <button className = {styles.button} onClick = {goForm}>Form</button>
        </div>
    )
}