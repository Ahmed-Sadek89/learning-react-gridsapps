import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <header> this is header components</header>
            <hr />
            <Outlet />
            <hr />
            <footer> this is footer components</footer>
        </>
    )
}

export default Layout