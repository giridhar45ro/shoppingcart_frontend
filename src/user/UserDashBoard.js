import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper/index";

const UserDash = () => {
  const {
    user: { name, email },
  } = isAuthenticated();

  return (
    <div className="card mb-4 bg-primary">
      <h4 className="card-header">User Information</h4>
      <ul className="list-group ">
        <li className="list-group-item text-dark bg-muted">
          <span className="badge bg-success mr-2">Name:</span> {name}
        </li>
        <li className="list-group-item text-dark bg-muted">
          <span className="badge bg-success mr-2">Email:</span> {email}
        </li>

        <li className="list-group-item">
          <span className="badge bg-danger">
            This is users Dash board!! Area
          </span>
        </li>
      </ul>
    </div>
  );
};

const UserDashBoard = () => {
  return <Base title="UserDashBoard page">{UserDash()}</Base>;
};

export default UserDashBoard;
