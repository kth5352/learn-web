const TodoListComponent = () => {
  return (
    <div>
      <table id="todoListTbl" className="table table-hover">
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>Confirm</th>
            <th>Title</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox"></input>
            </td>
            <td>미니프로젝트 만들기</td>
            <td>
              <button className="btn btn-danger" type="button">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TodoListComponent;
