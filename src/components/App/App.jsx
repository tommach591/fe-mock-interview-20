import { useCallback, useState } from "react";
import Checkout from "../Checkout";
import Line from "../Line";
import "./App.css";

function App() {
  const [checkoutOne, setCheckoutOne] = useState([]);
  const [checkoutTwo, setCheckoutTwo] = useState([]);
  const [checkoutThree, setCheckoutThree] = useState([]);
  const [checkoutFour, setCheckoutFour] = useState([]);
  const [checkoutFive, setCheckoutFive] = useState([]);

  let sum = (arr) => {
    return arr.reduce((partialSum, i) => partialSum + i, 0);
  };

  const insert = useCallback(
    (nextShopper) => {
      let lineLengths = [
        sum(checkoutOne),
        sum(checkoutTwo),
        sum(checkoutThree),
        sum(checkoutFour),
        sum(checkoutFive),
      ];

      let shortest = 0;
      for (let i = 1; i < lineLengths.length; i++)
        if (lineLengths[i] < lineLengths[shortest]) {
          shortest = i;
          if (shortest === 0) break;
        }

      switch (shortest) {
        case 0:
          setCheckoutOne([...checkoutOne, nextShopper]);
          break;
        case 1:
          setCheckoutTwo([...checkoutTwo, nextShopper]);
          break;
        case 2:
          setCheckoutThree([...checkoutThree, nextShopper]);
          break;
        case 3:
          setCheckoutFour([...checkoutFour, nextShopper]);
          break;
        default:
          setCheckoutFive([...checkoutFive, nextShopper]);
          break;
      }
    },
    [checkoutOne, checkoutTwo, checkoutThree, checkoutFour, checkoutFive]
  );

  return (
    <div className="App">
      <Checkout insert={insert} />
      <div className="CashRegisters">
        <Line line={checkoutOne} setLine={setCheckoutOne} />
        <Line line={checkoutTwo} setLine={setCheckoutTwo} />
        <Line line={checkoutThree} setLine={setCheckoutThree} />
        <Line line={checkoutFour} setLine={setCheckoutFour} />
        <Line line={checkoutFive} setLine={setCheckoutFive} />
      </div>
    </div>
  );
}

export default App;
