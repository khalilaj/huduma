import {
  GET_UNIT,
  DELETE_UNIT,
  ADD_UNIT,
  UNIT_LOADING
} from "../actions/types.js";

const initialState = {
  unit: [],
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UNIT_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case GET_UNIT:
      return {
        ...state,
        unit: action.payload,
        isLoading: false
      };
    case DELETE_UNIT:
      return {
        ...state,
        unit: state.unit.filter(unit => unit.id !== action.payload),
        isLoading: false
      };
    case ADD_UNIT:
      return {
        ...state,
        unit: [...state.unit, action.payload],
        isLoading: false
      };

    default:
      return state;
  }
}
