import { GET_TENANT, DELETE_TENANT, ADD_TENANT } from "../actions/types.js";

const initialState = {
  tenant: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TENANT:
      return {
        ...state,
        tenant: action.payload
      };
    case DELETE_TENANT:
      return {
        ...state,
        tenant: state.tenant.filter(tenant => tenant.id !== action.payload)
      };
    case ADD_TENANT:
      return {
        ...state,
        tenant: [...state.tenant, action.payload]
      };

    default:
      return state;
  }
}
