import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import Navbar from "../Navbar";
import ContactInfoNotEditModal from "./ContactInfoNotEditModal";
import { listProjects } from "../../store/actions/projectActions";
import axios from "axios";

class OtherUserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      showContactInfoNotEditModal: false,
    };
  }
  componentDidMount() {
    const { user_id } = this.props.match.params;
    this.props.listProjects(user_id);
    axios
      .get(`/api/auth/user-item?user_id=${user_id}`)
      .then((res) => {
        this.setState({
          user: res.data.rows,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <>
        <div className="bg-gray-100">
          <Navbar isAuthenticated={true} />
          {this.state.user && (
            <div className="container p-6 w-full">
              <h1 className="text-4xl text-blue-800 mb-12">My Profile</h1>
              <div className="user-profile-top flex flex-col md:flex-row justify-between items-center">
                <div className="user">
                  <div className="flex items-center">
                    <img
                      src={this.state.user.avatar_url}
                      alt={this.state.user.name + " Profile Image"}
                      className="mr-4"
                    />
                    <div className="user-details">
                      <h2 className="text-3xl m-0 p-0 font-bold">
                        {this.state.user.name}
                      </h2>
                      {this.state.user.experience &&
                        this.state.user.experience.toUpperCase()}
                    </div>
                  </div>
                </div>
                <div className="cards">
                  <div
                    className="rounded py-4 px-2 border border-purple-500 mb-2 bg-white text-center cursor-pointer"
                    onClick={() =>
                      this.setState({ showContactInfoNotEditModal: true })
                    }
                  >
                    <i className="fas fa-phone inline mx-4" />
                    <span className="mr-4">CONTACT INFO</span>
                  </div>
                </div>
              </div>
              <div className="about mt-10 p-10 mb-24">
                <div className="flex flex-row justify-between items-center">
                  <h4 className="font-bold">About</h4>
                </div>
                <p>{this.state.user.about}</p>
              </div>
            </div>
          )}
        </div>
        <div className="bg-white container p-6">
          {this.state.user && this.state.user.experience && (
            <div>
              <div className="skills shadow-xl p-10 mt-10">
                <div className="flex flex-row justify-between items-center">
                  <h4 className="font-bold">Skills</h4>
                </div>
                <div className="mt-4">
                  {this.state.user.skills && this.state.user.skills.length > 0
                    ? this.state.user.skills.map((skill, idx) => (
                        <button
                          class="py-2 cursor-text px-4 shadow-md no-underline rounded-full bg-gray-600 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
                          key={idx}
                        >
                          {skill}
                        </button>
                      ))
                    : "None Added Yet!"}
                </div>
              </div>
              <div className="projects shadow-xl p-10 mt-10 mb-24">
                <div className="flex flex-row justify-between items-center">
                  <h4 className="font-bold">Projects</h4>
                </div>
                <div className="mt-4">
                  {this.props.projects.length > 0
                    ? this.props.projects.slice(0, 3).map((project) => (
                        <div className="mt-4">
                          <div className="flex justify-between">
                            <h1 className="font-bold text-xl">
                              {project.name}
                            </h1>
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
                    : "None Added Yet!"}
                </div>
                {this.props.projects.length > 3 && (
                  <div className="text-blue-600 mt-6">
                    <Link to={`/projects/${this.state.user._id}`}>
                      Show more
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        {this.state.showContactInfoNotEditModal && (
          <ContactInfoNotEditModal
            github={this.state.user.github || ""}
            linkedin={this.state.user.linkedin || ""}
            toggleModal={() =>
              this.setState({ showContactInfoNotEditModal: false })
            }
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  projects: state.projects.projects,
});

export default connect(mapStateToProps, { listProjects })(OtherUserProfile);
