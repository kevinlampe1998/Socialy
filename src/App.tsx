import { createContext, useEffect, useReducer } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import Profile from "./pages/Profile.tsx";
import AddFriend from "./pages/AddFriend.tsx";
import Settings from "./pages/Settings.tsx";

import AddFriendIcon from "./assets/svg/add-friend.svg";
import HomeIcon from "./assets/svg/home.svg";
import SearchIcon from "./assets/svg/search.svg";
import SquarePlusIcon from "./assets/svg/square-plus.svg";
import HeartIcon from "./assets/svg/heart.svg";
import UserIcon from "./assets/svg/user.svg";
import SettingsIcon from "./assets/svg/settings.svg";

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <header>
        <Link to="/add-friend"><img src={AddFriendIcon} alt="AddFriendIcon"  className="svg"/></Link>
        <h1>Socialy</h1>
        <Link to="/settings"><img src={SettingsIcon} alt="SettingsIcon"  className="svg"/></Link>
      </header>
      <Outlet />
      <nav>
        <Link to=""><img src={HomeIcon} alt="HomeIcon"  className="svg"/></Link>
        <Link to=""><img src={SearchIcon} alt="SearchIcon"  className="svg"/></Link>
        <Link to=""><img src={SquarePlusIcon} alt="SquarePlusIcon"  className="svg"/></Link>
        <Link to=""><img src={HeartIcon} alt="HeartIcon"  className="svg"/></Link>
        <Link to="/"><img src={UserIcon} alt="UserIcon"  className="svg"/></Link>
      </nav>
    </div>
  );
};

export const SocialyContext = createContext();

interface actionType {
  type: string,
  payload: string[]
}

const reducer = (state: string[], action: actionType): string[] => {

  if (action.type === "init") {
    return action.payload;
  }

  return state;
};

const App: React.FC = () => {
  const [picPaths, dispatch] = useReducer(reducer, [""]);

  const fetchData = async () => {
    const res = await fetch("/data/picPaths.txt");
    const json = await res.text();
    const data = JSON.parse(json);

    console.log(json);

    dispatch({ type: "init", payload: data });
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    console.log("picPaths", picPaths);
  });

  return (
    <SocialyContext.Provider value={{ picPaths, dispatch }} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Profile />} />
            <Route path="/add-friend" element={<AddFriend />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SocialyContext.Provider>
  )
}

export default App
