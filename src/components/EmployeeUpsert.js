import { useState } from "react";
import { createEmployeeAction } from "../actions/Action";
import { useDispatch, useSelector } from "react-redux";
//import { useHistory, useLocation } from "react-router-dom";

export const EmployeeUpsert = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  // const history = useHistory();

  const [successOperation, setSuccessOperation] = useState(false);

  const [userName, setUserName] = useState([""]);
  const [userEmail, setUserEmail] = useState([""]);
  const [userPassword, setUserPassword] = useState([""]);

  const updateUserName = (e) => setUserName(e.target.value);
  const updateUserEmail = (e) => setUserEmail(e.target.value);
  const updateUserPassword = (e) => setUserPassword(e.target.value);

  const save = (e) => {
    e.preventDefault(); // prevents the page from getting refreshed.
    dispatch(createEmployeeAction({ userName, userEmail, userPassword }));

    //displaying the message on success.
    setSuccessOperation(true);
    //this will remove the message after  specific interval
    setTimeout(() => setSuccessOperation(false), 2000);

    //location..move to another page...after push is the url of the page to get refered to.
    //  history.push("/employeelist");

    //reseting the input bar.
    setUserName("");
    setUserPassword("");
    setUserEmail("");
  };

  return (
    <div classname="row">
      <div className=" col-3 col-md-2 d-none d-md-block"></div>
      <div className="col-12 col-md-8">
        <h3 className="alert alert-secondary">Create Employee</h3>

        {/**{parameterName &&} this is used for if condition in JSX */}
        {successOperation && (
          <div className="alert alert-success">Operation Success</div>
        )}

        <div className="mb-1">
          <input
            type="text"
            className="form-control"
            value={userName}
            onChange={(e) => updateUserName(e)}
            placeholder="Enter username"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            className="form-control"
            value={userPassword}
            onChange={(e) => updateUserPassword(e)}
            placeholder="Enter mobile number"
          />
        </div>

        <div className="mb-1">
          <input
            type="email"
            className="form-control"
            value={userEmail}
            onChange={(e) => updateUserEmail(e)}
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-1">
          <input
            type="button"
            className="form-control bg-dark text-light"
            value="Add Employee"
            onClick={(e) => save(e)}
          />
        </div>
      </div>
      <div className="col-3 col-md-2 d-none d-md-block"></div>
    </div>
  );
};
