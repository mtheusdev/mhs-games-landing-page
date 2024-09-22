import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

const RedirectToAdsTxt = () => {
  window.location.href = "/app-ads.txt";
  return null;
};

function AppRoutes() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/app-ads.txt" element={<RedirectToAdsTxt />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return { router };
}

export default AppRoutes;
