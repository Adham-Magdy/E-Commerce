import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import AboutUs from '../pages/AboutUs';
import Categories from '../pages/Categories';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Login from '../pages/Login';
import Register from '../pages/Register';



// create main layout routes
const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"categories",
                element:<Categories/>
            },
            {
                path:"products/:prefix",
                element:<Products/>
            },
            {
                path:"about-us",
                element:<AboutUs/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"register",
                element:<Register/>
            }
        ]
    }
]);
const AppRoutes = () => {
  return (
   <RouterProvider router={router}/>
  )
}

export default AppRoutes
