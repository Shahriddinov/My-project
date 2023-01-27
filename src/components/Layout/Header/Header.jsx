import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets//images/logo.svg";
const Header = () => {
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
						<a href="/search">Search Guide</a>{" "}
					</ul>
				</li>
				<li>
					<ul>
						<a href="/about">About Us</a>
					</ul>
				</li>
				<li>
					<ul>
						<a href="/contact">Kontakt</a>
					</ul>
				</li>
			</navbar>
			<button className="login">Logga in</button>
		</div>
	);
};

export default Header;
