import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg color-nav">
            <div className="brand">
            <Link className="navbar-brand" to="/">
                EDITH
            </Link>
            </div>
            <div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        HOME
                </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/projects"
                        end
                        className = {({isActive}) => 
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        PROJECTS
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/contactForm"
                        end
                        className = {({isActive}) => 
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        CONTACT
                    </NavLink>
                </li>
            </ul>
            </div>
        </nav>    
    );
}

export default Header;