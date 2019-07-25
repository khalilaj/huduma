import {
  GET_TRANSACTION,
  DELETE_TRANSACTION,
  ADD_TRANSACTION
} from "../actions/types.js";

const initialState = {
  transaction: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TRANSACTION:
      return {
        ...state,
        transaction: action.payload
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transaction: state.transaction.filter(
          transaction => transaction.id !== action.payload
        )
      };
    case ADD_TRANSACTION:
      return {
        ...state,
        transaction: [...state.transaction, action.payload]
      };

    default:
      return state;
  }
}
