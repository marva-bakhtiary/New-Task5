import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import Tag from "../../UI/Atoms/Tag/Tag";
import React from "react";
import Button from "../../UI/Atoms/Button/Button";
import Input from "../../UI/Atoms/Input/Input";
import TotalBadge from "../../UI/Atoms/TotalBadge/TotalBadge";
import InputsGroup from "../../UI/Molecules/InputsGroup/InputsGroup";

function Home() {
  return (
    <div>
      <Button />
      <Input />
      <Tag color="cyan" icon={<ArrowUpOutlined />}>
        incomes
      </Tag>
      <Tag color="error" icon={<ArrowDownOutlined />}>
        expenses
      </Tag>
      <TotalBadge>1,000,000</TotalBadge>
      <InputsGroup />
    </div>
  );
}

export default Home;
