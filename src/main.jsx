import { createRoot } from 'react-dom/client'
// import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/home/Home.jsx";
import App from "./App.jsx";
import About from "./components/about/About.jsx";
import CoursesHome from "./components/allCourses/CoursesHome.jsx";
import Team from "./components/team/Team.jsx";
import Price from "./components/pricing/Price.jsx";
import Blog from "./components/blog/Blog.jsx";
import Contact from "./components/contact/Contact.jsx";

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/courses",
                element: <CoursesHome/>,
            },
            {
                path: "/team",
                element: <Team/>,
            },
            {
                path: "/pricing",
                element: <Price/>,
            },
            {
                path: "/journal",
                element: <Blog/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
        ]
    }
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
