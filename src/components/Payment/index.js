import React from "react";
import "./payment.css";
import Stripe from "react-stripe-checkout";
import axios from "axios";

const Payment = (props) => {
  const { details, paymentSuccessCallback, paymentFailCallback, backTo } =
    props;

  const chargeToCustomer = async (amount, token) => {
    try {
      const { data } = await axios.post("http://localhost:5000/api/payment", {
        token: token.id,
        amount: details.amount,
        email: token.email,
      });
      console.log(data);
      alert("payment success");
      paymentSuccessCallback(data);
    } catch (err) {
      console.log(err);
      alert("payment failed");
      paymentFailCallback(err);
    }
  };

  const tokenHandler = (token) => {
    chargeToCustomer(100, token);
  };

  return (
    <div className="container">
      <p>Procede to pays ${details.amount}.</p>
      <Stripe
        stripeKey="pk_test_51MvWN9BtsxxE0hvz0vR9IpehpzUIhKLPOjn2Y2zP3cLYdAAKZsSV4UhetXWKnsNzoc5fEr1zgxpZB7pU4J9oXltB00z7UnZ8sI"
        token={tokenHandler}
      />
      <br />
      <button className="btn btn-secondary mt-2 w-100" onClick={backTo}>
        Back
      </button>
    </div>
  );
};

export default Payment;
