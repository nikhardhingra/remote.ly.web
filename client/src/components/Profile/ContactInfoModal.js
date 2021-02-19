import React, { Component } from "react";
import { connect } from "react-redux";
import { updateContactInfo } from "../../store/actions/authActions";

class ContactInfoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      github: "",
      linkedin: "",
    };
  }
  componentDidMount() {
    this.setState({
      github: this.props.user.github || "",
      linkedin: this.props.user.linkedin || "",
    });
  }
  handleSubmit = async (e) => {
    await this.props.updateContactInfo({
      github: this.state.github,
      linkedin: this.state.linkedin,
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
                    Contact Info
                  </h3>
                  <div className="mt-2">
                    <label htmlFor="bio" className="block">
                      Github
                    </label>
                    <input
                      type="text"
                      value={this.state.github}
                      className="border rounded border-purple-500 w-full h-8"
                      onChange={(e) =>
                        this.setState({ github: e.target.value })
                      }
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="bio" className="block">
                      Linkedin
                    </label>
                    <input
                      type="text"
                      value={this.state.linkedin}
                      className="border rounded border-purple-500 w-full h-8"
                      onChange={(e) =>
                        this.setState({ linkedin: e.target.value })
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
                Update Contact Info
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
});

export default connect(mapStateToProps, { updateContactInfo })(
  ContactInfoModal
);
// export default AboutModal;
