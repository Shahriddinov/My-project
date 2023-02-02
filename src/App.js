import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import i18next from "i18next";

import systemActions from "store/actions/system";
import config from "config";
import { helpers } from "services";
import { withRouter } from "utils";
import Context from "components/Context/Context";

function App({ children }) {
	const dispatch = useDispatch();

	const setLanguage = () => {
		const pathname = window.location.pathname;
		const locationLang = pathname.split("/")[1];

		if (helpers.isEnableLang(locationLang)) {
			i18next.changeLanguage(locationLang);
			dispatch(systemActions.ChangeLanguage(locationLang));
		} else {
			i18next.changeLanguage(config.DEFAULT_LANGUAGE);
			dispatch(systemActions.ChangeLanguage(config.DEFAULT_LANGUAGE));
		}
	};

	useEffect(() => {
		setLanguage();
		dispatch(systemActions.GetMenu());
		dispatch(systemActions.GetSettings());
		//eslint-disable-next-line
	}, []);
	const [ burger, setBurger ] = useState(false)
	const obj = {burger, setBurger }

	return <Context.Provider value={obj} >
	 <div>{children}</div>
	 </Context.Provider>
	 ;
}

export default withRouter(App);
