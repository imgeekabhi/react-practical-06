import React from "react";
import "../component/UserList.css";
export default function Owner() {
  return (
    <div className="eachItem owner-each-item ">
      <div className="profile-icon">
        <img src={`https://reqres.in/img/faces/2-image.jpg`} alt="img" />
      </div>
      <div className="list-text">
        <h3>Jana Strassmann</h3>
        <h4>batz.mortimer@yahoo.com</h4>
      </div>
      <div className="owner-detail">
        <div className="status text-success">
          <p>Active</p>
        </div>
        <div className="position">
          <p>Owner</p>
        </div>
        <i className="fas fa-lock" title="Delete Your Item"></i>
      </div>
    </div>
  );
}
