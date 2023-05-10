import React, { useEffect, useState } from "react";
import pdfimage from "../images/pdfimage.jpeg";
import ModalTab from "./Modal";

const AadharPage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isSigned, setIsSigned] = useState(false);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (display == true) {
      const timer = setTimeout(() => {
        setIsSigned(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [display]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {display && (
        <div className="w-full fixed top-0 left-0 bg-white h-[80px] border">
          <div className="flex flex-col  mx-8 text-start">
            {isSigned ? (
              <p className="text-4xl">Signed</p>
            ) : (
              <p className="text-4xl">Signing...</p>
            )}
            <p className="text-blue-400">Mutual Not-Disclosure Agreement</p>
          </div>
        </div>
      )}
       
      <div className="flex flex-col justify-center items-center w-full">
        <div className="h-80vh overflow-auto">
          <img
            src={pdfimage}
            alt="Nav logo"
            className="bg-white border border-blue-500 mr-2 h-[650px]"
          />
        </div>
        <div className="w-full flex justify-center items-center ]">
          <button className="mt-4 h-[50px] w-[36%] items-center flex text-center justify-center disabled:bg-blue-300 bg-blue-700 text-lg text-white uppercase">
            Request OTP to Sign
          </button>
        </div>
        {modalIsOpen && (
          <ModalTab
            setIsOpen={setIsOpen}
            modalIsOpen={modalIsOpen}
            display={display}
            setDisplay={setDisplay}
          />
        )}
      </div>
    </>
  );
};

export default AadharPage;
