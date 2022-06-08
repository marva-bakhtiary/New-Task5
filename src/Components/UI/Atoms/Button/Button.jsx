import React from "react";
import { Button as AntButton } from "antd";

const Button = ({ Click }) => {
  return (
    <AntButton
      onClick={Click}
      className="rounded-lg text-center mt-10 text-white"
      type="primary"
      size="middle"
      block={true}
    >
      Add Transaction
    </AntButton>
  );
};

export default Button;
