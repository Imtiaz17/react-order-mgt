import React from 'react';
import api from "../axios";
import {removeLocalstorage,removeCookie} from "../utils/auth";
import { redirect  } from 'react-router-dom';
const Header = () => {
    const logout = (e) => {
        e.preventDefault();
          api.post("/auth/logout")
          .then((res) => {
            removeLocalstorage('user')
            removeCookie('token')
            redirect("/");
          })
      };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse ml-2 mr-2" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={logout}>Logout</a>
                    </li>
                </ul>
            </div>
         </nav>
    );
};

export default Header;