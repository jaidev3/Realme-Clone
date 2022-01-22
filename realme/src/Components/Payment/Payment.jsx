import { useState } from "react";
import "./Payment.css";

export const Payment = () => {
  const [timer, setTimer] = useState(0);

  return (
    <>
      <div className="main">
        <div className="tracker">tracker</div>

        <div className="countdown">
          <div>
            <h3>Please complete payment within</h3>
            <h3>Amount: 13,999</h3>
          </div>
          <div>
            <div>
              <h3>Name: Sayak</h3>
              <h3>Address: bangalore</h3>
            </div>
            <div>
              <h3>Show Details -</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
