import {
  GET_PROPERTY,
  DELETE_PROPERTY,
  ADD_PROPERTY
} from "../actions/types.js";

const initialState = {
  property: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROPERTY:
      return {
        ...state,
        property: action.payload
      };
    case DELETE_PROPERTY:
      return {
        ...state,
        property: state.property.filter(
          property => property.id !== action.payload
        )
      };
    case ADD_PROPERTY:
      return {
        ...state,
        property: [...state.property, action.payload]
      };

    default:
      return state;
  }
}
