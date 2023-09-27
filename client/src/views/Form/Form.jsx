import { useState, useEffect } from "react";
import axios from 'axios';
import { useSelector } from "react-redux";
import CardPreview from "../../components/CardPreview/CardPreview";
import validate from "../../helpersFunctions/Form/validate";
import styles from './Form.module.css'
import Title from "../../components/Title/Title";

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
        .then(data=>setStatus({message: 'The racer has been created successfully.'}))
        .catch(error=>setStatus({message: 'Something has gone wrong.'}))
    }

    return (
        <div className = {styles.container}>
            <div className = {styles.containerHS}>
            <header className = {styles.header}>
                <Title title = {'Form'}/>
                <form className = {styles.form} onSubmit = {buttonSubmit}>
                    <div className = {styles.item}>
                        <label className = {styles.label}>Name:</label>
                        <input className = {styles.input} value = {driverInfo.name} onChange = {handleChange} name = 'name'></input>
                        <p>{errors.name}</p>
                    </div>

                    <div className = {styles.item}>
                        <label className = {styles.label}>Surname:</label>
                        <input className = {styles.input} value = {driverInfo.surname} onChange = {handleChange} name = 'surname'></input>
                        <p>{errors.surname}</p>
                    </div>

                    <div className = {styles.item}>
                        <label className = {styles.label}>Nationality:</label>
                        <input className = {styles.input} value = {driverInfo.nationality} onChange = {handleChange} name = 'nationality'></input>
                        <p>{errors.nationality}</p>
                    </div>

                    <div className = {styles.item}>
                        <label className = {styles.label}>Description:</label>
                        <textarea className = {styles.input} value = {driverInfo.description} onChange = {handleChange} name = 'description'/>
                        <p>{errors.description}</p>
                    </div>

                    <div className = {styles.item}>
                        <label className = {styles.label}>Date of Birth:</label>
                        <input className = {styles.input} value = {driverInfo.datebirth} type="date" onChange = {handleChange} name = 'datebirth'></input>
                        <p>{errors.datebirth}</p>
                    </div>

                    <div className = {styles.item}>
                        <label className = {styles.label}>Image:</label>
                        <input className = {styles.input} value = {driverInfo.image} onChange = {handleChange} name = 'image'></input>
                        <p>{errors.image}</p>
                    </div>

                    <div className = {styles.item}>
                        <label className = {styles.label}>Teams:</label>
                        <select className = {styles.input} multiple = {true} name = 'Teams' onChange = {handleChange}>
                        {teams.map(team=>{
                            return(
                                <option className = {styles.options}>{team.name}</option>
                            )
                        })}
                        </select>
                        <p>{errors.Teams}</p>
                    </div>
                    <button className = {styles.button} type = 'submit'>Create driver</button>
                    <div className = {status.message === 'Something has gone wrong.' ? styles.statusError : styles.statusSuccesful}>
                    {status.message && <p>{status.message}</p>}
                    </div>
                </form>
                
            </header>
            <section className = {styles.section}>
                <CardPreview props = {driverInfo}/>
            </section>
        </div>
    </div>
  );
}
