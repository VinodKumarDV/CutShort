import React from "react";

const Progress_bar = ({
  bgcolor,
  progress,
  height,
  butclr,
  two,
  three,
  four
}) => {
  const Parentdiv = {
    height: height,
    marginbottom: "1",
    width: "33%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    zIndex: -1
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right",
    transition: "2s"
  };

  return (
    <>
      <div className="progressbar" style={Parentdiv}>
        <div style={Childdiv}></div>
      </div>

      <div className={"btnCnt"}>
        <button style={butclr} className="btn">
          1
        </button>
        <button style={two} className="btn">
          2
        </button>
        <button style={three} className="btn">
          3
        </button>
        <button style={four} className="btn">
          4
        </button>
      </div>
    </>
  );
};

export default Progress_bar;
