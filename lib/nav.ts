export function resolveNavHref(href: string, pathname: string): string {
  if (href.startsWith("/") && !href.startsWith("/#")) return href;
  if (href.startsWith("#")) return pathname === "/" ? href : `/${href}`;
  return href;
}

export function isRouteLink(href: string): boolean {
  return href.startsWith("/") && !href.startsWith("/#");
}
