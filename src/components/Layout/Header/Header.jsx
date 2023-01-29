import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets//images/logo.svg";
import burger from "../../../assets/images/icons/burger-mob.svg";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="header">
			<Link to="/">
				<img className="logo" src={Logo} alt="" />
			</Link>
			<div className="burger-mob" onClick={() => setIsOpen(true)}>
						<img src={!isOpen ? burger : ""} alt="mobile burger" />
					</div>
					{isOpen ?  <div>
						<navbar className="navbar">
				<li>
					<ul>
						<a href="/">Hem</a>{" "}
					</ul>
				</li>
				<li>
					<ul>
						<a href="/about">Sökguide</a>{" "}
					</ul>
				</li>
				<li>
					<ul>
						<a href="/search">Priser</a>
					</ul>
				</li>
				<li>
					<ul>
						<a href="/search">Om oss</a>
					</ul>
				</li>
				<li>
					<ul>
						<a href="/contact">Kontakt</a>
					</ul>
				</li>
			</navbar>
			<button className="login">Logga in</button>
					</div> : ''}
			
		</div>
	);
};

export default Header;
