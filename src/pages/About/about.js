import React, { useEffect } from "react";
import AboutImg from "../../assets/images/AboutImg.svg";
import Check from "../../assets/images/check.svg";
import Bie from "../../assets/images/bie.svg";
import BieTwo from "../../assets/images/bie 2.svg";
import Information from "../../assets/images/information.svg";
import Calendar from "../../assets/images/calendar.svg";
import Money from "../../assets/images/money.svg";
import "./about.scss";
import Accordions from "components/Accordion";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
	return (
		<div className="about">
			<div data-aos="fade-up" className="about_Title">
				Hur vi hjälper kommuner att effektivisera sitt arbete och öka samsynen i beslutsfattandet
			</div>
			<div className="about_flex">
				<div className="about_flex_left">
					<img data-aos="fade-right" className="left_imgs" src={AboutImg} alt="About" />
				</div>
				<div data-aos="fade-left" className="about_flex_right">
					<div className="about_flex_right_title">På ett gratis d emosamtal får du reda på:</div>
					<div className="about_flex_right_check">
						<img src={Check} alt="check" />
						<div className="about_flex_right_check_text">Hur sökmotorn fungerar</div>
					</div>
					<div className="about_flex_right_check">
						<img src={Check} alt="check" />
						<div className="about_flex_right_check_text">Hur våra avtalsupplägg ser ut</div>
					</div>
					<div className="about_flex_right_check">
						<img src={Check} alt="check" />
						<div className="about_flex_right_check_text">Vad priset för att ha tillgång till sökmotorn är</div>
					</div>
					<div className="about_flex_right_check">
						<img src={Check} alt="check" />
						<div className="about_flex_right_check_text">Vad som behövs för att komma igång</div>
					</div>
					<button className="about_flex_right_button">Boka ditt demo samtal här!</button>
				</div>
			</div>
			<div className="about_Titles">Intresserad av vår sökmotor? Så här går du tillväga</div>
			<div className="about_interested">
				<div data-aos="fade-up" className="about_interested_box">
					<div className="about_interested_box_marks">
						<img src={Information} alt="" />
					</div>
					<div className="boxText">Kolla runt på hemsidan </div>
					<span className="boxTexts">
						Kolla runt på hemsidan och läs vår "Frågor och svar"-sektion för att förstå vad det här är för slags tjänst och om den passar just dig
						och din verksamhet.
					</span>
				</div>
				<img data-aos="zoom-in-down" className="lines" src={Bie} alt="" />
				<div  data-aos="fade-up" className="about_interested_box">
					<div className="about_interested_box_marks">
						<img src={Calendar} alt="" />
					</div>
					<div className="boxText">boka in tid </div>
					<span className="boxTexts">
						Använd vår online kalender för att boka in ett demosamtal där vi kan berätta mer om hur tjänsten fungerar – Klicka här för att boka ett
						demosamtal.
					</span>
				</div>
				<img data-aos="zoom-in-down" className="lin" src={BieTwo} alt="" />
				<div data-aos="fade-up" className="about_interested_box">
					<div className="about_interested_box_marks">
						<img src={Money} alt="" />
					</div>
					<div className="boxText">Under demosamtalet </div>
					<span className="boxTexts">
						Under demosamtalet visar vi tjänsten och dess funktioner. Vi berättar om våra upplägg och lämnar en offert med prisförslag - Klicka här
						för att boka ett demosamtal.
					</span>
				</div>
			</div>
			<div className="about_Titles">Frågor och svar</div>
			<Accordions />
		</div>
	);
};

export default About;
