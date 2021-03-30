import style from './Header.style.css'
import { NavLink } from 'react-router-dom'


function Header() {

    return (
        <div className="header-wrapper">
            <div className="logo-wrapper">
                <p className="logo-link"><NavLink to="/">LOGO</NavLink>
                </p>
            </div>
            <ul className="ul-list-items">
                <li className="link-items">
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className="link-items">
                    <NavLink to="/Register">Register</NavLink>
                </li>
                <li className="link-items">
                    <NavLink to="/LogIn">Log in</NavLink>
                </li>
                <li className="link-items">
                    <NavLink to='/LogOut'>Log out</NavLink>
                </li>
            </ul>
        </div>
    );

}

export default Header;