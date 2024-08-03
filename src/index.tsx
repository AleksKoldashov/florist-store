import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './components/App';
import './index.css';
import './firebase';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import HomePage from './components/Page/HomePage';
import AdminPage from './components/Page/AdminPage/AdminPage';
import AdminListProducts from './components/Page/AdminPage/CompAdmin/AdminListProducts';
import {AdminAddProduct} from './components/Page/AdminPage/CompAdmin/AdminAddProduct';
import AdminAddCategories from './components/Page/AdminPage/CompAdmin/AdminAddCategories';
import { MyReduserContext, Product, reducer } from '../src/components/Reducers/Reducer';
import ErrorPage from '../src/components/Page/ErrorPage';
import ShowCategories from '../src/components/Page/HomePage/Categories/ShowCategories';
import AllProducts from './components/Page/HomePage/Products/AllProducts';



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 5,
      retryDelay: 1000,
      // refetchInterval: false,
    },
  },
})

const Auth = true

const router= createHashRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/home',
        // element: Auth ? <HomePage/> : null
        element:  <HomePage/>,
        errorElement: <ErrorPage/>,
        children:[
          {
            path: '/home/categories/:idCategories',
            // element: Auth ? <HomePage/> : null
            element:  <ShowCategories/>
          },
          {
            path: '/home/products',
            // element: Auth ? <HomePage/> : null
            element:  <AllProducts/>
          },
        ] 
      },
      
      {
        path:'/admin',
        element: Auth ? <AdminPage/> : null,
        children: [
          {
            path: '/admin/listproducts',
            element: <AdminListProducts/>
          },
          {
            path: '/admin/addproduct',
            element: <AdminAddProduct/>
          },
          {
            path: '/admin/addcategories',
            element: <AdminAddCategories/>
          }
        ]
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root')as HTMLElement);

root.render(
 
<QueryClientProvider client={queryClient}>
<React.StrictMode>

    <RouterProvider router={router}/>

</React.StrictMode>
</QueryClientProvider>
  
)