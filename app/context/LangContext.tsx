"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "fa";

interface LangContextProps {
	lang: Lang;
	setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextProps | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
	const [lang, setLang] = useState<Lang>("en");

	return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
	const context = useContext(LangContext);
	if (!context) throw new Error("useLang must be used within LangProvider");
	return context;
}
