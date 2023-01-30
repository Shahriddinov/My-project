import React from "react";
import "./search.scss";
import Search from "../../assets/images/search.png";
import Filter from "../../assets/images/filter.svg";
import CardImg from "../../assets/images/cardImg.svg";
import Save from "../../assets/images/save.svg";
import DataClock from "../../assets/images/dataClock.svg";
import Build from "../../assets/images/build.svg";
import Location from "../../assets/images/location.svg";
import Scales from "../../assets/images/scales.svg";
import Pdf from "../../assets/images/Pdf.svg";
import Word from "../../assets/images/Word.svg";
import Book from "../../assets/images/Book.svg";
import Bizness from "../../assets/images/Bizness.svg";
import Document from "../../assets/images/document.svg";

import Download from "../../assets/images/Download.svg";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordions from "components/Accordion";
export default function search() {
	return (
		<div className="background">
			<div className="search">
				<div className="search_box">
					<img src={Search} alt="search" />
					<input id="Search" name="Search" className="search_box_input" type="search" placeholder="Search" />
					<button className="search_box_button">SÖK</button>
				</div>
				<div className="search_drop">
					
					<select name="Välja län" className="search_drop_data">
						<option value="default">Välja län</option>
						<option>Muro</option>
						<option>Muro</option>
					</select>
					<select name="Välja kommun" className="search_drop_data">
						<option value="default">Välja kommun</option>
						<option>Muro</option>
						<option>Muro</option>
					</select>
					<select name="Beslutande organ" className="search_drop_data">
						<option value="default">Beslutande organ</option>
						<option>Muro</option>
						<option>Muro</option>
					</select>
					<select name="Välja län" className="search_drop_data">
						<option value="default">2019-2012</option>
						<option>Muro</option>
						<option>Muro</option>
					</select>
					
					{/* <input className="search_drop_data" type="date" placeholder="date" /> */}
					<div className="search_drop_des">Ta bort allt</div>
				</div>
				<div className="search_filter">
					<div className="search_filter_all">
						Antal träffar: <span>983</span>
					</div>
					<Dropdown>
						<Dropdown.Toggle className="start" id="dropdown-basic">
							<img src={Filter} alt="filter" />
							Den senaste
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
				<div className="search_card">
					<div className="cardImg">
						<img src={CardImg} alt="cardImg" />
					</div>
					<div className="fullInfo">
						<div className="cardInfo">
							<div className="cardTitle">Krav på enskilda avlopp</div>
							<div className="saved">
								<p>Spara</p>
								<img className="save" src={Save} alt="save" />
							</div>
						</div>
						<div className="natification">
							<div className="set">
								<img src={DataClock} alt="clock" />
								<span className="end">2022-02-21</span>
							</div>
							<div className="set">
								<img src={Build} alt="clock" />
								<span className="end">Västra götaland</span>
							</div>
							<div className="set">
								<img src={Location} alt="clock" />
								<span className="end">Göteborg</span>
							</div>
							<div className="set">
								<img src={Scales} alt="clock" />
								<span className="end">Tingsrätt</span>
							</div>
						</div>
						<div className="describ">
							Det är du som rår över din avloppsrening som ansvarar för att utsläppet inte orsakar olägenhet för varken människors hälsa eller
							miljön. Myndighetens krav ska anpassas utifrån de risker ditt avloppsutsläpp kan innebära. Varje ärende ska prövas var för sig.
						</div>
						<div className="allPdf">
							<div className="pdfLeft">
								<div className="get">
									<img src={Pdf} alt="pdf" />
									12 Mb
								</div>
								<div className="get">
									<img src={Word} alt="word" />
									14 Sidor
								</div>
							</div>
							<div className="pdfRight">
								<button className="book">
									Öppna
									<img src={Book} alt="book" />
								</button>
								<button className="download">
									Ladda Ner
									<img src={Download} alt="download" />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="search_card">
					<div className="cardImg">
						<img src={CardImg} alt="cardImg" />
					</div>
					<div className="fullInfo">
						<div className="cardInfo">
							<div className="cardTitle">Krav på enskilda avlopp</div>
							<div className="saved">
								<p>Spara</p>
								<img className="save" src={Save} alt="save" />
							</div>
						</div>
						<div className="natification">
							<div className="set">
								<img src={DataClock} alt="clock" />
								<span className="end">2022-02-21</span>
							</div>
							<div className="set">
								<img src={Build} alt="clock" />
								<span className="end">Västra götaland</span>
							</div>
							<div className="set">
								<img src={Location} alt="clock" />
								<span className="end">Göteborg</span>
							</div>
							<div className="set">
								<img src={Scales} alt="clock" />
								<span className="end">Tingsrätt</span>
							</div>
						</div>
						<div className="describ">
							Det är du som rår över din avloppsrening som ansvarar för att utsläppet inte orsakar olägenhet för varken människors hälsa eller
							miljön. Myndighetens krav ska anpassas utifrån de risker ditt avloppsutsläpp kan innebära. Varje ärende ska prövas var för sig.
						</div>
						<div className="allPdf">
							<div className="pdfLeft">
								<div className="get">
									<img src={Pdf} alt="pdf" />
									12 Mb
								</div>
								<div className="get">
									<img src={Word} alt="word" />
									14 Sidor
								</div>
							</div>
							<div className="pdfRight">
								<button className="book">
									Öppna
									<img src={Book} alt="book" />
								</button>
								<button className="download">
									Ladda Ner
									<img src={Download} alt="download" />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="search_card">
					<div className="cardImg">
						<img src={CardImg} alt="cardImg" />
					</div>
					<div className="fullInfo">
						<div className="cardInfo">
							<div className="cardTitle">Krav på enskilda avlopp</div>
							<div className="saved">
								<p>Spara</p>
								<img className="save" src={Save} alt="save" />
							</div>
						</div>
						<div className="natification">
							<div className="set">
								<img src={DataClock} alt="clock" />
								<span className="end">2022-02-21</span>
							</div>
							<div className="set">
								<img src={Build} alt="clock" />
								<span className="end">Västra götaland</span>
							</div>
							<div className="set">
								<img src={Location} alt="clock" />
								<span className="end">Göteborg</span>
							</div>
							<div className="set">
								<img src={Scales} alt="clock" />
								<span className="end">Tingsrätt</span>
							</div>
						</div>
						<div className="describ">
							Det är du som rår över din avloppsrening som ansvarar för att utsläppet inte orsakar olägenhet för varken människors hälsa eller
							miljön. Myndighetens krav ska anpassas utifrån de risker ditt avloppsutsläpp kan innebära. Varje ärende ska prövas var för sig.
						</div>
						<div className="allPdf">
							<div className="pdfLeft">
								<div className="get">
									<img src={Pdf} alt="pdf" />
									12 Mb
								</div>
								<div className="get">
									<img src={Word} alt="word" />
									14 Sidor
								</div>
							</div>
							<div className="pdfRight">
								<button className="book">
									Öppna
									<img src={Book} alt="book" />
								</button>
								<button className="download">
									Ladda Ner
									<img src={Download} alt="download" />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="Describtion ">
					<div data-aos="fade-right" className="info">
						<div className="InfoTitle">Underlätta din omvärldsbevakning</div>
						<div className="InfoText">
							Istället för att du ska behöva ringa runt till kommuner på måfå eller sålla bland tusentals träffar på Google, så har vi skapat en
							sökbar databas som endast är uppbyggd av de dokument du faktiskt kan vara intresserad utav i sammanhanget. Allt för att underlätta
							din omvärldsbevakning och spara på din tid. När du väl får en träff som är intressant för just dig så har du nu tillgång till ett
							diarienummer och vet exakt vem du ska vända dig till för att veta mer. Tänk på timmarna som sparas!
						</div>
						<div className="price">
							<div className="top">
								<div className="five">+50.000</div>
								<div className="titleFive">Protokoll i samma plats</div>
							</div>
							<hr />
							<div className="top">
								<div className="five">+30.000</div>
								<div className="titleFive">Ned laddade protokoll</div>
							</div>
							<hr />
							<div className="top">
								<div className="five">+10.000</div>
								<div className="titleFive">Sparade timmar</div>
							</div>
						</div>
					</div>
					<div data-aos="fade-left" className="infoImg">
						<img src={Bizness} alt="" />
					</div>
				</div>
				<div className="Describtion tops">
					<div data-aos="zoom-out-right" className="infoImg">
						<img src={Document} alt="" />
					</div>
					<div data-aos="zoom-out-left" className="info">
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
						<div className="InfoText">
							Digitaliseringsarbetet pågår för fullt runtom i Sveriges kommuner och myndigheter. Vad passar då bättre än.
						</div>
					</div>
				</div>
				<div className="ended">Frågor och svar</div>
				<Accordions/>
			</div>
		</div>
	);
}
