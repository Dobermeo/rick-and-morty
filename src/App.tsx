import { createRoutesFromElements, Route } from 'react-router';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Character from './pages/Character';
import Localizations from './pages/Localizations';
import Episodes from './pages/Episodes';
import NotFound from './pages/NotFound';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path= "/" element={<RootLayout />}>
      <Route index element={<Home />}/>
      <Route path= "character" element={<Character />}/>
      <Route path= "localizations" element={<Localizations />}/>
      <Route path= "episodes" element={<Episodes />}/>
      <Route path= "*" element={<NotFound />}/>
    </Route>
  )
)

function App(){
  return(
    <RouterProvider router={router}></RouterProvider>
  )
}
export default App;