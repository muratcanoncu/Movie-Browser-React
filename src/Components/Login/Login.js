import { useContext, useState } from "react";
import UserContext from "../../ContextFolder/ContextProvider";
function Login() {
  const [userInfo, setUserInfo] = useState({ userName: "", password: "" });
  const context = useContext(UserContext);
  const loginHandler = (dispatch) => {
    if (userInfo.password.length >= 6 && userInfo.userName.length > 0) {
      dispatch({
        type: "USER_LOGIN",
        payload: userInfo,
      });
    } else {
      alert("Please fill out the required areas!");
    }
  };
  return (
    <div className="login d-flex justify-content-center align-items-center flex-column">
      <h1
        style={{
          color: "#e50914",
          marginBottom: "100px",
          width: "370px",
          textAlign: "center",
          fontSize: "3.4rem",
        }}
      >
        Welcome to <span style={{ fontSize: "4.2rem" }}>FETCHFLIX</span>
      </h1>
      <div className="loginBox">
        <div>
          <label htmlFor="userName">USERNAME</label>
          <input
            id="userName"
            type="text"
            placeholder="John Doe"
            value={userInfo.userName}
            onChange={(e) =>
              setUserInfo({ ...userInfo, userName: e.target.value })
            }
          ></input>
          <label htmlFor="password">PASSWORD</label>
          <input
            id="password"
            type="password"
            minLength="6"
            maxLength="20"
            value={userInfo.password}
            onChange={(e) =>
              setUserInfo({ ...userInfo, password: e.target.value })
            }
            placeholder="Password must be at least 6 character"
          ></input>
        </div>
        <button onClick={() => loginHandler(context.myDispatch)}>LOGIN</button>
      </div>
    </div>
  );
}

export default Login;
