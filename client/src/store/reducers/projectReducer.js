import {
  ADD_PROJECT_FAIL,
  ADD_PROJECT_SUCCESS,
  GET_ALL_PROJECTS_SUCCESS,
  GET_SEARCH_PROJECTS,
  LIST_ALL_PROJECTS_SUCCESS,
  UPDATE_PROJECT_FAIL,
  UPDATE_PROJECT_SUCCESS,
} from "../actions/constants";

const initialState = {
  projects: [],
  searchProjects: [],
};

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload,
      };
    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    case UPDATE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: [
          ...state.projects.map((project) => {
            if (action.payload._id === project._id) {
              project.name = action.payload.name;
              project.description = action.payload.description;
              project.category = action.payload.category;
            }
            return project;
          }),
        ],
      };
    case GET_SEARCH_PROJECTS:
      return {
        ...state,
        searchProjects: action.payload,
      };
    case LIST_ALL_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload,
      };
    case UPDATE_PROJECT_FAIL:
      return state;
    // case ADD_PROJECT_FAIL:
    default:
      return state;
  }
}
