import React, { Fragment, useState, useEffect } from "react";
import CountUp from "react-countup";
import Background from "../../assets/images/Home.png";
import Line from "../../assets/images/All.svg";
import Sigtuna from "../../assets/images/sigtuna.svg";
import Umea from "../../assets/images/umea.svg";
import Ange from "../../assets/images/ange.svg";
import Amais from "../../assets/images/amais.svg";
import Uppsala from "../../assets/images/uppsala.svg";
import InfoImg from "../../assets/images/InfoImg.svg";
import Check from "../../assets/images/check.svg";
import Bizness from "../../assets/images/Bizness.svg";
import Document from "../../assets/images/document.svg";
import Bie from "../../assets/images/bie.svg";
import BieTwo from "../../assets/images/bie 2.svg";
import Information from "../../assets/images/information.svg";
import Calendar from "../../assets/images/calendar.svg";
import Money from "../../assets/images/money.svg";
import Lines from "../../assets/images/Lines.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./home.scss";
import ReactVisibilitySensor from "react-visibility-sensor";
import Accordions from "components/Accordion";
import { isVisible } from "@testing-library/user-event/dist/utils";

const Home = () => {
	const [viewPortEntered, setViewPortEntered] = useState(false);
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);

	return (
		<div className="home">
			<div className="main">
				<div className="left" data-aos="fade-up">
					<div className="text">
						Över  
						<Fragment>
						<strong data-number="50000">
							<CountUp start={viewPortEntered ? null : 0} end={50000}>
								{({ countUpRef }) => {
									return (
										<ReactVisibilitySensor
											active={!viewPortEntered}
											onChange={isVisible => {
												if (isVisible) {
													setViewPortEntered(true);
												}
											}}
											delayedCall>
												
											<span className="number" ref={countUpRef}></span>
										</ReactVisibilitySensor>
									);
								}}
							</CountUp>
						</strong>
					</Fragment>
						<img className="fives" src={Lines} alt="lines" />
						protokoll från Sveriges kommuner samlade i en enda sökbar databas!
					</div>
					<p className="texts">Ta reda på hur andra kommuner gjort i liknande frågor som de du själv sitter med!</p>
					<button className="next">Boka Demo</button>
					
				</div>
				<div className="right" data-aos="fade-up">
					<img className="user" src={Background} alt="" />
				</div>
			</div>
			<div className="titles" data-aos="fade-up">
				Se hur det funkar
			</div>

			<div className="homeImgs" data-aos="fade-up">
				<div className="line">
					<img className="imgLine" src={Line} alt="" />
				</div>
			</div>
			<div className="cosial" data-aos="fade-up">
				<img className="cosializ cosializ_none" src={Sigtuna} alt="" />
				<img className="cosializ cosializ_none" src={Umea} alt="" />
				<img className="cosializ" src={Ange} alt="" />
				<img className="cosializ" src={Amais} alt="" />
				<img className="cosializ" src={Uppsala} alt="" />
			</div>

			<div className="Describtion">
				<div className="infoImg">
					<img data-aos="fade-right" className="infoImg_png" src={InfoImg} alt="" />
				</div>
				<div data-aos="fade-left" className="info">
					<div className="InfoTitle">Skapa samsyn och samarbete</div>
					<div className="InfoText">
						Vi förenklar för kommuner och offentlig sektor att skapa samsyn mellan varandra genom att på ett väldigt enkelt och smidigt vis
						tillhandahålla dokument i en enda sökbar databas. Gör en sökning och se hur andra liknande kommuner gjort i en liknande fråga som din.
						Genom att tillhandahålla den här informationen på ett enkelt sätt är vår förhoppning att allt fler kommuner ska slippa uppfinna hjulet
						gång på gång och istället ta rygg på varandra och öka det kommunala samarbetet mellan kommuner. <br /> Tänk på möjligheterna som skapas!
					</div>
					<div className="check">
						<img className="ImgCheck" src={Check} alt="" />
						<div className="CheckText">Enkelt och smidigt</div>
					</div>
					<div className="check">
						<img className="ImgCheck" src={Check} alt="" />
						<div className="CheckText">Offentlig sektor att skapa samsyn</div>
					</div>
					<div className="check">
						<img className="ImgCheck" src={Check} alt="" />
						<div className="CheckText">Slippa uppfinna hjulet gång på gångt</div>
					</div>
				</div>
			</div>
			<div className="Describtion Description">
				<div data-aos="fade-up-right" className="info">
					<div className="InfoTitle">Underlätta din omvärldsbevakning</div>
					<div className="InfoText">
						Istället för att du ska behöva ringa runt till kommuner på måfå eller sålla bland tusentals träffar på Google, så har vi skapat en
						sökbar databas som endast är uppbyggd av de dokument du faktiskt kan vara intresserad utav i sammanhanget. Allt för att underlätta din
						omvärldsbevakning och spara på din tid. När du väl får en träff som är intressant för just dig så har du nu tillgång till ett
						diarienummer och vet exakt vem du ska vända dig till för att veta mer. Tänk på timmarna som sparas!
					</div>
					<div className="price">
						<div className="top">
							<div className="five">+
							<Fragment>
						<strong data-number="50000">
							<CountUp start={viewPortEntered ? null : 0} end={50000}>
								{({ countUpRef }) => {
									return (
										<ReactVisibilitySensor
											active={!viewPortEntered}
											onChange={isVisible => {
												if (isVisible) {
													setViewPortEntered(true);
												}
											}}
											delayedCall>
												
											<span className="number" ref={countUpRef}></span>
										</ReactVisibilitySensor>
									);
								}}
							</CountUp>
						</strong>
					</Fragment>
							</div>
							<div className="titleFive">Protokoll i samma plats</div>
						</div>
						<hr />
						<div className="top">
							<div className="five">+
							<Fragment>
						<strong data-number="30000">
							<CountUp start={viewPortEntered ? null : 0} end={30000}>
								{({ countUpRef }) => {
									return (
										<ReactVisibilitySensor
											active={!viewPortEntered}
											onChange={isVisible => {
												if (isVisible) {
													setViewPortEntered(true);
												}
											}}
											delayedCall>
												
											<span className="number" ref={countUpRef}></span>
										</ReactVisibilitySensor>
									);
								}}
							</CountUp>
						</strong>
					</Fragment></div>
							<div className="titleFive">Ned laddade protokoll</div>
						</div>
						<hr />
						<div className="top top_none">
							<div className="five">+
							<Fragment>
						<strong  data-number="10000">
							<CountUp start={viewPortEntered ? null : 10000} end={10000}>
								{({ countUpRef }) => {
									return (
										<ReactVisibilitySensor
											active={!viewPortEntered}
											onChange={isVisible => {
												if (isVisible) {
													setViewPortEntered(true);
												}
											}}
											delayedCall>
												
											<span className="number" ref={countUpRef}></span>
										</ReactVisibilitySensor>
									);
								}}
							</CountUp>
						</strong>
					</Fragment></div>
							<div className="titleFive">Sparade timmar</div>
						</div>
					</div>
				</div>

				<div className="infoImg">
					<img data-aos="fade-up-left" src={Bizness} className="biznes_class" alt="" /> 
				</div>
			</div>

			<div className="Describtion">
				<div className="infoImg">
					<img data-aos="fade-right" className="infoImg_png" src={Document} alt="" />
				</div>
				<div data-aos="fade-left" className="info">
					<div className="InfoTitle">Digitalt och hållbart</div>
					<div className="InfoText">
						Digitaliseringsarbetet pågår för fullt runtom i Sveriges kommuner och myndigheter. Vad passar då bättre än en helt onlinebaserad
						sökmotor som på ett effektivt sätt underlättar flera aspekter i det offentliga arbetet? Att samtidigt skapa samsyn och samarbete och
						därmed enklare uppnå gemensamt uppställda mål tillsammans tycker vi dessutom känns väldigt hållbart!
					</div>
					<div className="Next">Tänk på framtiden!</div>
					<div className="InfoText">
						Digitaliseringsarbetet pågår för fullt runtom i Sveriges kommuner och myndigheter. Vad passar då bättre än en helt onlinebaserad
					</div>
					<div className="Next">När du vill och var du vill</div>
					<div className="InfoText">Digitaliseringsarbetet pågår för fullt runtom i Sveriges kommuner och myndigheter. Vad passar då bättre än.</div>
				</div>
			</div>
			
			<div className="green">

				<div className="titles">Intresserad av vår sökmotor? Så här går du tillväga</div>
				<div className="interested">
					<div data-aos="fade-up" data-aos-anchor-placement="bottom-center" className="box">
						<div className="marks">
							<img src={Information} alt="" />
						</div>
						<div className="boxText">Kolla runt på hemsidan </div>
						<span className="boxTexts">
							Kolla runt på hemsidan och läs vår "Frågor och svar"-sektion för att förstå vad det här är för slags tjänst och om den passar just
							dig och din verksamhet.
						</span>
					</div>
					<img data-aos="zoom-in-down" className="lines" src={Bie} alt="" />
					<div data-aos="fade-up" data-aos-anchor-placement="bottom-center" className="box">
						<div className="marks">
							<img src={Calendar} alt="" />
						</div>
						<div className="boxText">boka in tid </div>
						<span className="boxTexts">
							Använd vår online kalender för att boka in ett demosamtal där vi kan berätta mer om hur tjänsten fungerar – Klicka här för att boka
							ett demosamtal.
						</span>
					</div>
					<img data-aos="zoom-in-down" className="lin" src={BieTwo} alt="" />
					<div data-aos="fade-up" data-aos-anchor-placement="bottom-center" className="box">
						<div className="marks">
							<img className="money" src={Money} alt="" />
						</div>
						<div className="boxText">Under demosamtalet </div>
						<span className="boxTexts">
							Under demosamtalet visar vi tjänsten och dess funktioner. Vi berättar om våra upplägg och lämnar en offert med prisförslag - Klicka
							här för att boka ett demosamtal.
						</span>
					</div>
				</div>
			</div>

			<div className="tit">Allt fler kommuner och myndigheter använder och uppskattar vår sökmotor. Se själv.</div>




			<Swiper className="swiper" slidesPerView={3} spaceBetween={10} navigation={true} modules={[Pagination, Navigation]}>
				<SwiperSlide className="">
					<div data-aos="fade-right" className="swiperText">
						<div className="lineword">
							Construction and Building Materials provides an international forum for the. Construction and Building Materials provides an
							international forum for the{" "}
						</div>
						<div className="swiperTitle">Kils kommun</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div data-aos="fade-up" className="swiperText">
						<div className="lineword">
							Construction and Building Materials provides an international forum for the. Construction and Building Materials provides an
							international forum for the{" "}
						</div>
						<div className="swiperTitle">Arvika kommun</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div data-aos="fade-left" className="swiperText">
						<div className="lineword">
							Construction and Building Materials provides an international forum for the. Construction and Building Materials provides an
							international forum for the
						</div>
						<div className="swiperTitle">Kils kommun</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div data-aos="fade-up" className="swiperText">
						<div className="lineword">
							Construction and Building Materials provides an international forum for the. Construction and Building Materials provides an
							international forum for the{" "}
						</div>
						<div className="swiperTitle">Karlstads kommun</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div data-aos="fade-right" className="swiperText">
						<div className="lineword">
							Construction and Building Materials provides an international forum for the. Construction and Building Materials provides an
							international forum for the{" "}
						</div>
						<div className="swiperTitle">Kils kommun</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div data-aos="fade-left" className="swiperText">
						<div className="lineword">
							Construction and Building Materials provides an international forum for the. Construction and Building Materials provides an
							international forum for the{" "}
						</div>
						<div className="swiperTitle">Kils kommun</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="swiperText">
						<div className="lineword">
							Construction and Building Materials provides an international forum for the. Construction and Building Materials provides an
							international forum for the{" "}
						</div>
						<div className="swiperTitle">Kils kommun</div>
					</div>
				</SwiperSlide>
			</Swiper>

			<Swiper className="swiper swiper_none" slidesPerView={1} spaceBetween={10} navigation={true} modules={[Pagination, Navigation]}>
				<SwiperSlide className="">
					<div data-aos="fade-right" className="swiperText">
						<div className="lineword">
							Construction and Building Materials provides an international forum for the. Construction and Building Materials provides an
							international forum for the{" "}
						</div>
						<div className="swiperTitle">Kils kommun</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div data-aos="fade-up" className="swiperText">
						<div className="lineword">
							Construction and Building Materials provides an international forum for the. Construction and Building Materials provides an
							international forum for the{" "}
						</div>
						<div className="swiperTitle">Arvika kommun</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div data-aos="fade-left" className="swiperText">
						<div className="lineword">
							Construction and Building Materials provides an international forum for the. Construction and Building Materials provides an
							international forum for the
						</div>
						<div className="swiperTitle">Kils kommun</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div data-aos="fade-up" className="swiperText">
						<div className="lineword">
							Construction and Building Materials provides an international forum for the. Construction and Building Materials provides an
							international forum for the{" "}
						</div>
						<div className="swiperTitle">Karlstads kommun</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div data-aos="fade-right" className="swiperText">
						<div className="lineword">
							Construction and Building Materials provides an international forum for the. Construction and Building Materials provides an
							international forum for the{" "}
						</div>
						<div className="swiperTitle">Kils kommun</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div data-aos="fade-left" className="swiperText">
						<div className="lineword">
							Construction and Building Materials provides an international forum for the. Construction and Building Materials provides an
							international forum for the{" "}
						</div>
						<div className="swiperTitle">Kils kommun</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="swiperText">
						<div className="lineword">
							Construction and Building Materials provides an international forum for the. Construction and Building Materials provides an
							international forum for the{" "}
						</div>
						<div className="swiperTitle">Kils kommun</div>
					</div>
				</SwiperSlide>
			</Swiper>

			<div className="green">
				<div className="titles">Frågor och svar</div>
				<Accordions />
			</div>
		</div>
	);
};

export default Home;
