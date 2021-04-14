import { useContext } from "react";
import UserContext from "../../ContextFolder/ContextProvider";
function Login() {
  const context = useContext(UserContext);
  console.log(context.mainState);
  const loginHandler = (dispatch) => {
    dispatch({
      type: "USER_LOGIN",
    });
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div>
        <div>
          <input type="text" placeholder="John Doe"></input>
          <input
            type="password"
            minLength="6"
            maxLength="20"
            placeholder="Password must be at least 6 character"
          ></input>
        </div>
        <button onClick={() => loginHandler(context.myDispatch)}>LOGIN</button>
      </div>
    </div>
  );
}

export default Login;
