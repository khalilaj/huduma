import { GET_UNIT, DELETE_UNIT, ADD_UNIT } from "../actions/types.js";

const initialState = {
  unit: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_UNIT:
      return {
        ...state,
        unit: action.payload
      };
    case DELETE_UNIT:
      return {
        ...state,
        unit: state.unit.filter(unit => unit.id !== action.payload)
      };
    case ADD_UNIT:
      return {
        ...state,
        unit: [...state.unit, action.payload]
      };

    default:
      return state;
  }
}
