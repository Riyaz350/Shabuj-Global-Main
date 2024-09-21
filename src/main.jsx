import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import './index.css';
import { router } from './Routes/Routes';
const queryClient = new QueryClient();
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
