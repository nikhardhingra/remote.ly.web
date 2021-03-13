import React, { Component } from "react";
import { connect } from "react-redux";
import { resetPassword } from "../../store/actions/authActions";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      error: "",
    };
  }
  handleSubmit = async (e) => {
    await this.props.resetPassword({
      oldPassword: this.state.currentPassword,
      newPassword: this.state.newPassword,
    });
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
                    Change Password
                  </h3>
                  {this.state.error && (
                    <p className="text-red-500">{this.state.error}</p>
                  )}
                  <div className="mt-2">
                    <label htmlFor="bio" className="block">
                      Current Password
                    </label>
                    <input
                      type="password"
                      value={this.state.currentPassword}
                      className="border rounded border-purple-500 w-full h-8"
                      onChange={(e) =>
                        this.setState({ currentPassword: e.target.value })
                      }
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="bio" className="block">
                      New Password
                    </label>
                    <input
                      type="password"
                      value={this.state.newPassword}
                      className="border rounded border-purple-500 w-full h-8"
                      onChange={(e) =>
                        this.setState({ newPassword: e.target.value })
                      }
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="bio" className="block">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      value={this.state.confirmPassword}
                      className="border rounded border-purple-500 w-full h-8"
                      onChange={(e) => {
                        this.setState({ confirmPassword: e.target.value });
                        if (e.target.value !== this.state.newPassword) {
                          this.setState({
                            error: "Passwords do not match",
                          });
                        } else {
                          this.setState({
                            error: "",
                          });
                        }
                      }}
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
                Reset Password
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={this.props.toggleModal}
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
  user: state.auth.user,
  changePasswordError: state.auth.changePasswordError,
});

export default connect(mapStateToProps, { resetPassword })(ResetPassword);
// export default AboutModal;
