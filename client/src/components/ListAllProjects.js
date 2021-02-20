import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { listProjects } from "../store/actions/projectActions";
import { connect } from "react-redux";
import ProjectModal from "./Profile/ProjectModal";

export class ListAllProjects extends Component {
  componentDidMount() {
    const { user_id } = this.props.match.params;
    this.props.listProjects(user_id);
  }
  constructor(props) {
    super(props);
    this.state = {
      showProjectModal: false,
      selectedProject: null,
    };
  }
  onEditProjectIconClick = (project) => {
    this.setState({
      selectedProject: project,
      showProjectModal: true,
    });
  };

  render() {
    return (
      <div className="p-6">
        <div className="flex justify-between">
          <div className="flex">
            <button
              onClick={this.props.history.goBack}
              className="cursor-pointer mr-2"
            >
              <div
                className="hover:shadow-lg transition-shadow"
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: "50%",
                  backgroundColor: "#5F2EEA",
                  position: "relative",
                }}
              >
                <a>
                  <i
                    class="fas fa-arrow-left absolute text-white"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  ></i>
                </a>
              </div>
            </button>
          </div>
          <h3 className="font-bold text-3xl">All Projects</h3>
          {this.props.user &&
            this.props.user._id === this.props.match.params.user_id && (
              <i
                className="fas fa-plus"
                onClick={() => {
                  this.setState({ showProjectModal: true });
                }}
              ></i>
            )}
        </div>
        {this.props.projects &&
        this.props.user &&
        this.props.projects.length > 0
          ? this.props.projects.map((project) => (
              <div className="mt-4">
                <div className="flex justify-between">
                  <h1 className="font-bold text-xl">{project.name}</h1>
                  {this.props.user._id === this.props.match.params.user_id && (
                    <i
                      className="fas fa-pen"
                      onClick={() => this.onEditProjectIconClick(project)}
                    />
                  )}
                </div>
                <h3 className="text-sm">
                  {project.category.map((singleCategory, idx) => (
                    <button
                      class="py-2 cursor-text px-4 shadow-md no-underline rounded-full bg-gray-600 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
                      key={idx}
                    >
                      {singleCategory}
                    </button>
                  ))}
                </h3>
                <p className="mt-2 text-gray-400 italic">
                  {project.description}
                </p>
              </div>
            ))
          : this.props.self
          ? "Add new projects"
          : "None Yet"}
        {this.state.showProjectModal && (
          <ProjectModal
            project={this.state.selectedProject}
            toggleModal={() =>
              this.setState({ showProjectModal: false, selectedProject: null })
            }
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  projects: state.projects.projects,
  user: state.auth.user,
});

export default withRouter(
  connect(mapStateToProps, { listProjects })(ListAllProjects)
);
