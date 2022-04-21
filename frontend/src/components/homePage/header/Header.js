import { Link, Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CheckAuth from "../../accountPage/CheckAuth"
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import GlobalAPI from "../../accountPage/GlobalAPI";
function Header() {

    const [auth, changeAuth] = useState(false);
    const navigate=useNavigate();
    const logout_url='/users/logout';
    const fetchdata = async () => {
        const val = await CheckAuth();
        changeAuth(val);
        console.log(auth);
    }

    useEffect(() => {
        fetchdata();
    }, []);
    const handleClick=async e =>{
        e.preventDefault();
        const response=await GlobalAPI(true,logout_url,null);
        const val = await CheckAuth();
        changeAuth(val);
        console.log(auth);
        navigate("/login");
    }

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
                                <a class="nav-link"onClick={handleClick} style={{textDecoration:"none"}}>Logout</a>
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