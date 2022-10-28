import React, { useState } from "react";
import "./styles.css";
import { HiUser, HiUserGroup } from "react-icons/hi";

const ThirdPage = (props) => {
  const [data, setData] = useState("Default");
  const [color, setColor] = useState("");
  const [color2, setColor2] = useState("");

  const onestfun = () => {
    setColor("#664de5");
    setColor2("");
  };

  const twofun = () => {
    setColor2("#664de5");
    setColor("");
  };

  return (
    <div className="App">
      <h1 className="welcometxt">How are you planning to use Eden?</h1>
      <p className="welcomep">
        We'll streamline your setup experience accordingly.
      </p>
      <div
        style={{
          display: "flex",
          // marginTop: "1rem",
          flexdirection: "column",
          justifyContent: "center"
        }}
      >
        <input
          readOnly
          onClick={() => {
            onestfun();
          }}
          className="Boxdiv"
        />
        <input
          readOnly
          onClick={() => {
            twofun();
          }}
          className="Boxdiv"
        />
      </div>
      <div
        onClick={() => {
          onestfun();
        }}
        className="firstDiv"
      >
        <HiUser className="emoj" color={color} fontSize="1.5rem" />
        <h4 className="bottomtxt">For myself</h4>
        <p className="bottomp">
          Write better. Think more clearly. stay organized.
        </p>
      </div>
      <div
        className="secDiv"
        onClick={() => {
          twofun();
        }}
      >
        <HiUserGroup className="emoj2" color={color2} fontSize="1.5rem" />
        <h4 className="bottomtxt">With my team</h4>
        <p className="bottomp">
          Wikis, docs, tasks & projects, all in one place.
        </p>
      </div>
      <div className="vmain">
        <button
          className="submit"
          onClick={() => {
            props.FourBtn();
          }}
        >
          <h4>Create Workspace</h4>
        </button>
      </div>
    </div>
  );
};

export default ThirdPage;
