import React from "react";
import "./contact.scss";
import Phone from "../../assets/images/phone.svg";
import Home from "../../assets/images/home.svg";
import Clock from "../../assets/images/clock.svg";
import Instagram from "../../assets/images/instagram.svg";
import Telegram from "../../assets/images/telegram.svg";
import Facebook from "../../assets/images/facebook.svg";
import Accordions from "components/Accordion";
export default function contact() {
	return (
		<div className="contact">
			<div className="allOf">
				<div className="contactLeft">
					<div className="InfoTitle">Hör av dig</div>
					<div className="InfoText">
						Söker du efter en byggfirma som kan hjälpa dig med köksrenovering i Stockholm? Då är vi den rätta firman för dig!
					</div>
					<div className="forms">
						<div class="form__group field">
							<input type="input" class="form__field" placeholder="Namn" name="Namn" id="name" required />
							<label for="Namn" class="form__label">
								Namn
							</label>
						</div>
						<div class="form__group field">
							<input type="input" class="form__field" placeholder="Efternamn" name="Efternamn" id="Efternamn" required />
							<label for="Efternamn" class="form__label">
								Efternamn
							</label>
						</div>
					</div>
					<div className="forms">
						<div class="form__group field">
							<input type="input" class="form__field" placeholder="E-post" name="E-post" id="E-post" required />
							<label for="E-post" class="form__label">
								E-post
							</label>
						</div>
						<div class="form__group field">
							<input type="input" class="form__field" placeholder="Telefonnummer" name="Telefonnummer" id="Telefonnummer" required />
							<label for="Telefonnummer" class="form__label">
								Telefonnummer
							</label>
						</div>
					</div>

					<div className="forms">
						<div class="form__group_area field">
							<textarea type="input" class="form__field" placeholder="E-post" name="E-post" id="E-post" required />
							<label for="E-post" class="form__label">
								E-post
							</label>
						</div>
					</div>
                    <button className="click">Skicka In</button>
				</div>
				<div className="contactRight">
					<div className="social">
						<img className="phone" src={Phone} alt="phone" />
						<div className="adress">
							Adress
							<div className="adressText">SMÅLANDSVÄGEN 00 F LGH 1111 Mjölby</div>
						</div>
					</div>
					<div className="social decrease">
						<img className="home" src={Home} alt="home" />
						<div className="adress">
							Telefon
							<div className="adressText">0760-609500, 0760-594300</div>
						</div>
					</div>
					<div className="social decrease">
						<img className="home" src={Clock} alt="clock" />
						<div className="adress">
							Öppettider
							<div className="adressText">
								Mån-Fre: 10-18 <br /> Lör: 11-15
							</div>
						</div>
					</div>
					<div className="social decrease">
                        <div className="home"></div>
						<div className="adress">
                        Följa oss
							<div className="network">
								<img src={Instagram} alt="instagram"/>
								<img src={Telegram} alt="Telegram"/>
								<img src={Facebook} alt="Facebook"/>
							</div>
						</div>
					</div>
				</div>
			</div>
            <div className="contackTitle">Frågor och svar</div>
            <Accordions/>
		</div>
	);
}
