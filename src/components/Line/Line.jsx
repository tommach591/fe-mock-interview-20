import { useEffect } from "react";
import Customer from "../Customer";
import "./Line.css";

function Line({ line, setLine }) {
  useEffect(() => {
    if (line.length > 0) {
      const interval = setInterval(() => {
        let newLine = [...line];

        if (newLine.length > 0) {
          newLine[0]--;
          if (newLine[0] === 0) newLine.shift();
        }

        setLine(newLine);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [line, setLine]);

  return (
    <div className="Line">
      <div className="Cashier">
        <h1>Cashier</h1>
      </div>
      {line.map((customer, i) => {
        return <Customer key={i} customer={customer} />;
      })}
    </div>
  );
}

export default Line;
