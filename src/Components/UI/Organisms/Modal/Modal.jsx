import React, { useState } from "react";
import Button from "../../Atoms/Button/Button";
import { Modal as AntModal } from "antd";
import InputsGroup from "../../Molecules/InputsGroup/InputsGroup";
const Modal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const clickHandler = () => {
    setIsVisible(true);
  };
  const handleCancel = () => {
    setIsVisible(false);
  };
  const handleOk = () => {
    setIsVisible(false);
  };
  return (
    <div data-testid="ModalID">
      <Button Click={clickHandler} />

      <AntModal
        className="modalStyles"
        okText="Add"
        cancelText="Clear Values"
        visible={isVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h2 className="orange">Add New Transaction</h2>
        <InputsGroup />
      </AntModal>
    </div>
  );
};
export default Modal;
