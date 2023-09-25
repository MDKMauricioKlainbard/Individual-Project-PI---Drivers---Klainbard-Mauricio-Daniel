import axios from "axios";
import { getDrivers, getTeams } from "../../redux/driversSlice";
import { URL_DRIVERS,URL_TEAMS } from "../../dataURL";

export default function getGlobalDataAndDispatch (dispatch) {
    axios.get(URL_DRIVERS)
    .then((data)=>{
      dispatch(getDrivers(data.data))
    })
    axios.get(URL_TEAMS)
    .then((data)=>{
      dispatch(getTeams(data.data))
    })
}