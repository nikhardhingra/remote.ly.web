import React from "react";
import { Link } from "react-router-dom";

class MyLink extends React.Component {
  render() {
    if (this.props.disabled) {
      return (
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-700"
          role="menuitem"
        >
          {this.props.children}
        </a>
      );
    }
    return (
      <Link
        class="block px-4 py-2 text-sm text-blue-700 hover:bg-gray-100 hover:text-blue-900"
        role="menuitem"
        to={this.props.to}
      >
        {this.props.children}
      </Link>
    );
  }
}

export default MyLink;
