import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import { getWorkspaces } from "../../store/actions/workspaceActions";

class SetupWorkspaces extends Component {
  componentDidMount = () => {
    this.props.getWorkspaces(1, "");
  };

  render() {
    const { workspaces, isLoading } = this.props.workspace;
    return (
      <>
        <SearchBar />
        <ul className="workspace-list">
          {isLoading
            ? "Loading..."
            : workspaces.map((workspace) => (
                <li key={workspace._id}>
                  {workspace.name} - {workspace.unique_name}
                  <button onClick={this.props.joinWorkspace}>Join</button>
                </li>
              ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  workspace: state.workspace,
});

export default connect(mapStateToProps, { getWorkspaces })(SetupWorkspaces);
