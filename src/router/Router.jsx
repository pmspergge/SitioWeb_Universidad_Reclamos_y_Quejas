import LayoutMain from "../Layout/LayoutMain/LayoutMain";
import Form from "../Components/Form/Form";
import Login from "../Components/Login/Login";
import Main from "../Components/Main/Main";
import RequireAuth from "../Components/RequiretAuth/RequireAuth";
import NotAuthorized from "../Components/NotAuthorized/NotAuthorized";
import { Routes, Route } from "react-router-dom";
import ROLES from "../Roles/Roles";
import PersistLogin from "../Persistence/PersistLogin";
import Page_404 from "../Components/Pages/Page_404";
// routes user
import LayoutUser from "../Layout/LayoutLogged/LayoutUser";
import PrincipalUser from "../ViewsLogged/ViewsUser/PrincipalUser";
import ReclamosAdmin from "../ViewsLogged/ViewsAdmin/ReclamosAdmin";
import QuejasAdmin from "../ViewsLogged/ViewsAdmin/QuejasAdmin";
// routes admin
import LayoutAdmin from "../Layout/LayoutLogged/LayoutAdmin/LayoutAdmin";
import PrincipalAdmin from "../ViewsLogged/ViewsAdmin/PrincipalAdmin";
import QuejasUser from "../ViewsLogged/ViewsUser/QuejasUser";
import ReclamosUser from "../ViewsLogged/ViewsUser/ReclamosUser";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LayoutMain />}>
        <Route index element={<Main />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="form" element={<Form />}></Route>
      </Route>
      <Route path="*" element={<Page_404 />}></Route>
      {/* Protected Routes */}
      {/* user */}
      <Route element={<PersistLogin />}>
        <Route element={<RequireAuth allowedRoles={[ROLES.User.clave]} />}>
          <Route path={ROLES.User.url} element={<LayoutUser />}>
            <Route path="" element={<PrincipalUser />}></Route>
            <Route path="reclamos" element={<ReclamosUser />}></Route>
            <Route path="quejas" element={<QuejasUser />}></Route>
          </Route>
        </Route>
        {/* admin */}
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin.clave]} />}>
          <Route path={ROLES.Admin.url} element={<LayoutAdmin />}>
            <Route path="" element={<PrincipalAdmin />}></Route>
            <Route path="reclamos" element={<ReclamosAdmin />}></Route>
            <Route path="quejas" element={<QuejasAdmin />}></Route>
          </Route>
        </Route>
        <Route path="notAuthorized" element={<NotAuthorized />}></Route>
      </Route>
    </Routes>
  );
}

export default Router;
