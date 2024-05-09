import Login from '../pages/Admin/login/Login';
import AddProduct from '../pages/Admin/add product/AddProduct';
import AddCategories from '../pages/Admin/Add-Categories/AddCategories';
import Categories from '../pages/Admin/categories/Categories';
import Dashboard from '../pages/Admin/dashboard/Dashboard';
import Messages from '../pages/Admin/messages/Messages';
import Orders from '../pages/Admin/orders/Orders';
import Products from '../pages/Admin/products/Products';
import Users from '../pages/Admin/users/Users';
import ClientRoot from '../pages/Client/ClientRoot';
import Home from '../pages/Client/Home/Home';
import Basket from '../pages/Client/Basket/Basket';
import ContactUs from '../pages/Client/Contact Us/ContactUs';
import AdminRoot from '../pages/Admin/AdminRoot';
import LoginClient from '../pages/Client/Login/LoginClient';
import ProductDetail from '../pages/Client/ProductDetail/ProductDetail';
import ProductsClient from '../pages/Client/Products/ProductsClient';
import Register from '../pages/Client/Register/Register';
import UserClient from '../pages/Client/User/UserClient';

export const ROUTES=[
    // Admin Root
    {
        path: "/admin",
        element: <AdminRoot/>,
        children:[
            {
                path:'login',
                element:<Login/>,
            },
            {
                path:'addproduct',
                element:<AddProduct/>,
            },
            {
                path: 'addcategories',
                element:<AddCategories/>,
            },
            {
                path:'categories',
                element:<Categories/>,
            },
            {
               index: true,
                element:<Dashboard/>,
            },
            {
                path:'message',
                element:<Messages/>,
            },
            {
                path:'orders',
                element:<Orders/>,
            },
            {
                path:'product',
                element:<Products/>,
            },
            {
                path:'users',
                element:<Users/>,
            }
        ]
    },
    // Client Root
    {
       path:'/',
       element:<ClientRoot/>,
       children:[
        {
            index: true,
            element:<Home/>,
        },
        {
            path:'baket',
            element:<Basket/>,
        },
        {
            path:'contactus',
            element:<ContactUs/>,
        },
        {
            path:'login',
            element:<LoginClient/>,
        },
        {
            path:'productdetail/:id',
            element:<ProductDetail/>,
        },
        {
            path:'products',
            element:<ProductsClient/>,
        },
        {
            path:'register',
            element:<Register/>,
        },
        {
            path:'user',
            element:<UserClient/>,
        },
       ]
    }



]