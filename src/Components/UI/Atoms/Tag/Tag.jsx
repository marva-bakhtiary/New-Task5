import React from "react";
import { Tag as AntTag } from "antd";
const Tag = ({ icon, color, children }) => {
  return (
    <AntTag
      data-testid="TagsID"
      className="rounded-lg w-20 h-7 text-center"
      icon={icon}
      color={color}
    >
      {children}
    </AntTag>
  );
};
export default Tag;
