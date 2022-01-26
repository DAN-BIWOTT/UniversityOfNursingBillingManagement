import React, { useState, useRef, useEffect } from "react";
import { loadScript } from "@paypal/paypal-js";

const CheckOutButton = ({ product }) => {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  let paypalRef = useRef();

  useEffect(() => {
    // spa
    loadScript({
      "client-id":
        "AQP_VPBm-4CZt3KdeLwPgLteVwNtYC_LU2kZqyJ0LGL8VVukWUoxGV1ms0BVLSvl2PiDHnIar5CmWG2r",
    })
      .then((paypal) => {
        // start to use the PayPal JS SDK script
        paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: product.title,
                    amount: {
                      currency_code: "USD",
                      value: 100,
                    },
                  },
                ],
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              setPaidFor(true);
              console.log("saving transaction");
            },
            onError: (err) => {
              setError(err);
              console.error(err);
            },
          })
          .render(paypalRef.current);
      })
      .catch((err) => {
        console.error("failed to load the PayPal JS SDK script", err);
      });
    // end spa
  }, []);

  if (paidFor) {
    return (
      <div>
        <h1 style={{color:"green"}}>🎉Your Yearly Subscription in ready.🎉</h1>
      </div>
    );
  } else
    return (
      <div>
        {error && (
          <div>Uh oh, an error occurred, Contact Admin! {error.message}</div>
        )}
        <div ref={paypalRef} />
      </div>
    );
};

export default CheckOutButton;