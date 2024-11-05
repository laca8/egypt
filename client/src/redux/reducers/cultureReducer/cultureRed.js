import {
  LIST_CINEMA_REQUEST,
  LIST_CINEMA_SUCCESS,
  LIST_CINEMA_FAILED,
  LIST_THEATER_FAILED,
  LIST_THEATER_REQUEST,
  LIST_THEATER_SUCCESS,
  ADD_CINEMA_FAILED,
  ADD_CINEMA_REQUEST,
  ADD_CINEMA_SUCCESS,
  ADD_THEATER_REQUEST,
  ADD_THEATER_SUCCESS,
  ADD_THEATER_FAILED,
} from "../../type";

export const cinemaReducer = (state = { cinema: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_CINEMA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_CINEMA_SUCCESS:
      return {
        ...state,
        loading: false,
        cinema: payload,
      };
    case LIST_CINEMA_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const theaterReducer = (state = { theaters: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_THEATER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_THEATER_SUCCESS:
      return {
        ...state,
        loading: false,
        theaters: payload,
      };
    case LIST_THEATER_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const addCinemaReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CINEMA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_CINEMA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        success: true,
      };
    case ADD_CINEMA_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const addTheaterReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_THEATER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_THEATER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        success: true,
      };
    case ADD_THEATER_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
