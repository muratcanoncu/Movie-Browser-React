import { useContext } from "react";
import UserContext from "../../ContextFolder/ContextProvider";
import MovieCard from "../MovieContainer/MovieCards/MovieCard";
function Profile(props) {
  const context = useContext(UserContext);
  console.log(context.mainState.myList);
  return (
    <div className="userProfile">
      <h1>Hello {context.mainState.userInfo.userName}!</h1>
    </div>
  );
}

export default Profile;
