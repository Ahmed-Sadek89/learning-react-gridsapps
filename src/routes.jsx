import {createBrowserRouter} from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <h1>This page is not found | 404</h1>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    }
])

export default router