import React from "react";
import { EditOutlined } from "@ant-design/icons";

import { Input as AntInput } from "antd";
const Input = () => {
  return (
    <>
      <h4 className="ml-[20%] mt-4">Initial</h4>
      <AntInput
        size="middle"
        data-testid="initial-input"
        className="rounded-lg w-56 ml-[30%]"
        maxLength={10}
        prefix={<EditOutlined />}
      />
    </>
  );
};
export default Input;
