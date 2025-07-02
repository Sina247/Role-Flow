"use client";

import "./styles/globals.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { useTheme } from "./hooks/useTheme";
import { ReactNode, useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function RootLayout({ children }: { children: ReactNode }) {
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	return (
		<html lang="en" className="scroll-smooth">
			<head>
				<title>Multi Role Web App</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="A scalable multi-role for seamless authentication and role-based access control." />
			</head>
			<body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
				<SessionProvider>
					<Provider store={store}>
						<header className="p-4 flex justify-between bg-gray-100 dark:bg-gray-800">
							<h1 className="text-lg font-bold flex items-center">Multi Role</h1>
							<div className="flex space-x-4">
								<ThemeSwitcher theme={theme} setTheme={setTheme} />
								<LanguageSwitcher />
							</div>
						</header>
						<main className="flex-grow p-6">{children}</main>
						<footer className="p-4 text-center bg-gray-100 dark:bg-gray-800"> © 2025 Sina Ahmadi. All rights reserved.</footer>
					</Provider>
				</SessionProvider>
			</body>
		</html>
	);
}
