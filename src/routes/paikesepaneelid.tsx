import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/paikesepaneelid")({
  beforeLoad: () => {
    throw redirect({ to: "/paikesepargid", statusCode: 301 });
  },
});
