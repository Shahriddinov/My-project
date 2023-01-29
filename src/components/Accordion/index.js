import React, { useEffect } from "react";
import "./accordion.scss";
import { useSpring, animated } from "react-spring";
import Accordion from "./components/child";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Accordions() {
	const titleAnimation = useSpring({
		from: {
			transform: "translateY(-30px)"
		},
		to: [{ transform: "translateY(15px)" }],
		config: { mass: 3, tension: 500, friction: 25 }
	});

	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);

	return (
		<div className="flex">
			<Accordion data-aos="zoom-out-up"
				title="Hur bygger man ett miljövänligt hus?"
				text="Återvunna textilier är generellt sett ett bättre miljömässigt val då det tar vara på befintliga resurser och minskar mängden avfall. Vi på H&M jobbar med flera typer av återvunna material, såsom återvunnen bomull, polyester, nylon, ull, plast och silver."
			/>
			<Accordion
				title="Vilket är det bästa materialet för miljön?"
				text="Återvunna textilier är generellt sett ett bättre miljömässigt val då det tar vara på befintliga resurser och minskar mängden avfall. Vi på H&M jobbar med flera typer av återvunna material, såsom återvunnen bomull, polyester, nylon, ull, plast och silver."
			/>
			<Accordion
				title="Vad är kvalitet i byggnationen?"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
			/>
			<Accordion
				title="7 tips för snabbare, säkrare och billigare byggprojekt"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
			/>
		</div>
	);
}
