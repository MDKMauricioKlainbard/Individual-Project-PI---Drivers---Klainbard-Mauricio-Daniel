import { useState, useEffect } from "react";
import imageHandlerError from "../../placeholders/imageError";

export default function CardPreview ({props}) {
    const [preview, setPreview] = useState({
        name: '',
        surname: '',
        description: '',
        datebirth: '',
        image: '',
        Teams: '',
    })
    useEffect(()=>{
        let {name, surname, nationality, description, datebirth, image, Teams} = props;
        setPreview(props)
    },[props])
    
    return (
        <div>
            <img src = {preview.image} alt = 'No image' onError = {imageHandlerError}></img>
            <p>{preview.name}</p>
            <p>{preview.surname}</p>
            <p>{preview.nationality}</p>
            <p>{preview.description}</p>
            <p>{preview.datebirth}</p>
            <p>{preview.Teams}</p>
        </div>
    )
}