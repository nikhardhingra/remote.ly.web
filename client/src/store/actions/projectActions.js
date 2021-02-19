import axios from "axios";
import { tokenConfig } from "./authActions";
import {
  ADD_PROJECT_FAIL,
  ADD_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAIL,
  UPDATE_PROJECT_SUCCESS,
  GET_ALL_PROJECTS_FAIL,
  GET_ALL_PROJECTS_SUCCESS,
} from "./constants";

import { returnErrors } from "./errorActions";

export const getAllProjects = () => (dispatch, getState) => {
  const token = getState().auth.token || localStorage.getItem("remotelytoken");
  // headers
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };

  axios
    .get("/api/projects", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_ALL_PROJECTS_SUCCESS,
        payload: res.data.rows,
      });
    })
    .catch((err) => {
      dispatch(
        returnErrors(
          { msg: err.response.data.message },
          err.response.status,
          GET_ALL_PROJECTS_FAIL
        )
      );
    });
};

export const addProject = (project) => (dispatch, getState) => {
  const token = getState().auth.token || localStorage.getItem("remotelytoken");
  // headers
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };

  // Request body
  const body = JSON.stringify(project);

  axios
    .post("/api/projects", body, config)
    .then((res) => {
      dispatch({
        type: ADD_PROJECT_SUCCESS,
        payload: res.data.rows,
      });
    })
    .catch((err) => {
      dispatch(
        returnErrors(
          { msg: err.response.data.message },
          err.response.status,
          "ADD_PROJECT_FAIL"
        )
      );
      dispatch({
        type: ADD_PROJECT_FAIL,
      });
    });
};

export const updateProject = (project) => (dispatch, getState) => {
  const token = getState().auth.token || localStorage.getItem("remotelytoken");
  // headers
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };

  // Request body
  const body = JSON.stringify(project);

  axios
    .put("/api/projects", body, config)
    .then((res) => {
      dispatch({
        type: UPDATE_PROJECT_SUCCESS,
        payload: res.data.rows,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch(
        returnErrors(
          { msg: err.response.data.message },
          err.response.status,
          "UPDATE_PROJECT_FAIL"
        )
      );
      dispatch({
        type: UPDATE_PROJECT_FAIL,
      });
    });
};
