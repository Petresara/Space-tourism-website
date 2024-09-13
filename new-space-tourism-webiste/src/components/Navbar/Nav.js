import "./Nav.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Imgs/logo.svg";
import hamburger from "../../Imgs/icon-hamburger.svg";
import close from "../../Imgs/icon-close.svg";

function Navbar(props) {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const { active } = props;

    const handleMenuToggle = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <div className="Navbar">
            <div>
                <img
                    className="Logo"
                    src={logo}
                    alt="Logo"
                    onClick={() => {
                        navigate("/");
                        closeMenu();
                    }}
                />
            </div>
            <hr className="rule" />
            <div className="Right">
                <button
                    className={"links" + (active === 0 ? " active" : "")}
                    onClick={() => {
                        navigate("/");
                        closeMenu();
                    }}
                >
                    <span className="number">00</span> HOME
                </button>
                <button
                    className={"links" + (active === 1 ? " active" : "")}
                    onClick={() => {
                        navigate("/Destination");
                        closeMenu();
                    }}
                >
                    <span className="number">01</span> DESTINATION
                </button>
                <button
                    className={"links" + (active === 2 ? " active" : "")}
                    onClick={() => {
                        navigate("/Crew");
                        closeMenu();
                    }}
                >
                    <span className="number">02</span> CREW
                </button>
                <button
                    className={"links" + (active === 3 ? " active" : "")}
                    onClick={() => {
                        navigate("/Technology");
                        closeMenu();
                    }}
                >
                    <span className="number">03</span> TECHNOLOGY
                </button>
            </div>
            <button
                className="hamburger-button"
                type="button"
                onClick={handleMenuToggle}
            >
                <img
                    className="hamburger"
                    src={menuOpen ? close : hamburger}
                    alt="Open menu"
                />
            </button>

            <div
                className={`offcanvas ${menuOpen ? "show" : ""}`}
            >
                <div className="offcanvas-header">
                    <button
                        type="button"
                        className="close-button"
                        onClick={handleMenuToggle}
                    >
                        <img src={close} alt="Close menu" />
                    </button>
                </div>
                <div className="offcanvas-body">
                    <div className="sidebar-right">
                        <button
                            className={"links" + (active === 0 ? " active" : "")}
                            onClick={() => {
                                navigate("/");
                                closeMenu();
                            }}
                        >
                            <span className="number">00</span> HOME
                        </button>
                        <button
                            className={"links" + (active === 1 ? " active" : "")}
                            onClick={() => {
                                navigate("/Destination");
                                closeMenu();
                            }}
                        >
                            <span className="number">01</span> DESTINATION
                        </button>
                        <button
                            className={"links" + (active === 2 ? " active" : "")}
                            onClick={() => {
                                navigate("/Crew");
                                closeMenu();
                            }}
                        >
                            <span className="number">02</span> CREW
                        </button>
                        <button
                            className={"links" + (active === 3 ? " active" : "")}
                            onClick={() => {
                                navigate("/Technology");
                                closeMenu();
                            }}
                        >
                            <span className="number">03</span> TECHNOLOGY
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
