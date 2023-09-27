import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'
import styles from './CardDetail.module.css'
import imageHandlerError from "../../placeholders/imageError"
import Title from "../Title/Title"

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
        <div className = {styles.container}>
            <div className = {styles.containerDetail}>
            <img className = {styles.image} src = {detail.image} alt = 'No image' onError = {imageHandlerError}></img>
            <div className = {styles.detailData}>
                <Title title = {`${detail.name} ${detail.surname}`}/>
                <p>Nationality: {detail.nationality}</p>
                <p>Description: {detail.description}</p>
                <p>Datebirth: {detail.datebirth}</p>
                <p>Teams: {detail.Teams}</p>
            </div> 
        </div>
        </div>
        
    )
}