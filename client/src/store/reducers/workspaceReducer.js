import {
  GET_WORKSPACES,
  JOIN_WORKSPACES,
  CREATE_WORKSPACES,
  WORKSPACES_LOADING,
  SEARCH_WORKSPACES,
} from "../actions/constants";

const initialState = {
  workspaces: [],
  searchQuery: "",
  page: 1,
  limit: 200,
  isLoading: false,
};

export default function workspaceReducer(state = initialState, action) {
  switch (action.type) {
    case GET_WORKSPACES:
      return {
        ...state,
        workspaces: action.payload,
        isLoading: false,
      };
    case WORKSPACES_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SEARCH_WORKSPACES:
      return {
        ...state,
        searchQuery: action.payload.searchQuery,
        page: action.payload.page,
      };
    default:
      return {
        ...state,
      };
  }
}
