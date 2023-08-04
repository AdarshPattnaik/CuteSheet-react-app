// Navbar Component: Navbar.jsx
import React from 'react'

// Material UI:
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

// Importing React Media:
import NavLogo from "../React-Media/nav-icon.gif";

// Material UI:
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navbar = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container d-flex justify-content-between align-items-center">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <img
                            src={NavLogo}
                            alt="Logo"
                            width="50"
                            className="d-inline-block align-text-top" />
                        CuteSheet
                    </a>
                    <button
                        className="navbar-toggler py-2"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="hamburger-icon">☰</span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item social-icons">
                                <a
                                    className="mx-2"
                                    href="https://www.linkedin.com/in/adarsh-pattnaik-41319026b/">
                                    <LinkedInIcon />
                                </a>
                                <a
                                    className="mx-2"
                                    href="https://github.com/AdarshPattnaik">
                                    <GitHubIcon />
                                </a>
                                <a
                                    className="mx-2"
                                    href="https://www.instagram.com/_ig_adarsh__/">
                                    <InstagramIcon />
                                </a>
                                <a
                                    className="mx-2"
                                    href="https://www.facebook.com/adarsh.pattanaik.92">
                                    <FacebookIcon />
                                </a>
                            </li>
                            <li className="nav-item">
                                {/* All Delete Button */}
                                {(props.items.length !== 0) ? (
                                    <div className="dropdown">
                                        <Tooltip title="Delete All">
                                            <Button
                                                className="delete-all d-flex align-items-center text-danger"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                <DeleteForeverIcon />
                                                Delete All
                                            </Button>
                                        </Tooltip>
                                        <ul className="dropdown-menu">
                                            <li className="d-flex flex-column align-items-start">
                                                <Button className="leave-btn">
                                                    Leave
                                                </Button>
                                            </li>
                                            <li className="d-flex flex-column align-items-start">
                                                <Button
                                                    className="delete-btn"
                                                    onClick={() => props.setItems([])}>
                                                    Confirm
                                                </Button>
                                                <span className="delete-warn ms-2">⚠️ Deletion is permanent.</span>
                                            </li>
                                        </ul>
                                    </div>
                                ) : <></>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar