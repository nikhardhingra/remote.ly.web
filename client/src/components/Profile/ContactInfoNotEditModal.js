import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

class ContactInfoNotEditModal extends Component {
  state = {
    githubCopied: false,
    linkedinCopied: false,
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
                  {this.state.githubCopied && (
                    <div
                      className="bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3 mt-2"
                      role="alert"
                    >
                      <p class="font-bold">Github URL Copied!</p>
                    </div>
                  )}
                  {this.state.linkedinCopied && (
                    <div
                      className="bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3 mt-2"
                      role="alert"
                    >
                      <p class="font-bold">Linkedin URL Copied!</p>
                    </div>
                  )}
                  <div className="mt-2">
                    <label htmlFor="bio" className="block">
                      Github
                    </label>
                    <input
                      type="text"
                      value={this.props.github}
                      disabled={true}
                      className="border rounded border-purple-500 w-full h-8"
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="bio" className="block">
                      Linkedin
                    </label>
                    <input
                      value={this.props.linkedin}
                      type="text"
                      disabled={true}
                      className="border rounded border-purple-500 w-full h-8"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={this.props.toggleModal}
              >
                Close
              </button>
              <CopyToClipboard
                text={this.props.github}
                onCopy={() => this.setState({ githubCopied: true })}
              >
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Copy Github URL
                </button>
              </CopyToClipboard>
              <CopyToClipboard
                text={this.props.linkedin}
                onCopy={() => this.setState({ linkedinCopied: true })}
              >
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Copy Linkedin URL
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfoNotEditModal;
