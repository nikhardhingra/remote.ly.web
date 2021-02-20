import { loadUser } from "../actions/authActions";
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
  DELETE_ACCOUNT_SUCCESS,
} from "../actions/constants";

const initialState = {
  searchUsers: [],
  token: localStorage.getItem("remotelytoken"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("remotelytoken", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case GET_SEARCH_USERS:
      return {
        ...state,
        searchUsers: action.payload,
      };
    case UPDATE_ABOUT_SUCCESS:
    case UPDATE_SKILL_SUCCESS:
    case UPDATE_CONTACT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ...action.payload,
      };
    case UPDATE_ABOUT_FAIL:
    case UPDATE_SKILL_FAIL:
    case UPDATE_CONTACT_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      localStorage.removeItem("remotelytoken");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case LOGOUT_SUCCESS:
    case DELETE_ACCOUNT_SUCCESS:
      localStorage.removeItem("remotelytoken");
      window.location.replace("/login");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
}
