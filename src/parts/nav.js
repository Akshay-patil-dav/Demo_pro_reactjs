import React from 'react';
import LOGO from "../img/Sample Logo.png"

const Nav = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand logo" href="#"><img src={LOGO} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse " id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 container men  d-flex  d-grid gap-5   ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Community</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Support</a>
                            </li>


                        </ul>
                        <form className="d-flex d-grid gap-3 m-4 con" role="search">
                            {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                            <button className="btn btn-primary Register login" type="submit">Login</button>
                            <button className="btn btn-primary Register" type="submit">Register</button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Nav;
