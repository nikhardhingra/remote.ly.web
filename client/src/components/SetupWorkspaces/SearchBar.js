import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getWorkspaces } from "../../store/actions/workspaceActions";

class SearchBar extends Component {
  static propTypes = {
    getWorkspace: PropTypes.func,
  };

  onChange = (e) => {
    this.props.getWorkspaces(1, e.target.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for room here"
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default connect(null, { getWorkspaces })(SearchBar);
