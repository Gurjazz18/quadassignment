
import { ADD_TASK, DELETE_TASK, SET_TASK_PRIORITY,  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE, } from "./actionType"

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
  });
  
  export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: id,
  });
  
  export const setTaskPriority = (id, priority) => ({
    type: SET_TASK_PRIORITY,
    payload: { id, priority },
  });

  export const fetchWeatherRequest = () => ({
    type: FETCH_WEATHER_REQUEST,
  });
  
  export const fetchWeatherSuccess = (weather) => ({
    type: FETCH_WEATHER_SUCCESS,
    payload: weather,
  });
  
  export const fetchWeatherFailure = (error) => ({
    type: FETCH_WEATHER_FAILURE,
    payload: error,
  });
  
 
  
  export const fetchWeatherData = (location) => async (dispatch) => {
    dispatch(fetchWeatherRequest());
    try {
      const response = await fetchWeather(location);
      dispatch(fetchWeatherSuccess(response));
    } catch (error) {
      dispatch(fetchWeatherFailure(error.message));
    }
  };







  // src/features/tasks/tasksAPI.js
  const API_KEY="25fcd6ab27f2d490c0c9f4dcb60e102b";

export const fetchWeather = async (location) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  return response.json();
};
