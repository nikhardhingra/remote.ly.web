import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { searchUsers, clearSearchUsers } from "../../store/actions/authActions";
import {
  searchProjects,
  clearSearchProjects,
} from "../../store/actions/projectActions";

const options = [
  { label: "Search by Name", value: "name" },
  { label: "Search by Skills", value: "skills" },
  { label: "Search by Experience", value: "experience" },
  { label: "Search by Project Category", value: "category" },
];

export class Search extends Component {
  state = {
    type: { label: "Search by Name", value: "name" },
    searchParam: "",
    searchOptions: [],
  };

  handleSubmit = () => {
    const type = this.state.type.value;

    this.props.clearSearchUsers();
    this.props.clearSearchProjects();

    if (type === "name" || type === "skills" || type === "experience") {
      this.props.searchUsers({
        name: this.state.searchParam,
        skill: this.state.searchParam.value,
        experience: this.state.searchParam.value,
        type: this.state.type.value,
      });
    } else {
      this.props.searchProjects({ category: this.state.searchParam.value });
    }
  };

  onTypeChange = (value) => {
    this.setState({ type: value, searchParam: "" });
    if (value.value === "skills") {
      const skills = [
        "Java",
        "Python",
        "C++",
        "UX/UI",
        "HTML/CSS",
        "Arduino",
        "Processing",
        "Mechanics",
        "Circuits",
        "Conceptual Design",
        "User Testing",
        "Software Testing",
        "Wireframing",
      ];
      const searchOptions = skills.map((skill) => ({
        value: skill,
        label: skill,
      }));

      this.setState({ searchOptions });
    } else if (value.value === "experience") {
      this.setState({
        searchOptions: [
          { label: "Novice", value: "novice" },
          { label: "Expert", value: "expert" },
        ],
      });
    } else if (value.value === "category") {
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

      const searchOptions = categories.map((category) => ({
        label: category,
        value: category,
      }));

      this.setState({ searchOptions });
    }
  };

  render() {
    return (
      <div className="m-auto block flex justify-between">
        <div className="bg-white rounded-lg border border-black border-8 border w-full mr-6 flex justify-between">
          {this.state.type.value === "name" ? (
            <input
              type="text"
              className="rounded-lg w-full"
              value={this.state.searchParam}
              onChange={(e) => this.setState({ searchParam: e.target.value })}
            />
          ) : (
            <Select
              className="basic-single rounded-lg w-full"
              classNamePrefix="select"
              options={this.state.searchOptions}
              value={this.state.searchParam}
              onChange={(value) => this.setState({ searchParam: value })}
            />
          )}
          <Select
            className="basic-single w-72"
            classNamePrefix="select"
            options={options}
            value={this.state.type}
            onChange={this.onTypeChange}
            // menuPosition={"fixed"}
            // menuPortalTarget={document.body}
            // styles={{
            //   width: "100px",
            // }}
          />
        </div>
        <a
          onClick={() => {
            this.handleSubmit();
          }}
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
                class="fas fa-arrow-right absolute text-white"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              ></i>
            </a>
          </div>
        </a>
      </div>
    );
  }
}

export default connect(null, {
  searchUsers,
  searchProjects,
  clearSearchUsers,
  clearSearchProjects,
})(Search);
