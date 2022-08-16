import LayoutMain from "../Layout/LayoutMain/LayoutMain";
import Form from "../Components/Form/Form";
import Login from "../Components/Login/Login";
import Main from "../Components/Main/Main";
import RequireAuth from "../Components/RequiretAuth/RequireAuth";
import User from "../Components/User/User";
import Admin from "../Components/Admin/Admin";
import Unauthorized from "../Components/NotAuthorized/Unauthorized";
import { Routes, Route } from "react-router-dom";
import ROLES from "../Roles/Roles";
import PersistLogin from "../Persistence/PersistLogin";
import Page_404 from "../Components/Pages/Page_404";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<LayoutMain />}>
        <Route index element={<Main />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="form" element={<Form />}></Route>
        <Route path="*" element={<Page_404 />}></Route>
      </Route>

      <Route path="/" element={<PersistLogin />}>
        <Route element={<RequireAuth allowedRoles={[ROLES.User.clave]} />}>
          <Route path={ROLES.User.url} element={<User />}></Route>
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin.clave]} />}>
          <Route path={ROLES.Admin.url} element={<Admin />}></Route>
        </Route>
        <Route path="unauthorized" element={<Unauthorized />}></Route>
      </Route>
    </Routes>
  );
}

export default Router;
