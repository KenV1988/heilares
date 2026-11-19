import { useLocation, useRouter } from "@tanstack/react-router";

declare module "@tanstack/history" {
  interface HistoryState {
    overviewFilter?: string;
  }
}

/** Store the selection on its history entry so back restores the same layout. */
export function useOverviewFilter<T extends string>(options: readonly T[], fallback: T) {
  const router = useRouter();
  const location = useLocation();
  const filter = options.find((option) => option === location.state.overviewFilter) ?? fallback;
  const setFilter = (next: T) => {
    router.history.replace(location.href, { ...location.state, overviewFilter: next });
  };
  return [filter, setFilter] as const;
}