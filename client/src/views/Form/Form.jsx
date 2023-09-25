import { useState, useEffect } from "react";
import axios from 'axios';
import { useSelector } from "react-redux";
import CardPreview from "../../components/CardPreview/CardPreview";
import validate from "../../helpersFunctions/Form/validate";

export default function Form() {
    const teams = useSelector(state=>state.drivers.teams)
    const [driverInfo, setInfo] = useState({
        name: '',
        surname: '',
        nationality: '',
        description: '',
        datebirth: '',
        image: '',
        Teams: '',
    })
    const [errors, setErrors] = useState({
        name: '',
        surname: '',
        nationality: '',
        description: '',
        datebirth: '',
        image: '',
        Teams: '',
    });
    const [Teams, setTeams] = useState([])
    const [status, setStatus] = useState({
        message: '',
    })
    const handleChange = (event) => {
        const {name} = event.target;
        if (name === 'Teams') {
            let selectedOptions = [...event.target.selectedOptions];
            selectedOptions = selectedOptions.map(option=>option.value)
            setTeams(selectedOptions)
        }
        else {
            const {value} = event.target;
            setInfo({
                ...driverInfo,
                [name]: value,
            })
            setErrors(validate(errors, {...driverInfo,[name]:value}));
        }
    }
    useEffect(()=>{
        let TeamsString = Teams.join(', ');
        setInfo({
            ...driverInfo,
            Teams: TeamsString,
        })
    },[Teams])
    const buttonSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/drivers',{...driverInfo, Teams: Teams})
        .then(data=>setStatus({message: 'El corredor ha sido creado con éxito.'}))
        .catch(error=>setStatus({message: 'Algo ha salido mal.'}))
    }

    return (
        <div>
        <h1>Form</h1>
        <form onSubmit = {buttonSubmit}>
            <div>
                <label>Name:</label>
                <input value = {driverInfo.name} onChange = {handleChange} name = 'name'></input>
                {errors.name && <label>{errors.name}</label>}
            </div>

            <div>
                <label>Surname:</label>
                <input value = {driverInfo.surname} onChange = {handleChange} name = 'surname'></input>
                {errors.surname && <label>{errors.surname}</label>}
            </div>

            <div>
                <label>Nationality:</label>
                <input value = {driverInfo.nationality} onChange = {handleChange} name = 'nationality'></input>
                {errors.nationality && <label>{errors.nationality}</label>}
            </div>

            <div>
                <label>Description:</label>
                <textarea value = {driverInfo.description} onChange = {handleChange} name = 'description'/>
                {errors.description && <label>{errors.description}</label>}
            </div>

            <div>
                <label>Date of Birth:</label>
                <input value = {driverInfo.datebirth} type="date" onChange = {handleChange} name = 'datebirth'></input>
                {errors.datebirth && <label>{errors.datebirth}</label>}
            </div>

            <div>
                <label>Image:</label>
                <input value = {driverInfo.image} onChange = {handleChange} name = 'image'></input>
                {errors.image && <label>{errors.image}</label>}
            </div>

            <div>
                <label>Teams:</label>
                <select multiple name = 'Teams' onChange = {handleChange}>
                    {teams.map(team=>{
                        return(
                            <option >{team.name}</option>
                        )
                    })}
                </select>
                {errors.Teams && <label>{errors.Teams}</label>}
            </div>
            <button type = 'submit'>Create driver</button>
      </form>
      <div>
        {status.message && <p>{status.message}</p>}
      </div>
      <CardPreview props = {driverInfo}/>
    </div>
  );
}
