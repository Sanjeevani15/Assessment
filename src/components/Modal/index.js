import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import aadhar from "../../images/aadhar.png";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const ModalTab = ({ setIsOpen, modalIsOpen, display, setDisplay }) => {
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
//   const [display, setDisplay] = useState(false);
  const [isChecked, setIsChecked] = useState(false);


  const handleAadhar = (e) => {
    e.preventDefault();
  };
  const handleVerify = (e) => {
    e.preventDefault();
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            position: "fixed",
            zIndex: "55",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            padding: !display ? "20px": '2px',
            width: "500px",
            height: !display ? '350px': '80px'
          },
        }}
      >
        {!display ? (
          <>
            <h2 className="text-lg font-bold text-gray-900 mb-2">
              Register Aadhar
            </h2>
            <hr />
            <div className="flex justify-between flex-row mt-4 w-full ">
              <img
                src={aadhar}
                alt="Nav logo"
                className="bg-white border border-blue-500 mr-2 h-[50px] outline-none"
              />

              <div className="flex flex-row justify-center w-full items-center">
                <form
                  onSubmit={handleAadhar}
                  className="flex flex-row w-full justify-center items-center gap-x-4"
                >
                  <input
                    type="number"
                    className="peer m-0 block h-[50px] appeareance-none w-full rounded-md border-2 border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 placeholder:text-gray-500 focus:border-primary   focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary"
                    id="floatingInput"
                    placeholder="12 digit Aadhar Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                  <button
                    disabled={number.length !== 12}
                    type="submit"
                    className="h-[50px] w-[150px] flex text-center items-center justify-center disabled:bg-gray-300 bg-blue-700 text-lg text-white"
                  >
                    Verify
                  </button>
                </form>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full items-center">
              <div>
                <div className="flex flex-row mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] ml-20 mt-4">
                  <input
                    className="h-4 w-4 border rounded-sm accent-primary-500 mt-1 align-top mr-2 cursor-pointer"
                    type="checkbox"
                    value={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                    id="checkboxDefault"
                  />
                  <label
                    class="inline-block pl-[0.15rem] hover:cursor-pointer text-gray-600"
                    for="checkboxDefault"
                  >
                    I agree to eSign this{" "}
                    <span className="underline">KYC document</span> to get
                    started
                  </label>
                </div>
                 
              </div>
              <form
                onSubmit={handleVerify}
                className="flex flex-row w-full justify-end items-center gap-x-4"
              >
                <input
                  type="number"
                  className="peer m-0 block h-[50px] w-[150px] appeareance-none rounded-md border-2 border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 placeholder:text-gray-500 focus:border-primary   focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary"
                  id="floatingInput"
                  placeholder="OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <button
                  disabled={otp.length !== 6 || !isChecked}
                  onClick={() => setDisplay(true)}
                  type="submit"
                  className="h-[50px] w-[150px] flex text-center items-center justify-center disabled:bg-gray-300 bg-blue-700 text-lg text-white"
                >
                  Submit
                </button>
              </form>
            </div>{" "}
          </>
        ) : (

          <div className="flex flex-row text-lg items-center text-center justify-center bg-green-200 gap-x-2">
            <IoIosCheckmarkCircleOutline className="text-[50px] text-green-400" />
            <p className="text-blue-500 text-center">Aadhar Verified Successfully</p>
          </div>
        )}
         
      </Modal>
    </div>
  );
};

export default ModalTab;
