import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_TENANT, DELETE_TENANT, ADD_TENANT } from "./types";
import { tokenConfig } from "./auth";

// GET TENANT
export const getTenant = () => (dispatch, getState) => {
  axios
    .get("/api/tenant/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_TENANT,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE TENANT
export const deleteTenant = id => (dispatch, getState) => {
  axios
    .delete(`/api/tenant/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteTenant: "Tenant Deleted" }));
      dispatch({
        type: DELETE_TENANT,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD TENANT
export const addTenant = tenant => (dispatch, getState) => {
  axios
    .post("/api/tenant/", tenant, tokenConfig(getState), {
      headers: {
        "content-type": "multipart/form-data"
      }
    })
    .then(res => {
      dispatch(createMessage({ addTenant: "Tenant Added" }));
      dispatch({
        type: ADD_TENANT,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// EDIT TENANT
export const editTenant = (tenant, id) => (dispatch, getState) => {
  axios
    .put(`/api/tenant/${id}/`, tenant, tokenConfig(getState), {
      headers: {
        "content-type": "multipart/form-data"
      }
    })
    .then(res => {
      dispatch(createMessage({ editTenant: "Tenant Edited" }));
      dispatch({
        type: EDIT_TENANT,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
