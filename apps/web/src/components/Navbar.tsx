import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  Home,
  User,
  BookOpen,
  MapPin,
  Sparkles,
  Newspaper,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import type { Language } from "@bodhidhammayan/api-client";
import { t, PAGE_URL_MAP } from "@bodhidhammayan/api-client";
import { siteConfig } from "~/data";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { Separator } from "./ui/separator";

interface NavbarProps {
  lang: Language;
}

interface MegaChild {
  labelKey: string;
  page: string;
  icon: React.ReactNode;
  descriptionKey: string;
}

interface NavItem {
  key: string;
  page: string;
  icon: React.ReactNode;
  external?: boolean;
  mega?: MegaChild[];
}

const navItems: NavItem[] = [
  { key: "nav.home", page: "home", icon: <Home className="h-4 w-4" /> },
  { key: "nav.about", page: "about", icon: <User className="h-4 w-4" /> },
  { key: "nav.master", page: "master", icon: <User className="h-4 w-4" /> },
  {
    key: "nav.dhamma",
    page: "dhamma",
    icon: <BookOpen className="h-4 w-4" />,
    mega: [
      {
        labelKey: "nav.dhamma",
        page: "dhamma",
        icon: <Newspaper className="h-4 w-4" />,
        descriptionKey: "nav.dhammaDesc",
      },
    ],
  },
  { key: "nav.place", page: "place", icon: <MapPin className="h-4 w-4" /> },
  {
    key: "nav.experience",
    page: "experience",
    icon: <Sparkles className="h-4 w-4" />,
  },
  { key: "nav.news", page: "news", icon: <Newspaper className="h-4 w-4" /> },
];

export function Navbar({ lang }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-brand-gold-100/30 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link
          to={PAGE_URL_MAP["home"]?.[lang] ?? "/"}
          className="flex items-center gap-3"
        >
          <img
            src={siteConfig.images.logo}
            alt={t(lang, "meta.siteName")}
            className="h-10 w-auto"
          />
          <span className="hidden font-serif text-lg font-bold text-brand-dark sm:inline">
            {t(lang, "meta.siteName")}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const hasMega = !!item.mega;
            const url = PAGE_URL_MAP[item.page]?.[lang];
            if (!url && !hasMega) return null;

            return (
              <div key={item.key} className="group relative">
                {hasMega ? (
                  <button className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-brand-text-secondary transition-colors hover:bg-brand-gold-50 hover:text-brand-gold-700">
                    {item.icon}
                    <span>{t(lang, item.key)}</span>
                    <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    to={url!}
                    className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-brand-text-secondary transition-colors hover:bg-brand-gold-50 hover:text-brand-gold-700"
                  >
                    {item.icon}
                    <span>{t(lang, item.key)}</span>
                  </Link>
                )}

                {hasMega && (
                  <div className="invisible absolute left-0 top-full z-50 min-w-[240px] rounded-xl border border-brand-gold-100/50 bg-white p-3 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                    <div className="space-y-1">
                      {item.mega!.map((child) => {
                        const childUrl =
                          PAGE_URL_MAP[child.page]?.[lang] ?? "#";
                        return (
                          <Link
                            key={child.labelKey}
                            to={childUrl}
                            className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-brand-gold-50"
                          >
                            <div className="mt-0.5 text-brand-gold-500">
                              {child.icon}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-brand-dark">
                                {t(lang, child.labelKey)}
                              </p>
                              <p className="text-xs text-brand-text-muted">
                                {t(lang, child.descriptionKey)}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <Separator orientation="vertical" className="mx-2 h-6" />
          <LanguageSwitcher lang={lang} />
          <Button size="lg" asChild>
            <Link to={PAGE_URL_MAP["register"]?.[lang] ?? "#"}>
              {t(lang, "cta.register")}
            </Link>
          </Button>
        </div>

        {/* Mobile Sheet */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">เปิดเมนู</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 p-6">
            <SheetHeader>
              <SheetTitle className="font-serif">
                {t(lang, "meta.siteName")}
              </SheetTitle>
            </SheetHeader>
            <Separator className="my-4" />
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const url = PAGE_URL_MAP[item.page]?.[lang];
                if (!url) return null;
                return (
                  <Link
                    key={item.key}
                    to={url}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-brand-text-secondary transition-colors hover:bg-brand-gold-50 hover:text-brand-gold-700"
                  >
                    {item.icon}
                    <span>{t(lang, item.key)}</span>
                  </Link>
                );
              })}
            </nav>
            <Separator className="my-4" />
            <div className="flex items-center justify-between">
              <LanguageSwitcher lang={lang} />
              <Button size="sm" asChild>
                <Link
                  to={PAGE_URL_MAP["register"]?.[lang] ?? "#"}
                  onClick={() => setOpen(false)}
                >
                  {t(lang, "cta.register")}
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
