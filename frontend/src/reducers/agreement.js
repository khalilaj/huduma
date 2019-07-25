import {
  GET_AGREEMENT,
  DELETE_AGREEMENT,
  ADD_AGREEMENT
} from "../actions/types.js";

const initialState = {
  agreement: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_AGREEMENT:
      return {
        ...state,
        agreement: action.payload
      };
    case DELETE_AGREEMENT:
      return {
        ...state,
        agreement: state.agreement.filter(
          agreement => agreement.id !== action.payload
        )
      };
    case ADD_AGREEMENT:
      return {
        ...state,
        agreement: [...state.agreement, action.payload]
      };

    default:
      return state;
  }
}
