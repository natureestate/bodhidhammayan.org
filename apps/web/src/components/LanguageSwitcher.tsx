import { Link, useRouterState } from "@tanstack/react-router";
import type { Language } from "@bodhidhammayan/api-client";
import { getAlternateLanguage, LANGUAGE_NAMES } from "@bodhidhammayan/api-client";

interface LanguageSwitcherProps {
  lang: Language;
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
      className="rounded-md border border-dharma-200 px-3 py-1.5 text-sm font-medium text-dharma-600 transition-colors hover:bg-dharma-50"
    >
      {LANGUAGE_NAMES[altLang]}
    </Link>
  );
}
