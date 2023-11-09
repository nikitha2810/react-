import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,RouterProvider} 
   from 'react-router-dom'
import Heading from './Layout/Heading';
import Project1 from './Pages/Project1';
import Project2 from './Pages/Project2';
import Project3 from './Pages/Project3';
import Project4 from './Pages/Project4';
import Project5 from './Pages/Project5';
import Home from './Layout/Home';

  
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Heading />}>
      <Route index element={<Home/>}/>
      <Route path='p1' element={<Project1 />}></Route>
      <Route path='p2' element={<Project2 />}></Route>
      <Route path='p3' element={<Project3 />}></Route>
      <Route path='p4' element={<Project4 />}></Route>
      <Route path='p5' element={<Project5 />}></Route>
    </Route>
  )
)

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;