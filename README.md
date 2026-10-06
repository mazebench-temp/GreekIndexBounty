# Pinakes · Πίνακες

A reader and exhaustive index of Greek literature, named after the *Pinakes* of Callimachus, the
catalogue of the Library of Alexandria. It begins with Homer's Iliad, Books 1 to 13: the Greek text, a
new line-for-line translation, a word-by-word lexicon, and an index of every name, place, god, creature,
custom, word, epithet, formula, story and idea in them.

[Read the library](https://mazebench-temp.github.io/GreekIndexBounty/) · [Upstream Pinakes](https://github.com/mazebench-temp/Pinakes) · [Import provenance](PROVENANCE.md)

This repository hosts the Pinakes library with a minimal interface. It imports all 6,950 source-content files from Pinakes commit `c942770aed023b9c73139f7fcae1a46bff6b0404`: **13 Iliad books, 8,426 Greek/English lines, 2,590 articles, 5,273 distinct lemmas, 106 stories, and 2,032 quote records**. Shared articles, book notes, tags, figure, translation conventions, and deterministic quote IDs are preserved. The import is recorded file-by-file in [imports/pinakes.json](imports/pinakes.json). Five supplemental verses carry additional witness metadata.

```sh
npm run dev      # build, serve at http://localhost:5180, rebuild and reload on every change
npm run build    # write site/data/ from content/
npm run check    # validate everything without writing
npm run quotes   # turn {{quote:Iliad 1.1-7 | Title}} tags into permanent {{quote:uuid}} ids
npm test         # library and content integrity tests
```

Requires Node 20 or later. There are no dependencies to install.

## What is in it

- **Reader**: Greek over English, line by line, or side by side on wide screens. Tap a Greek word
  for its dictionary form, gloss and parse. Tap a name for its index entry. Tap a line number to quote
  a line or a passage. Scene headings, speaker labels and the days of the action come from the
  book's structure file.
- **Index**: entries in 18 kinds, from gods and heroes to Greek words, epithets, rituals and textual
  notes. Every entry lists every line it occurs in, found automatically from its Greek forms.
- **Scopes**: every article can be read whole, or at an author, a work or a book, chosen as a path
  (Homer › Iliad › 3, with "About" for Homer or the Iliad as a whole). The general article (etymology,
  family, myth, later tradition) is shared; what the entry does in each book is a note of its own. The
  chosen scope is remembered, so studying a book keeps every article on it.
- **Myths**: every story told, remembered or foretold, placed in mythic time from the Primordial age
  and the Titanomachy through the heroic generations and the Epic Cycle to the Telegony.
- **Tags**: faceted and nested. A tag includes its children, and tags can be combined.
- **Search**: across the index, the text (Greek with or without accents, English, or transliterated
  Greek) and the lexicon.
- **Quotes**: `{{quote:<uuid>}}` tags, as in the Margin wiki. Ids are deterministic version-5 UUIDs of
  the passage and title, so the same quote always has the same id. The Quotes page lists every quoted
  passage with the articles that quote it and the tag for each title it is quoted under.

## Layout

```
content/
  library/<author>/author.json
  library/<author>/<work>/work.json        editions, citation scheme, book titles
  library/<author>/<work>/grc/01.txt       Greek, one numbered verse per row
  library/<author>/<work>/en/01.txt        English, aligned to the Greek numbering
  library/<author>/<work>/structure/01.json   scenes, speeches, days
  library/<author>/<work>/lexicon/01.json     lemma, gloss and parse for every word
  library/<author>/<work>/TRANSLATION.md      translation conventions
  library/<author>/<work>/notes/02/<id>.md    what an index entry is and does in Book 2
  index/<folder>/<id>.md                   index entries (see docs/index-guide.md)
  quotes/<work>.json                       the quote registry
  kinds.json  tags.json  periods.json      taxonomies
scripts/                                   build, dev server, quote tool (no dependencies)
site/                                      the app: index.html, assets/, and the generated data/
docs/index-guide.md                        how to write index entries
```

## Adding more

**Another book of the Iliad.** Add `grc/14.txt`, `en/14.txt`, `structure/14.json` and
`lexicon/14.json` (built in parts with `scripts/lexicon.mjs`), a `books.14` title in `work.json`, and
notes under `notes/14/`. The concordance runs over every available
book, so existing entries pick up their new occurrences at once, and the build report lists every
capitalized Greek word that no entry covers yet (`site/data/report.json`, and the About page).

**Another work** (the Odyssey, the Homeric Hymns, Plato). Create `content/library/<author>/<work>/`
with a `work.json` like the Iliad's. Give it its own `citation` scheme and `aliases` (so that
`{{quote:Od. 1.1-10}}` resolves) and add its texts. Entries default to the Iliad; set `work:` in an
entry's front matter, or name the work in a reference, to cite another. The periods of the Myths
already run to the Telegony, ready for the Odyssey's stories.

## Sources and credits

- Greek text: D. B. Monro and T. W. Allen, *Homeri Opera*, Oxford Classical Texts (3rd ed., 1920), as
  digitized by the Perseus Digital Library (CC BY-SA).
- Translation, lexicon, index and articles: written for this project by Claude (Anthropic), 2026.
  See `content/library/homer/iliad/TRANSLATION.md` for the conventions.

## Remaining research scope

Iliad Books 1–13 were imported at the owner’s request and no longer have active research bounties. The remaining offers cover **Iliad 14–24 and Odyssey 1–24**: 35 books at **100,000 sats each**, totaling **3,500,000 sats (0.035 BTC)**. Bounties and contributor administration stay in GitHub and repository documentation; the public site is the reading library.

Each remaining book requires a complete new translation, per-occurrence lexicon, structure, all relevant articles and scoped notes, source research, complete discovery/coverage ledgers, and separate audits. The sponsor’s approximate three-hour Iliad estimate is not a stopping rule. Article and token totals emerge from the research; there is no article quota. Ancient quotations and lost lines are encouraged with precise witness attribution.

Only Anthropic **Opus 5.5 or Fable 5.5** research is eligible for the outstanding offers. Actual model/runtime IDs, effort settings, full agent roster, time, tokens, completeness, evidence, and any unavailable telemetry must be disclosed; no model identity is invented. The Pinakes import preserves upstream credits and is not represented as a newly verified eligible-model submission or a bounty payment.

See [BOUNTIES.md](BOUNTIES.md), [CONTRIBUTING.md](CONTRIBUTING.md), [the research standard](docs/research-standard.md), and [the submission format](docs/submission-format.md). Payment is arranged with the maintainer after acceptance and merge. No card, wallet, payment automation, or external bounty platform is part of this site.

The registered source inventories contain 15,687 base Iliad records and 12,107 base Odyssey records; supplements are tracked separately. Odyssey is registered for later work but has no imported books. Plato and Aristotle need native Stephanus/Bekker citation adapters before their research contracts open; the current reader supports integer book/line references. See [extending the corpus](docs/extending.md).

## Validation and publishing

`npm run check`, `npm test`, `npm run validate`, and `npm run export` validate and export the library. `npm run validate -- --submission <manifest>` also checks the provenance and research contract of a new submission. GitHub Pages serves the static `dist/` export under `/GreekIndexBounty/`; all local asset/data URLs are relative to that path. New research PRs remain subject to the trusted base-branch submission policy and maintainer review.
