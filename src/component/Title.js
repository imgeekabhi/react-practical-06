import React from "react";
import "../component/UserList.css";
export default function Title() {
  return (
    <div className="title">
      <div className="name">
        <p>Name</p>
      </div>
      <div className="sts">
        <p>Status</p>
      </div>
      <div className="access">
        <p>Access</p>
      </div>
    </div>
  );
}
