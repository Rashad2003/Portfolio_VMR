import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skill } from './pages/Skill';
import { Contact } from './pages/Contact';
import { ErrorPage } from './pages/ErrorPage';
import { AppLayout } from './components/layout/AppLayout';
import { Projects } from './pages/Projects';

export const App = () => {

  const router = createBrowserRouter ([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/skill",
          element: <Skill />
        },
        {
          path: "/projects",
          element: <Projects />
        },
        {
          path: "/contact",
          element: <Contact/>
        },
      ],
    },
  ]);
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}