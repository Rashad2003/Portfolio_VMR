import { NavLink } from "react-router-dom"
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from "react";

export const Nav = () => {
    const [menuIcon, setMenuIcon] = useState();
    return(
        <>
        <nav>
        <div className="logo"><strong>VMR<span>.</span></strong></div>
        <div className={menuIcon ? "navbar active" : "navbar"}>
            <ul className="navbar-lists">
                <li>
                    <NavLink to="/" className="navbar-link home-link" onClick={() => setMenuIcon(false)}>
                    Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/about" className="navbar-link" onClick={() => setMenuIcon(false)}>
                    About
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/skill" className="navbar-link" onClick={() => setMenuIcon(false)}>
                    Skill
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/projects" className="navbar-link" onClick={() => setMenuIcon(false)}>
                    Projects
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/contact" className="navbar-link" onClick={() => setMenuIcon(false)}>
                    Contact
                    </NavLink>
                </li>
            </ul>

            <div className="mobile-navbar-btn">
            <CgMenu className="mobile-nav-icon" name="menu-outline" onClick={() => setMenuIcon(true)}/>
            <CgClose className="mobile-nav-icon close-outline" name="close-outline" onClick={() => setMenuIcon(false)}/>
            </div>
        </div>
        </nav>
        </>
    )
}