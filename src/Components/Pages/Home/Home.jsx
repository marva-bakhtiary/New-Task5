import { ArrowUpOutlined } from "@ant-design/icons";
import Tag from "../../UI/Atoms/Tag/Tag";
import React from "react";
import Button from "../../UI/Atoms/Button/Button";
import Input from "../../UI/Atoms/Input/Input";

function Home() {
  return (
    <div>
      <Button />
      <Input />
      <Tag color="green" icon={<ArrowUpOutlined />}>
        incomes
      </Tag>
    </div>
  );
}

export default Home;
