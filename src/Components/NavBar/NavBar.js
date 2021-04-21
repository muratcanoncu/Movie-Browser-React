import { useContext } from "react";
import UserContext from "../../ContextFolder/ContextProvider";
import { NavLink } from "react-router-dom";

function NavBar() {
  const context = useContext(UserContext);
  console.log(context.mainState.userInfo.myList.length);
  const signOutHandler = (dispatch) => {
    dispatch({
      type: "USER_SIGNOUT",
    });
  };
  return (
    <nav className="d-flex justify-content-between align-items-center w-100">
      <NavLink to="/" replace>
        <h1>FETCHFLIX</h1>
      </NavLink>
      <div className=" middleMenu d-flex justify-content-between w-25">
        <NavLink to="/profile" replace>
          <h4>Profile</h4>
        </NavLink>
        <NavLink to="mylist" replace>
          <h4>My List</h4>
        </NavLink>
        <NavLink to="/aboutus" replace>
          <h4>About Us</h4>
        </NavLink>
      </div>
      <div className="d-flex align-items-center">
        <h3 style={{ color: "white" }} className="font-weight-bolder">
          List {context.mainState.userInfo.myList.length}
        </h3>
        <h4
          className="signOut ml-4"
          onClick={() => signOutHandler(context.myDispatch)}
        >
          Sign Out
        </h4>
      </div>
    </nav>
  );
}

export default NavBar;
