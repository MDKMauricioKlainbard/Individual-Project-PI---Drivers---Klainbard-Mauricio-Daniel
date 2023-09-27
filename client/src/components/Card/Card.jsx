import styles from './Card.module.css';
import {useNavigate} from 'react-router-dom';
import imageHandlerError from '../../placeholders/imageError';
import { useState } from 'react';

export default function Card (props) {
    const {name,image,id} = props;
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const getDetail = () => {
        navigate(`/home/drivers/${id}`)
    }
    const handleMouseEnter = () => {
        setIsHovered(true)
    }
    const handleMouseLeave = () => {
        setIsHovered(false)
    }
    return (
        <div onMouseLeave = {handleMouseLeave}  onMouseEnter = {handleMouseEnter} className={styles.card}>
            <img onClick = {getDetail} src = {image} class = {styles.cardImage} alt = 'No image' onError = {imageHandlerError}/>
            {isHovered && <div onClick = {getDetail} className={styles.overlay}>{name}</div>}
        </div>
    )
}