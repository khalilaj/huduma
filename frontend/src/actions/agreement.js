import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_AGREEMENT, DELETE_AGREEMENT, ADD_AGREEMENT } from "./types";
import { tokenConfig } from "./auth";

// GET AGREEMENT
export const getAgreement = () => (dispatch, getState) => {
  axios
    .get("/api/agreement/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_AGREEMENT,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE AGREEMENT
export const deleteAgreement = id => (dispatch, getState) => {
  axios
    .delete(`/api/agreement/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteAgreement: "Agreement Deleted" }));
      dispatch({
        type: DELETE_AGREEMENT,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD AGREEMENT
export const addAgreement = agreement => (dispatch, getState) => {
  axios
    .post("/api/agreement/", agreement, tokenConfig(getState), {
      headers: {
        "content-type": "multipart/form-data"
      }
    })
    .then(res => {
      dispatch(createMessage({ addAgreement: "Agreement Added" }));
      dispatch({
        type: ADD_AGREEMENT,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
