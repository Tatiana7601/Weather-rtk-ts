import {useAppSelector} from "../app/hooks.ts";
import type {RootState} from "../app/store.ts";

const Weather = () => {
    const weather =useAppSelector((state:RootState) => state.weather);
    return (
        <div className={'infoWeath'}>
            <p>Location: {weather.city}</p>
            <p>Temp: {weather.temp}°C</p>
            <p>Pressure: {weather.pressure} hPa</p>
        </div>
    );
};


export default Weather;

