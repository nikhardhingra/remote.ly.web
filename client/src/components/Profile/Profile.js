import { connect } from "react-redux";
import React, { Component } from "react";
import Navbar from "../Navbar";
import AboutModal from "./AboutModal";
import SkillModal from "./SkillModal";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAboutModal: false,
      showSkillModal: false,
    };
  }
  render() {
    return (
      <>
        <div className="bg-gray-100">
          <Navbar isAuthenticated={true} />
          {this.props.user && this.props.user.experience && (
            <div className="container p-6 w-full">
              <h1 className="text-4xl text-blue-800 mb-12">My Profile</h1>
              <div className="user-profile-top flex flex-col md:flex-row justify-between items-center">
                <div className="user">
                  <h2 className="text-3xl m-0 p-0 font-bold">
                    {this.props.user.name}
                  </h2>
                  {this.props.user.experience.toUpperCase()}
                </div>
                <div className="cards">
                  <div className="rounded py-4 px-2 border border-purple-500 mb-2 bg-white text-center cursor-pointer">
                    <i className="fas fa-phone inline mx-4" />
                    <span className="mr-4">CONTACT INFO</span>
                  </div>
                  <div className="rounded py-4 px-2 border border-purple-500 mb-2 bg-gray-900 text-white text-center">
                    <i className="fas fa-lock inline mx-4" />
                    <span className="mr-4">CHANGE PASSWORD(not available)</span>
                  </div>
                  <div className="rounded py-4 px-2 border border-purple-500 mb-2 bg-white text-center cursor-pointer">
                    <i className="fas fa-times-circle inline mx-4" />
                    <span className="mr-4">DELETE ACCOUNT</span>
                  </div>
                </div>
              </div>
              <div className="about mt-10 p-10 mb-24">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <h4 className="font-bold">About</h4>
                  <i
                    className="fas fa-pen"
                    onClick={() => {
                      this.setState({ showAboutModal: true });
                    }}
                  ></i>
                </div>
                <p>{this.props.user.about}</p>
              </div>
            </div>
          )}
        </div>
        <div className="bg-white container p-6">
          {this.props.user && this.props.user.experience && (
            <div className="skills shadow-xl p-10 mt-10 mb-24">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <h4 className="font-bold">Skills</h4>
                <i
                  className="fas fa-pen"
                  onClick={() => {
                    this.setState({ showSkillModal: true });
                  }}
                ></i>
              </div>
              <p>{this.props.user.about}</p>
            </div>
          )}
        </div>
        {this.state.showAboutModal && (
          <AboutModal
            toggleModal={() => this.setState({ showAboutModal: false })}
          />
        )}
        {this.state.showSkillModal && (
          <SkillModal
            toggleModal={() => this.setState({ showSkillModal: false })}
          />
        )}
      </>
    );
  }
}
// const AboutModal = () => {
//   return (
//     <div className="fixed z-10 inset-0 overflow-y-auto">
//       <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//         <div className="fixed inset-0 transition-opacity" aria-hidden="true">
//           <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//         </div>

//         <span
//           className="hidden sm:inline-block sm:align-middle sm:h-screen"
//           aria-hidden="true"
//         >
//           &#8203;
//         </span>
//         <div
//           className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
//           role="dialog"
//           aria-modal="true"
//           aria-labelledby="modal-headline"
//         >
//           <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//             <div className="sm:flex sm:items-start">
//               <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
//                 <svg
//                   className="h-6 w-6 text-red-600"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
//                   />
//                 </svg>
//               </div>
//               <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
//                 <h3
//                   className="text-lg leading-6 font-medium text-gray-900"
//                   id="modal-headline"
//                 >
//                   Deactivate account
//                 </h3>
//                 <div className="mt-2">
//                   <p className="text-sm text-gray-500">
//                     Are you sure you want to deactivate your account? All of
//                     your data will be permanently removed. This action cannot be
//                     undone.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//             <button
//               type="button"
//               className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
//             >
//               Deactivate
//             </button>
//             <button
//               type="button"
//               className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, {})(Profile);
