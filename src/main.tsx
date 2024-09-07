import { createRoot } from 'react-dom/client'
import MainLayout from './layouts/MainLayout/MainLayout'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';


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
            }
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
<RouterProvider router={router}/>

)
