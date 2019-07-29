import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_UNIT, DELETE_UNIT, ADD_UNIT, UNIT_LOADING } from "./types";
import { tokenConfig } from "./auth";

// GET UNIT
export const getUnit = () => (dispatch, getState) => {
  dispatch({ type: UNIT_LOADING });
  axios
    .get("/api/unit/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_UNIT,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE UNIT
export const deleteUnit = id => (dispatch, getState) => {
  dispatch({ type: UNIT_LOADING });
  axios
    .delete(`/api/unit/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteUnit: "Unit Deleted" }));
      dispatch({
        type: DELETE_UNIT,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD UNIT
export const addUnit = unit => (dispatch, getState) => {
  dispatch({ type: UNIT_LOADING });
  axios
    .post("/api/unit/", unit, tokenConfig(getState), {
      headers: {
        "content-type": "multipart/form-data"
      }
    })
    .then(res => {
      dispatch(createMessage({ addUnit: "Unit Added" }));
      dispatch({
        type: ADD_UNIT,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
