import { React, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { checkmode } from "../../utils/helpers/mode/checkmode";
import Loader from "../../components/loaders/Loader";

//main pages importation
const __main__ = lazy(() => import("../../pages/main/Main"));
const __main_Home__ = lazy(() => import("../../pages/main/content/Home/Home"));
const __main_About__ = lazy(() =>
  import("../../pages/main/content/About/About")
);
const __main_visite__ = lazy(() =>
  import("../../pages/main/content/nousVisiter/VIsite")
);

//Dashboard importation
const __dashboard__ = lazy(() => import("../../pages/dashboard/Dashboard"));
const __dashboard_Home__ = lazy(() =>
  import("../../pages/dashboard/content/Home/Home")
);

//login and sign in
const __SIGN__ = lazy(() => import("../../pages/auth/index"));
const __SIGN__IN__ = lazy(() => import("../../pages/auth/signIn/SignIn"));
const __SIGN__UP__ = lazy(() => import("../../pages/auth/signUp/SignUp"));

const RouteConfig = () => {
  // checkmode();
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* home routes   */}
        <Route path="/" element={<__main__ />}>
          <Route index={true} element={<__main_Home__ />} />
          <Route path="abouts" element={<__main_About__ />} />
          <Route path="visite" element={<__main_visite__ />} />
        </Route>

        {/* Dashboard */}
        <Route path="/dashboard" element={<__dashboard__ />}>
          <Route index element={<__dashboard_Home__ />} />
        </Route>

        {/* athentification routes */}
        <Route path="/sign" element={<__SIGN__ />}>
          <Route path="signIn" element={<__SIGN__IN__ />} />
          <Route path="signUp" element={<__SIGN__UP__ />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RouteConfig;
