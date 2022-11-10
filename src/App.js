import './App.css';
import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom';

import ContextsWrapper from "./contexts/ContextsWrapper";
import AuthLayout from "./components/layouts/authLayout/AuthLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Clients from "./pages/clients/Clients";
import {routes} from "./routes/routes";

//ex2
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<ContextsWrapper><AuthLayout/></ContextsWrapper>}>
          <Route index element={<Dashboard/>}/>
          <Route path={routes.CLIENTS.path} element={<Clients/>}/>
        </Route>
    ))

function App() {
  return (
  // <div>
  //   <Index/>
  //   </div>
      <RouterProvider router={router}/>
  );
}

export default App;
