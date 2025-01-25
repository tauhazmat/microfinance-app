import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import CategoryPage from "../pages/CategoryPage";
import LoanInfo from "../pages/LoanInfo";
import UserLogin from "../pages/UserLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "", 
        element: <Home />,
      },
      {
        path: "category",
        element : <CategoryPage/>
      },
      {
        path : "loanInfo",
        element : <LoanInfo/>
      },
      {
        path: "userLogin",
        element: <UserLogin/>,
      },
    ],
  },
]);

export default router;
