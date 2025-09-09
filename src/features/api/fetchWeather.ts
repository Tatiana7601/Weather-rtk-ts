import {api_key, base_url} from "../../utils/constants.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
     'weather/fetch',
    async(city:string) =>{
        const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
        const data = await response.json();
        return data;
    }


)