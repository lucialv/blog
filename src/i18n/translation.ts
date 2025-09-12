import { siteConfig } from "../config";
import type I18nKey from "./i18nKey";
import { en } from "./languages/en";
import { es } from "./languages/es";
import { id } from "./languages/id";
import { ja } from "./languages/ja";
import { ko } from "./languages/ko";
import { th } from "./languages/th";
import { tr } from "./languages/tr";
import { vi } from "./languages/vi";
import { zh_CN } from "./languages/zh_CN";
import { zh_TW } from "./languages/zh_TW";

export type Translation = {
	[K in I18nKey]: string;
};

export type SupportedLanguage = "en" | "zh_CN" | "zh_TW" | "ja" | "ko" | "es" | "th" | "vi" | "tr" | "id";

const defaultTranslation = en;

const map: { [key: string]: Translation } = {
	es: es,
	en: en,
	en_us: en,
	en_gb: en,
	en_au: en,
	zh_cn: zh_CN,
	zh_tw: zh_TW,
	ja: ja,
	ja_jp: ja,
	ko: ko,
	ko_kr: ko,
	th: th,
	th_th: th,
	vi: vi,
	vi_vn: vi,
	id: id,
	tr: tr,
	tr_tr: tr,
};

function isValidLanguage(lang: string): lang is SupportedLanguage {
	const supportedLangs: SupportedLanguage[] = ["en", "zh_CN", "zh_TW", "ja", "ko", "es", "th", "vi", "tr", "id"];
	return supportedLangs.includes(lang as SupportedLanguage);
}

export function getTranslation(lang: string): Translation {
	return map[lang.toLowerCase()] || defaultTranslation;
}

export function getCurrentLanguage(): SupportedLanguage {
	if (typeof window !== "undefined") {
		const urlParams = new URLSearchParams(window.location.search);
		const urlLang = urlParams.get("lang");
		const savedLang = localStorage.getItem("preferred-language");
		
		if (urlLang && isValidLanguage(urlLang)) return urlLang;
		if (savedLang && isValidLanguage(savedLang)) return savedLang;
	}
	
	return siteConfig.lang || "en";
}

export function i18n(key: I18nKey): string {
	const lang = getCurrentLanguage();
	return getTranslation(lang)[key];
}
