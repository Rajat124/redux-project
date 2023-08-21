import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";

function App() {
  const isloggedIn = useSelector((state) => state.auth.isUserLoggedIn);

  return (
    <Fragment>
      <Header />
      {!isloggedIn ? <Auth /> : <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
