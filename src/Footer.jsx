import React from "react";

function Footer() {
  const date = new Date();
  const now = date.getHours();
  const openingTime = 9;
  const closingTime = 18;

  if (now < openingTime || now >= closingTime) {
    const hoursUntilOpen = openingTime - now;

    return (
      <div className="order">
        <p>
          We're closed. Kindly visit us between {openingTime}:00 to{" "}
          {closingTime}:00.
          {hoursUntilOpen > 0
            ? ` That will be in ${hoursUntilOpen} hour${
                hoursUntilOpen > 1 ? "s" : ""
              }.`
            : ` We will reopen tomorrow at ${openingTime}:00.`}
        </p>
        {/* Button for closed state */}
        <button className="btn" disabled>
          Order
        </button>
      </div>
    );
  }

  return (
    <div className="order">
      <p>
        We're open from {openingTime}:00 to {closingTime}:00. Come visit us
        during this time!
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export default Footer;
