import LayoutMain from "../Layout/LayoutMain/LayoutMain";
import LayoutAuth from "../Layout/LayoutAuthorized/LayoutAuthorized";
import Form from "../Components/Form/Form";
import Login from "../Components/Login/Login";
import Main from "../Components/Main/Main";
import RequireAuth from "../Components/RequiretAuth/RequireAuth";
import User from "../Components/User/User";
import Admin from "../Components/Admin/Admin";
import NotAuthorized from "../Components/NotAuthorized/NotAuthorized";
import { Routes, Route } from "react-router-dom";
import ROLES from "../Roles/Roles";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<LayoutMain />}>
        <Route index element={<Main />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="form" element={<Form />}></Route>
      </Route>
      <Route path="*" element={"404"}></Route>
      <Route path="/" element={<LayoutAuth />}>
        <Route path="error" element={<NotAuthorized />}></Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.User.clave]} />}>
          <Route path={ROLES.User.url} element={<User />}></Route>
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin.clave]} />}>
          <Route path={ROLES.Admin.url} element={<Admin />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default Router;
