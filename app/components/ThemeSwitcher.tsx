import { Dispatch, SetStateAction } from "react";

interface ThemeSwitcherProps {
	theme: "light" | "dark";
	setTheme: Dispatch<SetStateAction<"light" | "dark">>;
}

export default function ThemeSwitcher({ theme, setTheme }: ThemeSwitcherProps) {
	return (
		<button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded bg-gray-300 dark:bg-gray-700">
			{theme === "dark" ? "Dark" : "Light"}
		</button>
	);
}
