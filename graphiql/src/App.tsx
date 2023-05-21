import React from 'react';
import Signup from '@/pages/Signup';
import AuthProvider from './contexts/AuthContext';
import { createRoutesFromElements, Route, RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Login from './pages/Login';
import Playground from './pages/Playground/Playground';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './components/auth/PrivateRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route
        path="/playground"
        element={
          <PrivateRoute>
            <Playground />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
