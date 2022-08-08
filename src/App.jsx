import LayoutMain from "./Layout/LayoutMain";
import Form from "./Components/Form/Form";
import Login from "./Components/Login/Login";
import Main from "./Components/Main/Main";
import RequireAuth from "./Components/RequiretAuth/RequireAuth";
import User from "./Components/User/User";
import Admin from "./Components/Admin/Admin";
import NotAuthorized from "./Components/NotAuthorized/NotAuthorized";
import { Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  const ROLES = {
    User: 2001,
    Editor: 1984,
    Admin: 5150,
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<Main />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="form" element={<Form />}></Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="user" element={<User />}></Route>
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="admin" element={<Admin />}></Route>
          </Route>
          <Route path="*" element={"404"}></Route>
          <Route path="error" element={<NotAuthorized />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
