import { useContext } from "react";
import UserContext from "../../ContextFolder/ContextProvider";

function Profile(props) {
  const context = useContext(UserContext);
  console.log(context.mainState.myList);
  return (
    <div className="userProfile">
      <h1>Hello {context.mainState.userInfo.userName}!</h1>
      <div
        style={{
          borderBottom: "2px solid white",
          width: "90%",
          margin: "5px auto",
        }}
      ></div>
    </div>
  );
}

export default Profile;
