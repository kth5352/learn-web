const InputGroupComponent = () => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Something clever.."
      />
      <div className="input-group-append">
        <button className="btn btn-primary" type="button">
          OK
        </button>
        <button className="btn btn-danger" type="button">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default InputGroupComponent;
