import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle } from "lucide-react";
import { PAGE_URL_MAP } from "@bodhidhammayan/api-client";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";
import { Button } from "~/components/ui/button";
import { siteConfig } from "~/data";

export const Route = createFileRoute("/$lang/register-email-en")({
  component: RegisterEmailEnPage,
});

const courseTypes = [
  {
    name: "Journey to the Mind",
    duration: "1 day or 3 days 2 nights",
    description: "Introductory course for beginners — learn basic mindfulness and meditation.",
  },
  {
    name: "Anapanasati Meditation",
    duration: "4 days 3 nights",
    description: "Intermediate course — intensive Anapanasati breathing meditation.",
  },
  {
    name: "Vipassana Meditation",
    duration: "8 days 7 nights",
    description: "Advanced course — Vipassana meditation based on the Four Foundations of Mindfulness.",
  },
];

function RegisterEmailEnPage() {
  return (
    <>
      <SeoHead
        title="Register for Courses - Bodhi Dhammayan Retreat"
        description="Register for free meditation courses at Bodhi Dhammayan Retreat"
        canonical="/en/register-email-en/"
        alternateUrls={{
          th: "/th/register-email-th/",
          en: "/en/register-email-en/",
        }}
      />
      <BreadcrumbLd
        items={[
          { name: "Home", url: "/en/homeen/" },
          { name: "Register", url: "/en/register-email-en/" },
        ]}
      />

      <div className="relative bg-dharma-950 px-4 py-20">
        <img
          src={siteConfig.images.hero}
          alt="Register"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
            Register for Courses
          </h1>
          <p className="mt-4 text-lg text-dharma-200">
            All courses are free of charge, operated by the foundations.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="font-display text-2xl font-bold text-dharma-900">
          Available Courses
        </h2>

        <div className="mt-8 space-y-6">
          {courseTypes.map((course) => (
            <div
              key={course.name}
              className="rounded-xl border border-dharma-100 bg-white p-6 shadow-sm"
            >
              <h3 className="font-display text-lg font-bold text-dharma-800">
                {course.name}
              </h3>
              <p className="mt-1 text-sm text-gold-600">{course.duration}</p>
              <p className="mt-2 text-sm text-dharma-600">
                {course.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl bg-dharma-50 p-8">
          <h2 className="font-display text-2xl font-bold text-dharma-900">
            How to Register
          </h2>
          <div className="mt-6 space-y-4">
            {[
              "Choose your preferred course and location",
              "Fill in the online registration form",
              "Wait for confirmation from our team",
              "Prepare according to the guidelines provided",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-nature-500" />
                <p className="text-base text-dharma-700">
                  {i + 1}. {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-dharma-500">
            Contact: {siteConfig.contact.phone.join(", ")} | {siteConfig.contact.email}
          </p>
          <Button className="mt-6" size="lg" asChild>
            <Link to={PAGE_URL_MAP["course-schedule"]?.en ?? "#"}>
              View All Course Schedules
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
