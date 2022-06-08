import React from "react";
import { Card as AntCard } from "antd";
import Tag from "../../Atoms/Tag/Tag";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import Input from "../../Atoms/Input/Input";
import TotalBadge from "../../Atoms/TotalBadge/TotalBadge";
import Modal from "../Modal/Modal";
const Card = () => {
  return (
    <>
      <h2 className="ml-20 mt-24 text-3xl">Total Balance</h2>
      <AntCard
        data-testid="CardID"
        className="w-4/12 h-80 rounded-lg ml-20"
        hoverable={true}
      >
        <Tag color="cyan" icon={<ArrowUpOutlined />}>
          incomes
        </Tag>
        <Tag color="error" icon={<ArrowDownOutlined />}>
          expenses
        </Tag>
        <Input />
        <TotalBadge>1,000,000</TotalBadge>
        <Modal />
      </AntCard>
    </>
  );
};
export default Card;
