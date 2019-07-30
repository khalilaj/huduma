import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_PROPERTY, DELETE_PROPERTY, ADD_PROPERTY } from "./types";
import { tokenConfig } from "./auth";

// GET PROPERTY
export const getProperty = () => (dispatch, getState) => {
  axios
    .get("/api/property/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_PROPERTY,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE PROPERTY
export const deleteProperty = id => (dispatch, getState) => {
  axios
    .delete(`/api/property/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteProperty: "Property Deleted" }));
      dispatch({
        type: DELETE_PROPERTY,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD PROPERTY
export const addProperty = property => (dispatch, getState) => {
  axios
    .post("/api/property/", property, tokenConfig(getState), {
      headers: {
        "content-type": "multipart/form-data"
      }
    })
    .then(res => {
      dispatch(createMessage({ addProperty: "Property Added" }));
      dispatch({
        type: ADD_PROPERTY,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// EDIT PROPERTY
export const editProperty = (property, id) => (dispatch, getState) => {
  axios
    .put(`/api/property/${id}/`, property, tokenConfig(getState), {
      headers: {
        "content-type": "multipart/form-data"
      }
    })
    .then(res => {
      dispatch(createMessage({ editProperty: "Property Edited" }));
      dispatch({
        type: EDIT_PROPERTY,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
