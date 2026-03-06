import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu } from "lucide-react";
import type { Language } from "@bodhidhammayan/api-client";
import { t, PAGE_URL_MAP } from "@bodhidhammayan/api-client";
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

const navItems = [
  { key: "nav.home", page: "home" },
  { key: "nav.about", page: "about" },
  { key: "nav.master", page: "master" },
  { key: "nav.place", page: "place" },
  { key: "nav.experience", page: "experience" },
  { key: "nav.dhamma", page: "dhamma" },
  { key: "nav.news", page: "news" },
];

export function Navbar({ lang }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-dharma-100 bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link
          to={PAGE_URL_MAP["home"]?.[lang] ?? "/"}
          className="flex items-center gap-2"
        >
          <span className="font-display text-xl font-bold text-dharma-800">
            {t(lang, "meta.siteName")}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const url = PAGE_URL_MAP[item.page]?.[lang];
            if (!url) return null;
            return (
              <Button key={item.key} variant="ghost" size="sm" asChild>
                <Link to={url}>{t(lang, item.key)}</Link>
              </Button>
            );
          })}
          <Separator orientation="vertical" className="mx-2 h-6" />
          <LanguageSwitcher lang={lang} />
          <Button size="xl" asChild>
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
              <SheetTitle>{t(lang, "meta.siteName")}</SheetTitle>
            </SheetHeader>
            <Separator className="my-4" />
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const url = PAGE_URL_MAP[item.page]?.[lang];
                if (!url) return null;
                return (
                  <Button
                    key={item.key}
                    variant="ghost"
                    className="justify-start"
                    asChild
                  >
                    <Link to={url} onClick={() => setOpen(false)}>
                      {t(lang, item.key)}
                    </Link>
                  </Button>
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
