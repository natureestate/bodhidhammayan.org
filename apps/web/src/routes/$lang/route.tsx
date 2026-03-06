import { Outlet, createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Navbar } from "~/components/Navbar";
import { Footer } from "~/components/Footer";
import { ReadingProgressBar } from "~/components/ReadingProgressBar";

const langSchema = z.object({
  lang: z.enum(["th", "en"]),
});

export const Route = createFileRoute("/$lang")({
  params: { parse: (params) => langSchema.parse(params) },
  component: LangLayout,
});

function LangLayout() {
  const { lang } = Route.useParams();

  return (
    <div className="flex min-h-screen flex-col">
      <ReadingProgressBar />
      <Navbar lang={lang} />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
