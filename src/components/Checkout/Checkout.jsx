import { useState } from "react";
import "./Checkout.css";

function Checkout({ insert }) {
  const min = 1;
  const max = 99;
  const [shopper, setShopper] = useState(min);

  const handleChange = (event) => {
    let val = event.target.value;
    setShopper(val);
  };

  const handleSubmit = () => {
    if (shopper) {
      insert(parseInt(shopper));
      setShopper(min);
    }
  };

  return (
    <div className="Checkout">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <input
          className="Number"
          type="number"
          min={min}
          max={max}
          value={shopper}
          onChange={(event) => handleChange(event)}
        />
        <input className="SubmitCheckout" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Checkout;
