import { createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Service from './Pages/Service/Service';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <h1 style={{ textAlign: "center", width: "100%", margin: "20px 0xp" }}>This page is not found | 404</h1>,
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
                path: "/services",
                element: <Services />
            },
            {
                path: "/service/:id",
                element: <Service />
            },
        ]
    }
])

export default router