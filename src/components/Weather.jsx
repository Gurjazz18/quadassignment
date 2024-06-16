// src/components/Weather.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from '../redux/taskreducer/action';

const Weather = ({ location }) => {
    console.log(location,"loca,wea")
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.TaskReducer?.weather);
  const weatherStatus = useSelector((state) => state.TaskReducer?.status);
  console.log(weather,"weather")

  useEffect(() => {
    dispatch(fetchWeatherData(location));
  }, [dispatch, location]);

  if (weatherStatus === 'loading') {
    return <div>Loading weather data...</div>;
  } else if (weatherStatus === 'failed') {
    return <div>Error loading weather data.</div>;
  }

  return (
    <div>
      {weather && (
        <>
          <h3>Weather in {weather.name}</h3>
          <p>Temperature: {weather?.main?.temp}°C</p>
          <p>Condition: {weather?.weather[0]?.description}</p>
        </>
      )}
    </div>
  );
};

export default Weather;
