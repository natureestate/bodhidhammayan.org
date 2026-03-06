import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang/type-of-courseand-schedule-en")({
  beforeLoad: () => {
    throw redirect({ to: "/$lang/homeen", params: { lang: "en" }, hash: "course-types" });
  },
  component: () => null,
});
