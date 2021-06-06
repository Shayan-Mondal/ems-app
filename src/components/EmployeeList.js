import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  deleteEmployeeAction,
  getAllEmployeeAction,
  updateEmployeeAction,
} from "../actions/Action";

export const EmployeeList = () => {
  const state = useSelector((state) => state);
  //console.log(state);
  const dispatch = useDispatch();
  const history = useHistory();

  //Displaying data from backend
  useEffect(() => {
    dispatch(getAllEmployeeAction());
  }, []);

  const deleteEmployee = (item, index) => {
    //dispatch(deleteEmployeeAction(index));
    dispatch(deleteEmployeeAction(item));
  };

  const updateEmployee = (item) => {
    // we are doing this so that we can access this objec in the form page
    dispatch(updateEmployeeAction(item));

    // form page
    history.push("/employeeupsert");
  };

  return (
    <div className="row">
      <div className=" col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6 ">
        <h3 className="alert alert-secondary">Employee List</h3>

        <table class="table">
          <thead class="table-dark">
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">USERNAME</th>
              <th scope="col">PASSWORD</th>
              <th scope="col">EMAIL</th>
              <th scope="col">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {state.employee.list.map((item, index) => (
              <tr key={index}>
                {/**<th scope="row">{index + 1}</th> */}
                <th scope="row">{item.id}</th>
                <td>{item.userName}</td>
                <td>{item.userPassword}</td>
                <td>{item.userEmail}</td>
                <input
                  type="button"
                  onClick={() => updateEmployee(item)}
                  value="Edit"
                  className="btn btn-link"
                />{" "}
                <input
                  type="button"
                  value="Delete"
                  onClick={() => deleteEmployee(item, index)}
                  className="btn btn-link text-danger"
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col-3 col-md-3 d-none d-md-block"></div>
    </div>
  );
};
