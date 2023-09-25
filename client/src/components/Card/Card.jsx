import styles from './Card.module.css';
import {useNavigate} from 'react-router-dom';
import imageHandlerError from '../../placeholders/imageError';

export default function Card (props) {
    const {name,image,id} = props;
    const navigate = useNavigate();
    const getDetail = () => {
        navigate(`/home/drivers/${id}`)
    }
    return (
        <div class = {styles.card}>
            <img onClick = {getDetail} src = {image} class = {styles.cardImage} alt = 'No image' onError = {imageHandlerError}/>
            {name}
        </div>
    )
}