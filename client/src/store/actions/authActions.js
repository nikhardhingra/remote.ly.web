import axios from "axios";

import { returnErrors } from "./errorActions";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  UPDATE_ABOUT_SUCCESS,
  UPDATE_ABOUT_FAIL,
  UPDATE_SKILL_SUCCESS,
  UPDATE_SKILL_FAIL,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_FAIL,
  GET_SEARCH_USERS,
} from "./constants";

// Check token and load user
export const loadUser = () => (dispatch, getState) => {
  console.log(`loaduser called`);
  dispatch({ type: USER_LOADING });

  axios
    .get(`/api/auth/user`, tokenConfig(getState))
    .then((res) => {
      dispatch({ type: USER_LOADED, payload: res.data.rows });
    })
    .catch((err) => {
      console.log(err);
      dispatch(
        returnErrors({ msg: err.response.data.message }, err.response.status)
      );
      dispatch({ type: AUTH_ERROR });
    });
};

// Register user
export const register = ({ name, email, password, experience }) => (
  dispatch
) => {
  // headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request body
  const body = JSON.stringify({
    name,
    email,
    password,
    experience,
  });

  axios
    .post("/api/auth/register", body, config)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data.rows,
      });
    })
    .catch((err) => {
      dispatch(
        returnErrors(
          { msg: err.response.data.message },
          err.response.status,
          "REGISTER_FAIL"
        )
      );
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

// Login user
export const login = ({ email, password }) => (dispatch) => {
  // headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request body
  const body = JSON.stringify({
    email,
    password,
  });

  axios
    .post("/api/auth/login", body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.rows,
      });
    })
    .catch((err) => {
      dispatch(
        returnErrors(
          { msg: err.response.data.message },
          err.response.status,
          "LOGIN_FAIL"
        )
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

export const logout = () => (dispatch) => {
  console.log(`logging out`);
  dispatch({
    type: LOGOUT_SUCCESS,
  });
};

export const searchUsers = ({ name, experience, skill, type }) => (
  dispatch,
  getState
) => {
  let queryParam;
  let queryValue;
  if (type === "name") {
    queryParam = "name";
    queryValue = name;
  } else if (type === "experience") {
    queryParam = "experience";
    queryValue = experience;
  } else {
    queryParam = "skill";
    queryValue = skill;
  }

  axios
    .get(`/api/auth/search?${queryParam}=${queryValue}`, tokenConfig(getState))
    .then((res) => {
      dispatch({ type: GET_SEARCH_USERS, payload: res.data.rows });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const clearSearchUsers = () => (dispatch) => {
  dispatch({
    type: GET_SEARCH_USERS,
    payload: [],
  });
};

export const updateAbout = ({ about }) => (dispatch, getState) => {
  const token = getState().auth.token || localStorage.getItem("remotelytoken");
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };

  // Request body
  const body = JSON.stringify({
    about,
  });

  axios
    .post("/api/auth/about", body, config)
    .then((res) => {
      console.log(res.data.rows);
      dispatch({
        type: UPDATE_ABOUT_SUCCESS,
        payload: { user: res.data.rows },
      });
    })
    .catch((err) => {
      dispatch(
        returnErrors(
          { msg: err.response.data.message },
          err.response.status,
          "UPDATE_ABOUT_FAIL"
        )
      );
      dispatch({
        type: UPDATE_ABOUT_FAIL,
      });
    });
};

export const updateContactInfo = ({ github, linkedin }) => (
  dispatch,
  getState
) => {
  const token = getState().auth.token || localStorage.getItem("remotelytoken");
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };

  // Request body
  const body = JSON.stringify({
    github,
    linkedin,
  });

  axios
    .post("/api/auth/contact", body, config)
    .then((res) => {
      console.log(res.data.rows);
      dispatch({
        type: UPDATE_CONTACT_SUCCESS,
        payload: { user: res.data.rows },
      });
    })
    .catch((err) => {
      dispatch(
        returnErrors(
          { msg: err.response.data.message },
          err.response.status,
          "UPDATE_CONTACT_FAIL"
        )
      );
      dispatch({
        type: UPDATE_CONTACT_FAIL,
      });
    });
};

/**
 * @params
 *  -> skills: [String]
 */
export const updateSkill = ({ skills }) => (dispatch, getState) => {
  const token = getState().auth.token || localStorage.getItem("remotelytoken");
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };

  // Request body
  const body = JSON.stringify({
    skills,
  });

  axios
    .post("/api/auth/skills", body, config)
    .then((res) => {
      console.log(res.data.rows);
      dispatch({
        type: UPDATE_SKILL_SUCCESS,
        payload: { user: res.data.rows },
      });
    })
    .catch((err) => {
      dispatch(
        returnErrors(
          { msg: err.response.data.message },
          err.response.status,
          "UPDATE_SKILL_FAIL"
        )
      );
      dispatch({
        type: UPDATE_SKILL_FAIL,
      });
    });
};

// Setup config/headers in token
export const tokenConfig = (getState) => {
  // Get token from localStorage
  const token = getState().auth.token || localStorage.getItem("remotelytoken");
  console.log(token);

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // if token then add to errors
  if (token) config.headers["x-auth-token"] = token;

  return config;
};
