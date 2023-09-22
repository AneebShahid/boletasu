import React from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import LanguageButton from "./button/LanguageButton";

export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<LanguageButton />
			{children}
			<Footer />
		</>
	);
}
