import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './components/App';
import './index.css';
import './firebase';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import ErrorPage from './components/Page/ErrorPage';
import HomePage from './components/Page/HomePage';
import AdminPage from './components/Page/AdminPage/AdminPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // retry: false,
    },
  },
})
const router= createHashRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/home',
        element: <HomePage/>
      },
      {
        path:'/admin',
        element: <AdminPage/>
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