import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "../../public/locales/en/translation.json";
import translationES from "../../public/locales/es/translation.json";

i18n.use(initReactI18next).init({
	lng: "en",
	allowMultiLoading: true,
	resources: {
		en: {
			translation: translationEN,
		},
		es: {
			translation: translationES,
		},
	},
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
