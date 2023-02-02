import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {

	const { t } = useTranslation();

	return (
		<div className="footer">
			<div className="left">
			Copyright © 2022 Maxplatt.se Org 550964-4584  Onic webbyrå
			</div>
			<div className="Right">
				<div>Integritetspolicy</div>
				<div>Allmänna villkor</div>
			</div>
		</div>
	);
};

export default Footer;
