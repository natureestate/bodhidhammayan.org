import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang/type-of-courseand-schedule-th")({
  beforeLoad: () => {
    throw redirect({ to: "/$lang/hometh", params: { lang: "th" }, hash: "course-types" });
  },
  component: () => null,
});
