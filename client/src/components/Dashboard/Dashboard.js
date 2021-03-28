import React, { Component } from "react";
import { connect } from "react-redux";
import GettingStartedImage from "../../assets/images/In progress-rafiki 2.png";
import ProfileImage from "../../assets/images/profile.png";
import SearchImage from "../../assets/images/searchforexperts.png";
import FAQImage from "../../assets/images/FAQImage.png";
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
            <div className="flex flex-wrap md:flex-nowrap -mx-1 lg:-mx-4">
              {/* </Link> */}
              {/* <Link to="/profile"> */}
              <DashboardCard
                link="/profile"
                image={ProfileImage}
                gradient="from-purple-700 to-pink-300"
                heading="My Profile"
                text="Add your skills, projects and contact information to share with the community"
              />

              {/* <Link to="/getting-started"> */}
              <DashboardCard
                link="/getting-started"
                image={GettingStartedImage}
                gradient="from-blue-300 to-green-300"
                heading="Getting Started"
                text="Navigate through key phases of a haptics project life cycle and get help along the way"
              />
              {/* </Link> */}
              {/* <Link to="/connect"> */}
              <DashboardCard
                link="/connect"
                image={SearchImage}
                gradient="from-purple-500 to-green-300"
                heading="Connect"
                text="Connect with hapticians in the field and browse different types of projects for ideas"
              />
              
              {/* </Link> */}
              {/* <Link to="/faq"> */}
              <DashboardCard
                link="/faq"
                image={FAQImage}
                gradient="from-blue-300 to-green-300"
                heading="Frequently Asked Questions"
                text= "Find answers to the most commonly asked questions about Haptics"
              />
              {/* </Link> */}
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
