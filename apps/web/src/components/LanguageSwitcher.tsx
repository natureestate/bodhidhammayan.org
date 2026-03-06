import { Link, useRouterState } from "@tanstack/react-router";
import type { Language } from "@bodhidhammayan/api-client";
import { getAlternateLanguage, LANGUAGE_NAMES } from "@bodhidhammayan/api-client";

interface LanguageSwitcherProps {
  lang: Language;
}

function FlagTH() {
  return (
    <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
      <clipPath id="flagTH">
        <circle cx="16" cy="16" r="16" />
      </clipPath>
      <g clipPath="url(#flagTH)">
        <rect width="32" height="32" fill="#F4F5F8" />
        <rect y="0" width="32" height="5.33" fill="#A51931" />
        <rect y="5.33" width="32" height="5.33" fill="#F4F5F8" />
        <rect y="10.67" width="32" height="10.67" fill="#2D2A4A" />
        <rect y="21.33" width="32" height="5.33" fill="#F4F5F8" />
        <rect y="26.67" width="32" height="5.33" fill="#A51931" />
      </g>
    </svg>
  );
}

function FlagGB() {
  return (
    <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
      <clipPath id="flagGB">
        <circle cx="16" cy="16" r="16" />
      </clipPath>
      <g clipPath="url(#flagGB)">
        <rect width="32" height="32" fill="#012169" />
        <path d="M0 0L32 32M32 0L0 32" stroke="#FFF" strokeWidth="5.33" />
        <path d="M0 0L32 32M32 0L0 32" stroke="#C8102E" strokeWidth="2.67" />
        <path d="M16 0V32M0 16H32" stroke="#FFF" strokeWidth="8" />
        <path d="M16 0V32M0 16H32" stroke="#C8102E" strokeWidth="4.8" />
      </g>
    </svg>
  );
}

export function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const altLang = getAlternateLanguage(lang);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const altPath = currentPath
    .replace(`/${lang}/`, `/${altLang}/`)
    .replace(/-th(\/?)$/, `-${altLang}$1`)
    .replace(/-en(\/?)$/, `-${altLang}$1`)
    .replace(/th(\/?)$/, altLang === "en" ? `en$1` : `th$1`)
    .replace(/en(\/?)$/, altLang === "th" ? `th$1` : `en$1`);

  return (
    <Link
      to={altPath}
      className="flex items-center justify-center rounded-full p-1 transition-opacity hover:opacity-80"
      title={LANGUAGE_NAMES[altLang]}
    >
      <span className="overflow-hidden rounded-full ring-1 ring-brand-gold-200">
        {altLang === "en" ? <FlagGB /> : <FlagTH />}
      </span>
      <span className="sr-only">{LANGUAGE_NAMES[altLang]}</span>
    </Link>
  );
}
