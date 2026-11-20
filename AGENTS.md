## Project image rendering
- Project detail pages use `getAdditionalProjectImages` to exclude the cover and repeated gallery sources, and omit the gallery column when empty; this keeps every localized page free of duplicate photos and blank gallery space.
- Store project work durations as numeric `durationMonths` separately from calendar `period`; cards display `period`, while detail pages format months through `formatProjectDuration`, so calendar years and work duration remain distinct across locales.
- Use the shared `SectionBadge` for noninteractive section context labels with no pill treatment, so labels remain distinct from actionable controls across all locales.
- Keep BESS reference specifications and four-language work lists in a separate typed dataset; energy capacity (kWh/MWh) must not reuse solar power (kW/MW) fields.
- Resolve static reference detail content by slug during render and metadata generation, with beforeLoad validating existence; do not return in-module content from route loaders.
- BESS references without supplied photos use a non-photographic capacity panel and omit detail imagery; never infer dates, durations or substitute another site’s photos.
- Detail-page back links use the shared BackLink to restore the previous history entry and its scroll position, with a localized overview fallback for direct visits.
- Overview filters live on their router history entry through useOverviewFilter so restored scroll positions correspond to the same filtered project or article layout.
- Seasonal editorial posts are maintained as four-language entries in a separate dataset and merged into the shared date-sorted blog list.
- BESS comparison tables read capacities, equipment counts and localized work directly from the reference dataset so cards, details and comparisons cannot drift.

- On the projects overview, use one shared expanded slug across solar and BESS grids; reuse source datasets and keep standalone detail routes intact for existing links and SEO.
- Place expanded project information after its grid row at each breakpoint and use the shared gallery for ordered, deduplicated photos and accessible lightbox controls.
- Capture the opened card's viewport position and restore it after inline panel exit only below the two-column breakpoint; larger layouts must not programmatically scroll when closing details.
