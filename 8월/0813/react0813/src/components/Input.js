import React from "react";

const InputGroupComponent = ({ appendItem }) => {
  const [inputValue, setInputValue] = React.useState("");
  return (
    <div className="input-group mb-3">
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        type="text"
        className="form-control"
        placeholder="할 일 추가"
      />
      <div className="input-group-append">
        <button
          onClick={() => {
            appendItem(inputValue);
            setInputValue("");
          }}
          className="btn btn-primary"
          type="button"
        >
          OK
        </button>
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => {
            setInputValue("");
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default InputGroupComponent;
