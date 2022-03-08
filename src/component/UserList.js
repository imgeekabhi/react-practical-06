// hello
import React, { useState, useEffect } from "react";
import { getUser } from "../Redux/Action/Action";
import { useSelector, useDispatch } from "react-redux";
import Title from "./Title";
import Owner from "./Owner";
import "../component/UserList.css";
import "../component/UserCard.css";
const UserList = () => {
  const [PersonFirstName, setPersonFirstName] = useState("Jana");
  const [PersonLastName, setPersonLastName] = useState("Strassmann");
  const [avatar, setAvatar] = useState(
    "https://reqres.in/img/faces/1-image.jpg"
  );
  const [personEmail, setPersonEmail] = useState("batz.mortimer@yahoo.com");
  const [pageNum, setPageNum] = useState(1);

  const onHoverChange = (data, i) => {
    setPersonFirstName(data.first_name);
    setPersonLastName(data.last_name);
    setPersonEmail(data.email);
    setAvatar(data.avatar);
  };
  const dispatch = useDispatch();
  const fetchingData = useSelector((state) => state.reducer.userData);
  const loading = useSelector((state) => state.reducer.loading);

  useEffect(() => {
    dispatch(getUser(pageNum));
  }, [pageNum, dispatch]);
  return (
    <>
      <div className="main-div">
        <div className="card">
          <div className="child-div">
            <Title />
            <div className="showItems">
              <Owner />

              {/* -------each element start-------*/}
              {loading || !fetchingData ? (
                <h3>Loading</h3>
              ) : (
                fetchingData.map((data, i) => (
                  <div
                    className="eachItem"
                    onMouseEnter={() => {
                      onHoverChange(data, i);
                    }}
                  >
                    <div className="profile-icon">
                      <img src={`${data.avatar}`} alt="img" />
                    </div>
                    <div className="list-text">
                      <h3>{`${data.first_name} ${data.last_name}`}</h3>
                      <h4>{data.email}</h4>
                    </div>

                    <div className="user-btn">
                      <div className="dropdown-btn">
                        <select>
                          <option value="Active">Active</option>
                          <option value="Inactive">InActive</option>
                        </select>
                      </div>
                      <div className="dropdown-btn-2">
                        <select>
                          <option value="Manager">Active</option>
                          <option value="Read">InActive</option>
                        </select>
                      </div>
                      <i
                        className="far fa-trash-alt add-btn"
                        title="Delete Your Item"
                      ></i>
                    </div>
                  </div>
                ))
              )}

              {/* ----------each element end--------- */}
              {/* ----------pagination-btn code start--------- */}

              <div aria-label="Page navigation example">
                <ul className="pagination pagination-btn justify-content-center">
                  <li className="page-item">
                    <span
                      className="page-link"
                      onClick={() => {
                        setPageNum(1);
                      }}
                    >
                      Previous
                    </span>
                  </li>
                  <li className="page-item">
                    <span
                      className="page-link"
                      onClick={() => {
                        setPageNum(1);
                      }}
                    >
                      1
                    </span>
                  </li>
                  <li className="page-item">
                    <span
                      className="page-link"
                      onClick={() => {
                        setPageNum(2);
                      }}
                    >
                      2
                    </span>
                  </li>
                  <li className="page-item">
                    <span
                      className="page-link"
                      onClick={() => {
                        setPageNum(2);
                      }}
                    >
                      Next
                    </span>
                  </li>
                </ul>
              </div>
              {/* ----------pagination-btn code end--------- */}
            </div>
          </div>
        </div>
        {/* -------card start--------- */}
        <div className="card user-card">
          <div className="card-body card-contain">
            <div className="profile-icon">
              <img src={`${avatar}`} alt="img" />
            </div>
            <h3>{`${PersonFirstName} ${PersonLastName}`}</h3>
            <p className="email">{personEmail}</p>
            <h2 className="plan">Your Plan : Standard</h2>
            <button type="button" className="btn " disabled={true}>
              Active User
            </button>
            <p className="plan-uses">Plan Uses</p>
            <div className="parent-bar">
              <div className="child-bar progress"></div>
            </div>
            <div className="bottom-section d-flex justify-content-around">
              <div className="clicks-reviewed">
                <h1>2450</h1>
                <p>clicks reviewed</p>
              </div>
              <div className="vl"></div>
              <div className="monthly-clicks">
                <h1>5000</h1>
                <p>monthly clicks</p>
              </div>
            </div>
          </div>
        </div>
        {/* -------card end--------- */}
      </div>
    </>
  );
};
export default UserList;
