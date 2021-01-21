import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import workspaceReducer from "./workspaceReducer";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  workspace: workspaceReducer,
});
