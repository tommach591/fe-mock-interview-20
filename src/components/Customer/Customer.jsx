import "./Customer.css";

function Customer({ customer }) {
  return (
    <div className="Customer">
      <h1>{customer}</h1>
    </div>
  );
}

export default Customer;
