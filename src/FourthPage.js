import React from "react";
import "./styles.css";
import { AiFillCheckCircle } from "react-icons/ai";

const FourthPage = () => {
  const handleSubmit = () => {
    console.log("Finish");
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          marginTop: "4rem",
          flexdirection: "column",
          justifyContent: "center"
        }}
      >
        <AiFillCheckCircle className="check" color="#664de5" fontSize="5rem" />
      </div>
      <h1 className="welcometxt">Congratulation, Eden?</h1>
      <p className="welcomep">
        We'll streamline your setup experience accordingly.
      </p>
      <button
        className="submit"
        onClick={() => {
          handleSubmit();
        }}
      >
        <h4>Create Workspace</h4>
      </button>
    </div>
  );
};

export default FourthPage;
