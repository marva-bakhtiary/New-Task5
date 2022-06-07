import React from "react";

const TotalBadge = ({ children }) => {
  return (
    <>
      <h2 className="ml-[20%] mt-1">Total</h2>
      <div
        data-testid="TotalBadge"
        className="text-center cyan text-4xl font-semibold"
      >
        {children}
      </div>
    </>
  );
};
export default TotalBadge;
