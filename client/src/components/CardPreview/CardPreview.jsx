import { useState, useEffect } from "react";
import imageHandlerError from "../../placeholders/imageError";
import styles from './CardPreview.module.css'
import Title from "../Title/Title";

export default function CardPreview ({props}) {
    const [preview, setPreview] = useState({
        image: '',
        name: '',
        surname: '',
        nationality: '',
        description: '',
        datebirth: '',
        Teams: '',
    })
    useEffect(()=>{
        let {image, name, surname, nationality, description, datebirth, Teams} = props;
        setPreview(props)
    },[props])
    
    return (
        <div className = {styles.container}>
            <img className = {styles.image} src = {preview.image} alt = 'No image' onError = {imageHandlerError}></img>
            <div className = {styles.previewData}>
                <Title title = {`${preview.name} ${preview.surname}`}/>
                <p>Nationality: {preview.nationality}</p>
                <p>Description: {preview.description}</p>
                <p>Datebirth: {preview.datebirth}</p>
                <p>Teams: {preview.Teams}</p>
            </div> 
        </div>
    )
}