import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import AboutUs from '../pages/AboutUs';
import Categories from '../pages/Categories';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Error from '../pages/Error';



// create main layout routes
const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        errorElement:<Error/>,
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
                element:<Products/>,

                /*Using loader property to set guard on page http 
                before sending to server and loading page*/
                loader:({params})=>{
                    /**
                     * test in prefix in regular expression pattern 
                     * to ensure that the prefix is always a string
                     * if not throw Response Bad Request 400 
                     */
                    if(typeof params.prefix !== "string" ||
                        !/^[a-z]+$/i.test(params.prefix as string)){
                        throw new Response("Bad Request",{
                            statusText:"Category Not Found",
                            status:400,
                        });
                    }   
                    return true;
                }
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
