import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import {
  GET_TRANSACTION,
  DELETE_TRANSACTION,
  ADD_TRANSACTION,
  EDIT_TRANSACTION
} from "./types";
import { tokenConfig } from "./auth";

// GET TRANSACTION
export const getTransaction = () => (dispatch, getState) => {
  axios
    .get("/api/transaction/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_TRANSACTION,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE TRANSACTION
export const deleteTransaction = id => (dispatch, getState) => {
  axios
    .delete(`/api/transaction/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteTransaction: "Transaction Deleted" }));
      dispatch({
        type: DELETE_TRANSACTION,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD TRANSACTION
export const addTransaction = transaction => (dispatch, getState) => {
  axios
    .post("/api/transaction/", transaction, tokenConfig(getState), {
      headers: {
        "content-type": "multipart/form-data"
      }
    })
    .then(res => {
      dispatch(createMessage({ addTransaction: "Transaction Added" }));
      dispatch({
        type: ADD_TRANSACTION,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// EDIT TRANSACTION
export const editTransaction = (transaction, id) => (dispatch, getState) => {
  axios
    .put(`/api/transaction/${id}/`, transaction, tokenConfig(getState), {
      headers: {
        "content-type": "multipart/form-data"
      }
    })
    .then(res => {
      dispatch(createMessage({ editTransaction: "Transaction Edited" }));
      dispatch({
        type: EDIT_TRANSACTION,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
