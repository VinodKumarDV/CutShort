import "./styles.css";
import { useState } from "react";
import Progressbar from "./Progress";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import logo from "./assets/logo.png"

const App = () => {
  const [data, setData] = useState(16);
  const [two, setTwo] = useState({});
  const [three, setThree] = useState({});
  const [four, setFour] = useState({});
  const [onePage, setOnePage] = useState(true);
  const [twoPage, setTwoPage] = useState(false);
  const [threePage, setThreePage] = useState(false);
  const [fourPage, setFourPage] = useState(false);

  const butclr = {
    backgroundColor: "#664de5",
    color: "white"
  };

  const TwoBtn = () => {
    setData(50)
    setTwo(butclr);
    setOnePage(false)
    setTwoPage(true)
  }

  const ThreeBtn = () => {
    setData(83)
    setThree(butclr);
    setTwoPage(false)
    setThreePage(true)
  }

  const FourBtn = () => {
    setData(100)
    setFour(butclr);
    setThreePage(false)
    setFourPage(true)
  }

  return (
    <div className="App">
      <div className="main">
        <h1><img src={logo}/> Eden</h1>
        <div className="mainCont">
          <Progressbar
            bgcolor="#664de5"
            progress={`${data}`}
            height={1}
            butclr={butclr}
            two={two}
            three={three}
            four={four}
          />
        </div>
        <div >
        {onePage ? <FirstPage TwoBtn={TwoBtn} /> : 
        twoPage ? <SecondPage ThreeBtn={ThreeBtn} /> : 
        threePage ? <ThirdPage FourBtn={FourBtn} /> : 
        fourPage? <FourthPage   /> : <></>}
        </div>
      </div>
    </div>
  );
};
export default App;
