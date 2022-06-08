import { DatePicker, Select } from "antd";
import React from "react";
import { Input } from "antd";
import TextArea from "antd/lib/input/TextArea";

const { Option } = Select;
const Options = [
  {
    value: "Transition",
    id: 1,
  },
  {
    value: "Study",
    id: 2,
  },
  {
    value: "Clothes",
    id: 3,
  },
  {
    value: "Salary",
    id: 4,
  },
  {
    value: "Food",
    id: 5,
  },
  {
    value: "Housing",
    id: 6,
  },
  {
    value: "Utilities",
    id: 7,
  },
  {
    value: "Investing",
    id: 8,
  },
  {
    value: "Medical",
    id: 9,
  },
  {
    value: "Insurance",
    id: 10,
  },
  {
    value: "Loan",
    id: 11,
  },
];
const InputsGroup = () => {
  return (
    <div data-testid="input-group">
      <label className="cyan font-medium" data-testid="type-label">
        Type
      </label>
      <Select
        data-testid="type-input"
        className="w-full mb-5"
        placeholder="Type"
      >
        <Option value="expense">Expense</Option>
        <Option value="income">Income</Option>
      </Select>
      <label data-testid="amount-label" className="cyan font-medium">
        Amount
      </label>
      <Input
        data-testid="amount-input"
        className="w-full mb-5"
        defaultValue={0}
        prefix="$"
      />
      <label data-testid="note-label" className="cyan font-medium">
        Note
      </label>
      <TextArea data-testid="note-input" placeholder="Note" rows={2} />
      <label data-testid="date-label" className="cyan font-medium mt-5">
        Date
      </label>
      <DatePicker
        data-testid="date-input"
        placeholder="Date"
        className="w-full mb-5"
      />
      <label data-testid="category-label" className="cyan font-medium">
        Category
      </label>
      <Select
        data-testid="category-input"
        placeholder="Category"
        className="w-full mb-5"
      >
        {Options.map((option) => (
          <Option key={option.id} value={option.value}>
            {option.value}
          </Option>
        ))}
      </Select>
    </div>
  );
};
export default InputsGroup;
