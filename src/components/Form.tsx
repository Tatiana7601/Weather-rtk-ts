import {type ChangeEvent, type FormEvent, useState} from "react";
import {useAppDispatch} from "../app/hooks.ts";
import {fetchWeather} from "../features/api/fetchWeather.ts";

const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useAppDispatch();

    const getCity = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(fetchWeather(city));
        setCity("");
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    }

    return (
        <form onSubmit={getCity}>
            <input type={'text'} placeholder='City' value={city} onChange={handleChange}/>
            <button type='submit'>Get weather</button>
        </form>
    );
};


export default Form;
