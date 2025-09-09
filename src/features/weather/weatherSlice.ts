import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "../api/fetchWeather.ts";



const weatherSlice = createSlice({
    name:'weather',
    initialState:{
        city:'',
        temp:0,
        pressure:0,
        error: undefined as string | undefined,
        loading: false
    },
    reducers:{},
    extraReducers: builder => {
        builder
            .addCase(fetchWeather.pending, (state)=> {
                    state.loading = true;
                    state.error= undefined;
            })
            .addCase(fetchWeather.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchWeather.fulfilled,(state, action) =>{
                state.loading = false;
                state.city = action.payload.city;
                state.temp = action.payload.temp;
                state.pressure = action.payload.pressure;
                state.error = undefined;
            });

    }
})


export default weatherSlice.reducer;