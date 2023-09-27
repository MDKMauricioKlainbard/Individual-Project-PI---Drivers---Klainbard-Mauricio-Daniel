import styles from './HeaderHome.module.css';
import SearchBar from '../SearchBar/SearchBar';
import Filters from '../Filters/Filters';
import FormButton from '../FormButton/FormButton';
import TitleHeader from '../Title/Title';

export default function HeaderHome () {
    return (
        <header className = {styles.header}>
            <TitleHeader title = {'Formula 1'} goTo = {'Home'}/>
            <SearchBar/>
            <Filters/>
            <FormButton/>
        </header>
    )
}