import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class SearchContainer extends Component {
  render() {
    console.log(this.props.projects);
    return (
      <div class="m-6 p-6">
        <h1 className="text-3xl font-semibold">Search Results</h1>
        {this.props.users && this.props.users.length > 0 && (
          <table className="w-full mt-6">
            <tbody>
              <tr className="border-b-2 border-black">
                <th>User</th>
                <th>Skills</th>
                <th></th>
              </tr>
              {this.props.users.map((user) => (
                <tr>
                  <td className="p-2">
                    {user.name}
                    <button class=" ml-2 py-2 cursor-text px-4 shadow-md no-underline rounded-full font-sans font-semibold text-sm border border-blue-800 btn-primary focus:outline-none active:shadow-none mr-2">
                      {user.experience.toUpperCase()}
                    </button>
                  </td>
                  <td className="p-2 text-center">
                    {user.skills.slice(0, 3).map((skill, idx) => (
                      <button
                        style={{ backgroundColor: "#7A7CFF" }}
                        class="py-2 cursor-text px-4 shadow-md no-underline rounded-full bg-gray-600 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
                        key={idx}
                      >
                        {skill}
                      </button>
                    ))}
                    {user.skills.length > 3 && " ..."}
                    {!user.skills.length > 0 && "None Added Yet"}
                  </td>
                  <td>
                    <Link
                      style={{ backgroundColor: "#5352ED" }}
                      class="py-2 cursor-pointer px-4 shadow-md no-underline rounded-lg text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
                      to={`/user/profile/${user._id}`}
                    >
                      View Profile
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {this.props.projects && this.props.projects.length > 0 && (
          <table className="w-full mt-6">
            <tbody>
              <tr className="border-b-2 border-black">
                <th>User</th>
                <th>Project Category</th>
                <th>Skills</th>
                <th></th>
              </tr>
              {this.props.projects.map((project) => (
                <tr>
                  <td className="p-2">
                    {project.user.name}
                    <button class=" ml-2 py-2 cursor-text px-4 shadow-md no-underline rounded-full font-sans font-semibold text-sm border border-blue-800 btn-primary focus:outline-none active:shadow-none mr-2">
                      {project.user.experience.toUpperCase()}
                    </button>
                  </td>
                  <td className="p-2 text-center">
                    {project.category.map((singleCategory, idx) => (
                      <button
                        style={{ backgroundColor: "#FF7A7A" }}
                        class="py-2 cursor-text px-4 shadow-md no-underline rounded-full text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
                        key={idx}
                      >
                        {singleCategory}
                      </button>
                    ))}
                  </td>
                  <td className="p-2 text-center">
                    {project.user.skills.map((skill, idx) => (
                      <button
                        style={{ backgroundColor: "#7A7CFF" }}
                        class="py-2 cursor-text px-4 shadow-md no-underline rounded-full text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
                        key={idx}
                      >
                        {skill}
                      </button>
                    ))}
                    {!project.user.skills.length > 0 && "None Added Yet"}
                  </td>
                  <td>
                    <Link
                      style={{ backgroundColor: "#5352ED" }}
                      class="py-2 cursor-pointer px-4 shadow-md no-underline rounded-lg text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
                      to={`/user/profile/${project.user._id}`}
                    >
                      View Profile
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  projects: state.projects.searchProjects,
  users: state.auth.searchUsers,
});

export default connect(mapStateToProps, {})(SearchContainer);
