import React from "react";
import { Link } from "react-router-dom";

const PartFModal = (props) => {
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
          className="inline-block relative align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full relative">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  Part F: Haply Board Installation
                </h3>
                <div className="text-center w-full mt-4">
                  <img
                    className="m-auto mb-4"
                    src={require("../../assets/images/3 1.png")}
                    alt=""
                  />
                  <img
                    className="m-auto"
                    src={require("../../assets/images/4 1.png")}
                    alt=""
                  />
                </div>
                <div className="text mt-4 border rounded border-purple-500 p-6">
                  <ol>
                    <li>
                      1. Connect the dev board extension wires to the Haply
                      board as shown in the picture.
                    </li>
                    <li>
                      2. Attach the dev board extension wires as pictured. This
                      will ensure correct function of the Haply software.
                    </li>
                  </ol>
                </div>
                <a
                  className="absolute top-1/2 left-4 cursor-pointer"
                  onClick={() => {
                    props.toggleModal();
                    props.prevModal();
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
                        class="fas fa-arrow-left absolute text-white"
                        style={{
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      ></i>
                    </a>
                  </div>
                </a>
                <a
                  className="absolute top-1/2 right-4 cursor-pointer"
                  onClick={() => {
                    props.toggleModal();
                    props.nextModal();
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
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={props.toggleModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartFModal;