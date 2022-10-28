import React, { useEffect, useState } from "react";
import "./styles.css";

const SecondPage = (props) => {
  const [web, setWeb] = useState("");
  const [name, setName] = useState("");

  const [localData, setLocalData] = useState({});

  useEffect(() => {
    setLocalData({
      Web: web,
      Name: name
    });
  }, [web, name]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(localData);
    props.ThreeBtn();
  };

  return (
    <div className="App">
      <h1 className="welcometxt">Let's set up a home for all your work</h1>
      <p className="welcomep">You can always create another Workspace later.</p>
      <form onSubmit={handleSubmit}>
        <div className="vmain">
          <label>Workspace Name</label>
          <input
            name="name"
            placeholder="Edin"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label className="url">
            Workspace URL<p className="opt">(optional)</p>
          </label>
          <p className="webExp">www.eden.com/</p>
          <input
            className="input"
            type="text"
            name="web"
            placeholder="Exapmple"
            value={web}
            onChange={(e) => {
              setWeb(e.target.value);
            }}
          />
          <button className="submit" type="submit">
            <h4>Create Workspace</h4>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SecondPage;
