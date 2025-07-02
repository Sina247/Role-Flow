"use client";

import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
	const router = useRouter();
	const pathname = usePathname();

	function switchLanguage(lang: "en" | "fa") {
		let newPath = pathname;
		if (pathname.startsWith("/fa")) {
			if (lang === "en") newPath = pathname.replace(/^\/fa/, "");
		} else {
			if (lang === "fa") newPath = "/fa" + pathname;
		}
		router.push(newPath);
	}

	return (
		<div className="flex space-x-2">
			<button onClick={() => switchLanguage("en")} className="px-2 py-1 rounded border border-gray-400">
				EN
			</button>
			<button onClick={() => switchLanguage("fa")} className="px-2 py-1 rounded border border-gray-400">
				FA
			</button>
		</div>
	);
}
