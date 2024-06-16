import {
  ADD_TASK,
  DELETE_TASK,
  SET_TASK_PRIORITY,
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
} from './actionType';

const initialState = {
  tasks: [],
  status: "false",
  error: null,
  weather: null,

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case SET_TASK_PRIORITY:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, priority: action.payload.priority }
            : task
        ),
      };

    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        status: 'loading',
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        status: 'succeeded',
        weather: action.payload,
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        status: 'failed',
        error: action.payload,
      };
    default:
      return state;
  }
};

export { reducer };
