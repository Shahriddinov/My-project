import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets//images/logo.svg";
import Search from "../../../assets//images/search.png";
import burger from "../../../assets/images/icons/burger-mob.svg";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="header">
			<Link to="/">
				<img className="logo" src={Logo} alt="" />
			</Link>

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
						<a href="/contact">Kontakt oss</a>
					</ul>
				</li>
			</navbar>
			<Link to="/search" className="none">
				<button className="login">
					<img className="search" src={Search} alt="search"/>
					Sökmotor </button>
			</Link>
		</div>
	);
};

export default Header;
