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

//loyer
const __LOYERS__ = lazy(() => import("../../pages/loyer/Loyer"));
const __LOYERS__AUTRES__ = lazy(() =>
  import("../../pages/loyer/content/Autres/Autres")
);
const __LOYERS__MARRIAGES__ = lazy(() =>
  import("../../pages/loyer/content/Marriages/Marriage")
);
const __LOYERS__SEMINAIRES__ = lazy(() =>
  import("../../pages/loyer/content/Seminaire/Seminaire")
);
const __LOYERS__SOIREE__ = lazy(() =>
  import("../../pages/loyer/content/Soirée/Soire")
);

const __PAYEMENTS__ = lazy(() => import("../../pages/payement/Payement"));

const __REDIRECT__ = lazy(() => import("../../pages/redirect/Redirect"));
const __REDIRECT_SUCCES__ = lazy(() =>
  import("../../pages/redirect/succes/Succes")
);
const __REDIRECT_FAIL__ = lazy(() =>
  import("../../pages/redirect/cancel/Cancel")
);

const RouteConfig = () => {
  checkmode();
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

        {/* Loyers */}
        <Route path="/loyer" element={<__LOYERS__ />}>
          <Route index element={<__LOYERS__MARRIAGES__ />} />
          <Route path="seminaire" element={<__LOYERS__SEMINAIRES__ />} />
          <Route path="soiree" element={<__LOYERS__SOIREE__ />} />
          <Route path="autres" element={<__LOYERS__AUTRES__ />} />
        </Route>

        {/* Payements */}
        <Route path="/payement" element={<__PAYEMENTS__ />} />

        {/* athentification routes */}
        <Route path="/sign" element={<__SIGN__ />}>
          <Route path="signIn" element={<__SIGN__IN__ />} />
          <Route path="signUp" element={<__SIGN__UP__ />} />
        </Route>

        {/* {redirection } */}

        <Route path="/redirect" element={<__REDIRECT__ />}>
          <Route path="succes" element={<__REDIRECT_SUCCES__ />} />
          <Route path="cancel" element={<__REDIRECT_FAIL__ />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RouteConfig;
