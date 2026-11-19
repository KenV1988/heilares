import { useRouter } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { LocalizedLink } from "./LocalizedLink";

/** Keep a real fallback link for direct visits and modified clicks. */
export function BackLink(props: ComponentProps<typeof LocalizedLink>) {
  const router = useRouter();
  return (
    <LocalizedLink
      {...props}
      onClick={(event) => {
        props.onClick?.(event);
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          !router.history.canGoBack()
        ) return;
        event.preventDefault();
        router.history.back();
      }}
    />
  );
}