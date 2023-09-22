import React, { useState } from "react";
import Layout from "@/components/Layout";
import StateProvider from "@/context/StateContext";
import "@/styles/globals.css";

// language
import "@/components/i18n";
import { StoreProvider } from "@/Store";

export default function App({ Component, pageProps }) {
	const [navLightTheme, setNavLightTheme] = useState(true);
	const [openSignInPopUp, setOpenSignInPopUp] = useState(false);
	const [openLoginPopUp, setOpenLoginPopUp] = useState(false);

	return (
		<StateProvider.Provider
			value={{
				navLightTheme,
				setNavLightTheme,
				openSignInPopUp,
				setOpenSignInPopUp,
				openLoginPopUp,
				setOpenLoginPopUp,
			}}
		>
		<StoreProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</StoreProvider>
		</StateProvider.Provider>
	);
}
