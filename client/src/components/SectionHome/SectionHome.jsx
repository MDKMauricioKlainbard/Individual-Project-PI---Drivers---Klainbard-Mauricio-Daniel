import CardList from "../CardList/CardList"
import Pager from "../Pager/Pager"
import styles from './SectionHome.module.css'

export default function SectionHome ({filterDriversSlice, totalPages, pageHandler, currentPage}) {
    return(
        <section className = {styles.section}>
            <CardList drivers = {filterDriversSlice}/>
            <Pager totalPages = {totalPages} pageHandler = {pageHandler} currentPage = {currentPage}/>
        </section>
    )
}