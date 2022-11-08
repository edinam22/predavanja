import './App.css';
import Index from "./pages/Index";
import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom';
import Layout from "./pages/Layout";
import TestPage1 from "./pages/TestPage1";
import TestPage2 from "./pages/TestPage2";
import TestPage3 from "./pages/TestPage3";
import Movies from "./pages/Movies";
import SingleMovie from "./pages/SingleMovie";
import SearchParams from "./pages/SearchParams";
import TestModal from "./pages/TestModal";
import ContextsWrapper from "./contexts/ContextsWrapper";

//components
//  Navigation
//  Footer
//  BenefitCard
//  Button
//  ButtonRounded
//  PricingCard


//ex 1
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <div>Hello world!</div>
//   },
//   {
//     path: '/test',
//     element: <div>This is a test!</div>
//
//   }
// ])


//ex2
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<ContextsWrapper><Layout/></ContextsWrapper>}>
          <Route path="route-1" element={<TestPage1/>}/>
          <Route path="route-3/:element/:id" element={<TestPage3/>}/>
          <Route path="search-params" element={<SearchParams/>}/>
          <Route path="modal" element={<TestModal/>}/>
          {/*<Route path="movies" element={<Movies/>}/>*/}
          {/*<Route path="movies/:id" element={<SingleMovie/>}/>*/}
            <Route path="movies" element={<Movies/>}>
                <Route path=":id" element={<SingleMovie/>}/>
            </Route>


          <Route path="route-2" element={<TestPage2/>}/>
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
