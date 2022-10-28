import React, { useEffect, useState } from "react";
import "./styles.css";

const FirstPage = (props) => {
  const [name, setName] = useState("");
  const [dispName, setDispName] = useState("");

  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      Name: name,
      DispName: dispName
    });
  }, [name, dispName]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    props.TwoBtn();
  };

  return (
    <div className="App">
      <h1 className="welcometxt">Welcome! First things first...</h1>
      <p className="welcomep">You can always change them later.</p>
      <form onSubmit={handleSubmit}>
        <div className="vmain">
          <label>Full Name</label>
          <input
            name="name"
            placeholder="Steve Jobs"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label>Display Name</label>
          <input
            type="text"
            name="dispName"
            placeholder="Steve"
            value={dispName}
            onChange={(e) => {
              setDispName(e.target.value);
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

export default FirstPage;
