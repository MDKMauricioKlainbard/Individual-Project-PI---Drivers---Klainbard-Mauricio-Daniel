import CardList from '../../components/CardList/CardList'
import SearchBar from '../../components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filters from '../../components/Filters/Filters';
import Pager from '../../components/Pager/Pager';
import { getFilterDrivers } from '../../redux/driversSlice';
import filtersFrom from '../../helpersFunctions/Filters/filtersFrom';
import filtersTeam from '../../helpersFunctions/Filters/filtersTeam';
import filtersOrder from '../../helpersFunctions/Filters/filtersOrder';
import FormButton from '../../components/FormButton/FormButton';
import styles from './Home.module.css'
import FooterHome from '../../components/FooterHome/FooterHome';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import SectionHome from '../../components/SectionHome/SectionHome';
import driversSlice from '../../helpersFunctions/Home/driversSlice';
import { current } from '@reduxjs/toolkit';

export default function Home() {
    const dispatch = useDispatch();
    const drivers = useSelector(state=>state.drivers.drivers)
    const filterDrivers = useSelector(state=>state.drivers.filterDrivers);
    const searchedDrivers = useSelector(state=>state.drivers.searchedDrivers)
    const searched = useSelector(state=>state.drivers.searched)
    
    const filters = useSelector(state=>state.drivers.filters);
    const [currentPage, setCurrentPage] = useState(1)
    const cardsPerPage = 8;
    const totalPages = Math.ceil(filterDrivers.length/cardsPerPage);
    const filterDriversSlice = driversSlice(filterDrivers,currentPage, cardsPerPage)
    const pageHandler = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    useEffect(()=>{
        let driversFilterFrom;
        console.log(searched)
        if(searched) {
            driversFilterFrom = filtersFrom(filters.from, [...searchedDrivers])
        }
        else {
            driversFilterFrom = filtersFrom(filters.from, [...drivers]);
        }
        let driversFilterTeam = filtersTeam(filters.team, driversFilterFrom);
        let driversFilterOrder = filtersOrder(filters.order, driversFilterTeam);
        dispatch(getFilterDrivers(driversFilterOrder))
    },[filters, drivers, searched, searchedDrivers])
    return(
        <div className = {styles.container}>
            <div className = {styles.containerHS}>
                <HeaderHome/>
                <SectionHome filterDriversSlice = {filterDriversSlice} totalPages = {totalPages} pageHandler = {pageHandler} currentPage = {currentPage}/>
            </div>
            <FooterHome/>
        </div>
    )
}