import {
  LIST_SPORTS_CLUBS_REQUEST,
  LIST_SPORTS_CLUBS_SUCCESS,
  LIST_SPORTS_CLUBS_FAILED,
  LIST_SPORTS_COUNCIL_FAILED,
  LIST_SPORTS_COUNCIL_SUCCESS,
  LIST_SPORTS_COUNCIL_REQUEST,
  ADD_SPORTS_CLUBS_FAILED,
  ADD_SPORTS_CLUBS_REQUEST,
  ADD_SPORTS_CLUBS_SUCCESS,
  ADD_SPORTS_COUNCIL_FAILED,
  ADD_SPORTS_COUNCIL_REQUEST,
  ADD_SPORTS_COUNCIL_SUCCESS,
} from "../../type";

export const clubReducer = (state = { clubs: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_SPORTS_CLUBS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_SPORTS_CLUBS_SUCCESS:
      return {
        ...state,
        loading: false,
        clubs: payload,
      };
    case LIST_SPORTS_CLUBS_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const councilReducer = (state = { councils: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_SPORTS_COUNCIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_SPORTS_COUNCIL_SUCCESS:
      return {
        ...state,
        loading: false,
        councils: payload,
      };
    case LIST_SPORTS_COUNCIL_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const addClubReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_SPORTS_CLUBS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_SPORTS_CLUBS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        success: true,
      };
    case ADD_SPORTS_CLUBS_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const addCouncilReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_SPORTS_COUNCIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_SPORTS_COUNCIL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        success: true,
      };
    case ADD_SPORTS_COUNCIL_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
