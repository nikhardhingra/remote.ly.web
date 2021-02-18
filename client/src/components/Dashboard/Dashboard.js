import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import GettingStartedImage from "../../assets/images/gettingstarted.png";
import ProfileImage from "../../assets/images/profile.png";
import SearchImage from "../../assets/images/searchforexperts.png";
import Navbar from "../Navbar";
import DashboardCard from "./DashboardCard";

class Dashboard extends Component {
  render() {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar isAuthenticated={true} />
        {this.props.user && (
          <div className="container p-6 w-full">
            <h1 className="text-4xl text-blue-800">
              Welcome, {this.props.user.name.split(" ")[0]}!
            </h1>
            <div className="card-grid flex md:flex-row flex-col justify-between mt-6 w-full">
              <Link to="/profile">
                <DashboardCard
                  image={ProfileImage}
                  gradient="from-purple-700 to-pink-300"
                  heading="My Profile"
                  text="Add your skills, projects and contact information to share with the community"
                />
              </Link>
              <DashboardCard
                image={SearchImage}
                gradient="from-purple-500 to-green-300"
                heading="Search for experts"
                text="Connect with experts in the field and browse different types of projects for ideas"
              />
              <DashboardCard
                image={GettingStartedImage}
                gradient="from-blue-300 to-green-300"
                heading="Getting Started"
                text="Navigate through key phases of a haptics project life cycle and get help along the way"
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, {})(Dashboard);
