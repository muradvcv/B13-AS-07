import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/Home/HomePage";
import ErrorPage from "../Pages/Error/ErrorPage";
import TimeLine from "../Pages/TimeLine/TimeLine";
import Stats from "../Pages/Stats/Stats";
import FriendsDetails from "../Pages/FriendsDetails/FriendsDetails";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'timeLine', element: <TimeLine /> },
      { path: '/stats', element: <Stats /> },
      { path: '/friendsDetails/:dinamicId', element: <FriendsDetails />, loader: () => fetch('/friends.json') }
    ],
    errorElement: <ErrorPage />
  }
])
