import { Link, Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CheckAuth from "../../accountPage/CheckAuth"

function Header() {

    const [auth, changeAuth] = useState(false);

    const fetchdata = async () => {
        const val = await CheckAuth();
        changeAuth(val);
        console.log(auth);
    }

    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    {/* <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/account">Account</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Codeply</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul> */}
                </div>
                <div className="mx-auto order-0">
                    <Link className="navbar-brand mx-auto" to="/">Stock App</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 justify-content-end dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        {auth
                            ? <li className="nav-item">
                                <Link className="nav-link" to="/logout">Logout</Link>
                            </li>
                            : <li className="nav-item">
                                <Link className="nav-link" to="/account">Signup/Login</Link>
                            </li>
                        }




                    </ul>
                </div>
            </nav>
            <Outlet />
        </div>













    );

}

export default Header;