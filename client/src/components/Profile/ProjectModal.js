import React, { Component } from "react";
import { connect } from "react-redux";
import { addProject, updateProject } from "../../store/actions/projectActions";
import Select from "react-select";

const categories = [
  "Geology",
  "Molecular Chemistry",
  "Physics",
  "Biology",
  "Robotics",
  "Medicine",
  "Mobile Devices",
  "Video Games",
  "Health and Wellness",
  "Aerospace",
];

const options = categories.map((category) => ({
  label: category,
  value: category,
}));

class ProjectModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: "",
      description: "",
      toBeEdited: false,
    };
  }
  componentDidMount() {
    // const projects = this.props.projects ||
    if (this.props.project) {
      console.log(this.props.project._id);
      this.setState({
        name: this.props.project.name,
        category: this.props.project.category.map((singleCategory) => ({
          label: singleCategory,
          value: singleCategory,
        })),
        description: this.props.project.description,
        toBeEdited: true,
      });
    }
  }
  handleSubmit = async (e) => {
    const categories = this.state.category.map((category) => category.value);
    if (this.state.toBeEdited) {
      await this.props.updateProject({
        project_id: this.props.project._id,
        name: this.state.name,
        category: categories,
        description: this.state.description,
      });
    } else {
      await this.props.addProject({
        name: this.state.name,
        category: categories,
        description: this.state.description,
      });
    }
    this.props.toggleModal();
  };
  render() {
    return (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    Project
                  </h3>
                  <div className="mt-2">
                    <label htmlFor="bio" className="block">
                      PROJECT NAME *
                    </label>
                    {/* <textarea
                      type="text"
                      value={this.state.bio}
                      className="border rounded border-purple-500 w-full h-24"
                      onChange={(e) => this.setState({ bio: e.target.value })}
                    /> */}
                    <input
                      type="text"
                      value={this.state.name}
                      className="border rounded border-purple-500 w-full h-8"
                      onChange={(e) => this.setState({ name: e.target.value })}
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="bio" className="block">
                      PROJECT CATEGORY *
                    </label>
                    {/* <textarea
                      type="text"
                      value={this.state.bio}
                      className="border rounded border-purple-500 w-full h-24"
                      onChange={(e) => this.setState({ bio: e.target.value })}
                    /> */}
                    <Select
                      isMulti
                      className="basic-multi-select"
                      classNamePrefix="select"
                      options={options}
                      value={this.state.category}
                      onChange={(value) => this.setState({ category: value })}
                      menuPosition={"fixed"}
                      menuPortalTarget={document.body}
                      styles={{
                        menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                      }}
                    />
                    {/* <Select
                      isMulti
                      value={this.state.skills}
                      name="skills"
                      options={options}
                      onChange={(value) => this.setState({ skills: value })}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      menuPosition={"fixed"}
                      menuPortalTarget={document.body}
                      styles={{
                        menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                      }}
                    /> */}
                  </div>
                  <div className="mt-2">
                    <label htmlFor="bio" className="block">
                      PROJECT DESCRIPTION *
                    </label>
                    <textarea
                      type="text"
                      value={this.state.description}
                      className="border rounded border-purple-500 w-full h-24"
                      onChange={(e) =>
                        this.setState({ description: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={this.handleSubmit}
              >
                Add Project
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => {
                  this.setState({
                    name: "",
                    description: "",
                    category: "",
                    toBeEdited: false,
                  });
                  this.props.toggleModal();
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  projects: state.projects.projects,
});

export default connect(mapStateToProps, { addProject, updateProject })(
  ProjectModal
);
// export default AboutModal;
