import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg color-nav">
            <Link className="navbar-brand" to="/">
                Edith
            </Link>
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
                        Home
                </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/project"
                        end
                        className = {({isActive}) => 
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        Project
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/contact"
                        end
                        className = {({isActive}) => 
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        contact
                    </NavLink>
                </li>
            </ul>
            </div>
        </nav>    
    );
}

export default Header;