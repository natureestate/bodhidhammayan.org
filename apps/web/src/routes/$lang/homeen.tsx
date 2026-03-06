import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";
import { HeroSection } from "~/components/sections/HeroSection";
import { CourseTypesSection } from "~/components/sections/CourseTypesSection";
import { LocationsSection } from "~/components/sections/LocationsSection";
import { ExperienceSection } from "~/components/sections/ExperienceSection";
import { DhammaSection } from "~/components/sections/DhammaSection";
import { NewsSection } from "~/components/sections/NewsSection";
import { FounderSection } from "~/components/sections/FounderSection";
import { BooksSection } from "~/components/sections/BooksSection";
import { FaqSection } from "~/components/sections/FaqSection";
import { DonationSection } from "~/components/sections/DonationSection";

export const Route = createFileRoute("/$lang/homeen")({
  component: HomeEnPage,
});

function HomeEnPage() {
  return (
    <>
      <SeoHead
        title="Bodhi Dhammayan Retreat - Meditation Retreat in Thailand"
        description="Free Anapanasati and Vipassana Meditation Retreat based on Satipatthana. Operated by Knowing Buddha Foundation and School of Life Foundation."
        canonical="/en/homeen/"
        alternateUrls={{ th: "/th/hometh/", en: "/en/homeen/" }}
      />
      <BreadcrumbLd items={[{ name: "Home", url: "/en/homeen/" }]} />

      <HeroSection lang="en" />
      <CourseTypesSection lang="en" />
      <LocationsSection lang="en" />
      <ExperienceSection lang="en" />
      <DhammaSection lang="en" />
      <NewsSection lang="en" />
      <FounderSection lang="en" />
      <BooksSection lang="en" />
      <FaqSection lang="en" />
      <DonationSection lang="en" />
    </>
  );
}
