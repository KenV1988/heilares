import { Link, useLocation, type LinkProps } from "@tanstack/react-router";
import { languageFromPath, localizePath } from "@/i18n";

type LocalizedLinkProps = Omit<LinkProps, "to"> & {
  to: string;
};

export function LocalizedLink({ to, ...props }: LocalizedLinkProps) {
  const { pathname } = useLocation();
  return <Link {...props} to={localizePath(to, languageFromPath(pathname)) as LinkProps["to"]} />;
}
