import axios from "axios";
import {
  GET_WORKSPACES,
  WORKSPACES_LOADING,
  SEARCH_WORKSPACES,
} from "./constants";
// import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getWorkspaces = (page = 1, searchQuery) => (dispatch) => {
  dispatch({
    type: SEARCH_WORKSPACES,
    payload: {
      searchQuery,
      page,
    },
  });
  dispatch(setWorkspacesLoading());
  axios
    .get(
      `/api/workspace/search?page=${page}&limit=10&searchQuery=${searchQuery}`
    )
    .then((res) => {
      dispatch({
        type: GET_WORKSPACES,
        payload: res.data.rows.workspaces,
      });
    })
    .catch((err) => {
      console.log(err.toString());
      dispatch(returnErrors(err.response.data.message, err.response.status));
    });
};

export const setWorkspacesLoading = () => {
  return {
    type: WORKSPACES_LOADING,
  };
};
