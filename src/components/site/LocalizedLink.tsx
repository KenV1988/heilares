import type { ComponentProps } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { languageFromPath, localizePath } from "@/i18n";

type LocalizedLinkProps = Omit<ComponentProps<typeof Link>, "to"> & {
  to: string;
};

export function LocalizedLink({ to, ...props }: LocalizedLinkProps) {
  const { pathname } = useLocation();
  return <Link {...props} to={localizePath(to, languageFromPath(pathname))} />;
}
