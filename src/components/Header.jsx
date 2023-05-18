import { Link } from "react-router-dom";
import logo from "../Images/logo-main.png"

const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container text-center">
                <Link className="navbar-brand" to="/"><img src={logo} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel"> <img src={logo} alt="" /></h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/map">Map</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Setting
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark text-center">
                                    <li><a className="dropdown-item" href="#">Website Settings</a></li>
                                    <li><a className="dropdown-item" href="#">Driver Commission</a></li>
                                    <li><a className="dropdown-item" href="#">Commission Settings</a></li>
                                    <li><a className="dropdown-item" href="#">Manage Sub Admin</a></li>
                                    <li><a className="dropdown-item" href="#">Change Password</a></li>
                                    <li><a className="dropdown-item" href="#">Payment Settings</a></li>
                                    <li><a className="dropdown-item" href="#">Application Settings</a></li>
                                    <li><a className="dropdown-item" href="#">Application Sliders</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Manage Drivers
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark text-center">
                                    <li><a className="dropdown-item" href="#">Driver List</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Manage Business                              </a>
                                <ul className="dropdown-menu dropdown-menu-dark text-center">
                                    <li><a className="dropdown-item" href="#">Add New Business</a></li>
                                    <li><a className="dropdown-item" href="#">Manage Stripe Account</a></li>
                                    <li><a className="dropdown-item" href="#">Business Coupon/Offer</a></li>
                                    <li><a className="dropdown-item" href="#">Business Order</a></li>
                                    <li><a className="dropdown-item" href="#">Business Report</a></li>
                                    <li><a className="dropdown-item" href="#">Business Event</a></li>
                                    <li><a className="dropdown-item" href="#">Business Reviews</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Manage Customers                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark text-center">
                                    <li><a className="dropdown-item" href="#">Customer</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;
