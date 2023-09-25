import './App.css'
import {Route, Routes} from 'react-router-dom'
import {Landing} from './views/Landing/Landing'
import CardDetail from './components/CardDetail/CardDetail'
import Home from './views/Home/Home'
import Form from './views/Form/Form'
import SearchedDrivers from './views/SearchedDrivers/SearchedDrivers'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import getGlobalDataAndDispatch from './helpersFunctions/App/getGlobalDataAndDispatch'

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    getGlobalDataAndDispatch(dispatch)
  },[])
  return (
    <Routes>
      <Route path = '/' element = {<Landing/>}/>
      <Route path = '/home' element = {<Home/>}/>
      <Route path = '/home/drivers/:id' element = {<CardDetail/>}/>
      <Route path = '/home/driversName' element = {<SearchedDrivers/>}/>
      <Route path = 'home/form' element = {<Form/>}/>
    </Routes>
  )
}

export default App
