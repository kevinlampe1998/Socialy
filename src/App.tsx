import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import Home from "./pages/Home.tsx";
import AddFriend from "./pages/AddFriend.tsx";
import Settings from "./pages/Settings.tsx";

import AddFriendIcon from "./assets/add-friend.svg";
import HomeIcon from "./assets/home.svg";
import SearchIcon from "./assets/search.svg";
import SquarePlusIcon from "./assets/square-plus.svg";
import HeartIcon from "./assets/heart.svg";
import UserIcon from "./assets/user.svg";
import SettingsIcon from "./assets/settings.svg";



const Layout: React.FC = () => {
  return (
    <div>
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
        <Link to=""><img src={UserIcon} alt="UserIcon"  className="svg"/></Link>
      </nav>
    </div>
  );
};

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/add-friend" element={<AddFriend />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
