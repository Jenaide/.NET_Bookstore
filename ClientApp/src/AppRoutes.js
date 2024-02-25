import { Home } from "./components/Home";
import { Create } from "./components/Create";
import { Return } from "./components/Return";
import { Books } from "./components/Books";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
      path: '/books',
      element: <Books />
  },
  {
    path: '/create',
    element: <Create />
  },
  {
    path: '/return',
    element: <Return />
  }
];

export default AppRoutes;
