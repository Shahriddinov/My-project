import Context from "components/Context/Context";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets//images/logo.svg";
import Search from "../../../assets//images/search.png";
import burger_img from "../../../assets/images/icons/burger-mob.svg";

import X from '../../../assets/images/icons/qq.png'
// import { FaBeer } from 'react-icons/fa'
const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { burger, setBurger  } = useContext(Context)

	const IsOpened = () => {
		console.log(burger);
		setBurger(!burger)
	}
	return (
		<div className="header">
			<Link className="burger_wrapper" to="/">
				<img className="logo" src={Logo} alt="" />

				{
					burger ? null : <img onClick={() => IsOpened()} className="burger" src={burger_img} alt="burger" />
				}
				
				{
					burger ? 
				<img  src={X} onClick={() => IsOpened()} className='burger' alt="" />
				:null
				}
			</Link>



			<navbar className="navbar">
				<ul>
					<li>
						<a href="/">Hem  </a>{" "}
					</li>
				</ul>
				<ul>
					<li>
						<a href="/about">Sökguide</a>{" "}
					</li>
				</ul>

				<ul>
					<li>
						<a href="/contact">Kontakt oss</a>
					</li>
				</ul>
			</navbar>
			<Link to="/search" className="none">
				<button className="login">
					<img className="search" src={Search} alt="search"/>
					Sökmotor </button>
			</Link>

			<div className={`mobilenavbar  ${burger ? 'mobilenavbar1' : null}`} >
				<ul>
					<li>
						<a onClick={() => IsOpened()}  href="/">Hem</a>{" "}
					</li>
				</ul>
				<ul>
					<li>
						<a onClick={() => IsOpened()}  href="/about">Sökguide</a>{" "}
					</li>
				</ul>

				<ul>
					<li>
						<a onClick={() => IsOpened()}  href="/contact">Kontakt oss</a>
					</li>
					<li>
						
					</li>
				</ul>

				<Link onClick={() => IsOpened()}  to="/search" className="none1">
					<button className="login">
						<img className="search" src={Search} alt="search"/>
						Sökmotor </button>
				</Link>
			</div>
		</div>
	);
};

export default Header;
