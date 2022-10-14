import MainLayout from "./layouts/MainLayout";
import RegisterPage from "./pages/register";
import HomePage from "./pages";
import LeaderBoard from "./pages/leaderboard";
import { createBrowserRouter } from "react-router-dom";
import { DetailsPage } from "./pages/details";
import { PageNotFound } from "./pages/_404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    ),
  },

  {
    path: "/register",
    element: (
      <MainLayout>
        <RegisterPage />
      </MainLayout>
    ),
  },

  {
    path: "/profile/:id",
    element: (
      <MainLayout>
        <DetailsPage />
      </MainLayout>
    ),
  },

  {
    path: "/leaderBoard",
    element: (
      <MainLayout>
        <LeaderBoard />
      </MainLayout>
    ),
  },

  {
    path: "/*",
    element: (
      <MainLayout>
        <PageNotFound />
      </MainLayout>
    ),
  },
]);
