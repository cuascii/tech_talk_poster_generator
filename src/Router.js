import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import TemplatePage from "./pages/Template";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/template",
    element: <TemplatePage />,
  },
]);

export default router;
