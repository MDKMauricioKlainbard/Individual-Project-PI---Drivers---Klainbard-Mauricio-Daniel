import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'
import styles from './CardDetail.module.css'
import imageHandlerError from "../../placeholders/imageError"

export default function CardDetail() {
    const {id} = useParams();
    const [detail, changeDetail] = useState({
        name: '',
        surname: '',
        description: '',
        nationality: '',
        datebirth: '',
        image: '',
        Teams: '',
    });
    useEffect(()=>{
        axios(`http://localhost:3001/drivers/${id}`)
        .then(data=>{
            data = data.data
            let Teams = data.Teams.map(Team=>Team.name)
            Teams = Teams.join(', ')
            data.Teams = Teams
            changeDetail(data)
        })
    },[])
    return (
        <div class = {styles.container}>
            <div>
                <img class = {styles.imgDriver} src = {detail.image} alt = 'No image' onError = {imageHandlerError}/>
            </div>
            <div class = {styles.info}>
                <h1>{detail.name} {detail.surname}</h1>
                <p>{detail.description}</p>
                <p>{detail.nationality}</p>
                <p>{detail.datebirth}</p>
                <p>{detail.Teams}</p>
            </div>
        </div>
    )
}