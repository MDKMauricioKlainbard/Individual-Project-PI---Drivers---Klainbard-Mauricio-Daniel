import styles from './HeaderHome.module.css';
import SearchBar from '../SearchBar/SearchBar';
import Filters from '../Filters/Filters';
import FormButton from '../FormButton/FormButton';

export default function HeaderHome () {
    return (
        <header className = {styles.header}>
            <div className= {styles.titleContainer}>
                <h1 className = {styles.title}>
                The Pits
                </h1>
            </div>
            <SearchBar/>
            <Filters/>
            <FormButton/>
        </header>
    )
}