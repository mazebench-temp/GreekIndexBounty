# Index audit: Homer, Odyssey, Book 6

Reviewer agent: Claude Opus 5.5 (model ID `claude-opus-5-5`), acting as the independent index auditor. This agent did not write the articles, notes or ledgers under review.

## Scope

- The new and changed index entries of the submission (branch `odyssey-06`, commits after `beee59b`): 103 new entry files and 3 changed entry files (`handmaids`, `olympus`, `posis`).
- The 188 Book 6 notes in `content/library/homer/odyssey/notes/06/`.
- The ledgers in this folder: `candidates.json`, `categories.json`, `coverage.json`, with spot checks of `sources.json`.
- The generated per-line data `site/data/texts/homer.odyssey/6.json` (fields `tk` and `le`).

## Method

### Checked by script

1. **Concordance against the lexicon.** A script paired every token in Book 6 that an entry claims with the lemma at the same position in `lexicon/06.json`. It grouped the result by entry, so that each entry shows the lemmas it claims (252 entries). I read the whole table. A second script listed every pattern hit with its lemma, so that each odd claim can be traced to its pattern and source file (entry or note, in any book). `scripts/homographs.mjs 6` was also run.
2. **Double claims.** A script listed every token in Iliad 1–13 and Odyssey 6 that a new entry and an older entry claim together. Phrase overlaps (a formula and a word inside it) are expected. Two pairs were the same word claimed by two entries (findings 3 and 4).
3. **Missing coverage.** A script listed every lemma of Book 6 that no entry claims, by part of speech: 0 of 26 names, 86 of 240 nouns, 182 of 262 verbs, 47 of 142 adjectives. I compared the list with the `omitted` and `covered` records of `candidates.json` and with existing entries that have the same headword.
4. **Quotations.** A script compared every English quotation followed by a Book 6 citation with the lines of `en/06.txt` (with one line of margin). It reported 63 differences. Most are glosses of single words or paraphrases in reported speech. I read each one. Seven were presented as quotations of the translation but did not match it (finding 14).
5. **Ledgers.** Scripts checked that every `entryId` exists, that every `expanded` record has a Book 6 note, that the `created` records match the new files, that `categories.json` lists the entries that occur in Book 6, and that `coverage.json` covers lines 1–331 once, in blocks of at most 25 lines.

### Read fully

- **Front matter and summary of all new entries** (kinds, tags, `grc`, `en`, `except`, `of`, relations with their evidence lines).
- **Entry bodies:** `alcinous`, `handmaids-of-nausicaa`, `within-shouting-distance`, `odysseus-at-delos`, `famous`, `klytos`, `sweet-as-honey`, `honey-sweet`, `corcyra-and-the-phaeacians`, `aristotle-lions-of-europe`, `the-palm-of-delos`, `sophocles-nausicaa`, `deato-or-doato`, `nausicaas-wish-244-245`, `the-gossip-lines-275-288`, `the-nymphs-cry-122-124`, `title-of-odyssey-6`. For the other new entries I read the sections before `## Outside Homer` by script, to find later sources cited outside that section. All such citations were in name or etymology sections and attributed.
- **66 Book 6 notes:** `nausicaa`, `odysseus`, `athena`, `scheria`, `phaeacians`, `alcinous`, `queen-arete`, `supplication`, `supplication-type-scene`, `xenia`, `washing-clothes`, `handmaids-of-nausicaa`, `handmaids`, `wagon`, `ball-play`, `artemis-among-her-nymphs`, `artemis`, `the-lion-and-the-girls`, `the-mountain-lion-and-the-fold`, `the-palm-shoot-on-delos`, `gold-poured-on-silver`, `like-the-hyacinth-flower`, `like-a-breath-of-wind`, `aristarchus`, `zenodotus`, `aristophanes-of-byzantium`, `homeric-scholia`, `eustathius`, `famous`, `klytos`, `sweet-as-honey`, `chariot-journey`, `marriage`, `posis`, `clothes`, `dream-scene`, `mules`, `aidos`, `polis`, `anacoluthon`, `fathers-and-daughters`, `olympus`, `poseidon`, `tis-speech`, `river-of-scheria`, `phemis`, `charis`, `nymphs`, `house-of-alcinous`, `ships`, `decision-scene`, `zeus`, `prayer-type-scene`, `bathing`, `homophrosyne`, `to-the-land-of-what-mortals`, `dawn-line`, `visit-scene`, `seeing-the-gods`, `thambos`, `gounata`, `the-wrath-of-poseidon`, `nausithous`, `cyclopes`, `daughter-of-dymas`, `sons-of-alcinous`.

### Citation spot checks

I checked about 30 citations against the local copies in the research scratch folder (`research/_src`): Dindorf's scholia (`d6.txt`: Callistratus on 6.29 and 6.310, Aristophanes on 6.74 and 6.264, Zenodotus on 6.1, 6.137 and 6.290, Rhianus on 6.44 and 6.46, Athenocles on 6.144, Megaclides on 6.106, the Simonides note on 6.164, the "brevity" note on 6.116, ἄζετο on 6.329, Ergane on 6.233, the "nature and grace" note on 6.235, the winter note on 6.305, the note on 6.240); Merry and Riddell (`mr6.txt`, `mr_djvu.txt`: "sportive" on 6.65, "wonderland of the West", Euripides *Hippolytus* 1328, the critical note on 6.313–315); LSJ s.v. συνέριθος; Apollonius 4.1222; Athenaeus on Agallis; the Holoka review of Segal (*BMCR* 1995.06.14). All agreed with the text, except that the note on 6.313–315 was not reflected in three notes (finding 12). I also checked Homeric parallels against the Greek of the Iliad and the Odyssey in the repository and in the scratch folder. Two were wrong (finding 10).

## Findings and fixes

1. **`trojans` claims two verbs.** The pattern `Τρώ*` claimed τρώγειν "to graze" (6.90) and τρώχων "ran" (6.318). The candidate ledger planned the fix, but it was not applied. The lexicon audit also reported it. Fix: the exclusions `"!τρωγ*"` and `"!τρωχ*"` in `content/index/peoples/trojans.md`, with a comment that names Od. 6.90, Od. 6.318 and Il. 22.163. Trojans no longer occur in Book 6.
2. **`chariot` claims the mule wagon.** Patterns from Iliad notes (μάστιγα, ἡνία, μάστιξεν, ἵμασεν, ἡνιόχευεν, ἱμάσθλην) made the war chariot occur at 6.81, 6.82, 6.316, 6.319 and 6.320, where the whip and the reins belong to Nausicaa's mule wagon. The `wagon` entry says that the two vehicles are different. Fix: `except: [..., "Odyssey 6.81-82", "Odyssey 6.316-320"]` with a comment in `content/index/objects/chariot.md`. The lines stay with `wagon` and `chariot-journey` (which lists them as refs).
3. **Two entries for κλυτός.** The submission created `klytos`, but the existing entry `famous` already treats κλυτός: its summary names κλυτός in the family, and its Iliad notes (Books 2, 5, 8, 11, 13) claim κλυτός forms. Seven Iliad tokens were claimed by both entries, and the Book 6 note of `famous` needed `except: [6.326]` to avoid an eighth. The candidate reason "No article for plain κλυτός" was false. Fix: the general article of `klytos` (meaning, compounds, the three groups of use, with work names added to the references) became part of `famous`; `famous` now claims κλυτός, κλυτόν, κλυτά, and takes the aliases, tags and `of` of `klytos`. The two Book 6 notes became one note, `notes/06/famous.md` (five uses, κλειτός once and κλυτός four times). `klytos` and its note were deleted, and the three links to it now point to `famous`. The Iliad notes stay unchanged, because a research PR may not edit other books.
4. **Two entries for μελιηδής.** The submission created `sweet-as-honey` for μελιηδής, but the existing entry `honey-sweet` (headword μελίφρων) already claims μελιηδής through its Iliad notes (Books 4, 6, 8, 10, 12). Six tokens (Il. 6.258, 10.495, 10.569, 10.579, 12.320; Od. 6.90) were claimed by both. Fix: the article became a section `## μελιηδής` in `honey-sweet`, whose summary, aliases and `grc` now include the word. One sentence of `honey-sweet` now says "the only sleep that Homer calls μελίφρων", because the merged section cites the μελιηδής sleep of Od. 19.551. The Book 6 note moved to `notes/06/honey-sweet.md`. `sweet-as-honey` was deleted, and two links were changed.
5. **σέβας (6.161) not listed.** The ledger records σέβας as covered by `sebas`, but that entry matched only σέβεσθε, so 6.161 was not among its lines. Fix: `grc: [σέβεσθε, σέβας]` and the English form "awe" in `content/index/words/sebas.md`.
6. **ἥρωος (6.303) not listed.** The notes on Alcinous and his house discuss ἥρωος and its variant ἥρως and link `heros`, but the entry matched only ἡρώων and ἥρως. Fix: `ἥρωος` added to `content/index/words/heros.md`.
7. **"Covered" without a link.** The ledger marks Book 6 lines as covered by `litotes` (6.240) and `gods-and-mortals` (6.16, 6.149–153, 6.243, 6.309), but neither article cites Book 6 and no line was linked to either. Fix: two short notes, `notes/06/litotes.md` (with the scholion on 6.240: "there is clearly some god who brought Odysseus safely here") and `notes/06/gods-and-mortals.md`, with refs. The two records are now `expanded`.
8. **`odysseus-at-delos` not linked to its lines.** The story is told at 6.162–167, but the entry had no refs, so the reader did not show it on any line. Fix: `refs: [6.162-167]`.
9. **Alcinous: relation evidence and an unsupported claim.** The relation "father: nausithous (6.7-12)" cites lines that say only that Nausithous died and Alcinous ruled. The parentage is stated at 7.62–63. The article also called Alcinous "the younger son", which Homer does not say. Fix: evidence changed to (7.62-63), and "the younger son" changed to "a son".
10. **Two wrong parallels in the Odysseus note.** "The same opening verse" (6.130 and Il. 12.299): the verses share only their opening words and end differently. "6.324 = Il. 10.278 = Il. 5.115": 6.324 repeats Il. 5.115, but Il. 10.278 shares only the first half. Fix: both sentences corrected. The `prayer-type-scene` note already stated the second point correctly.
11. **"The first supplication that Odysseus makes in the Odyssey."** The `supplication` note ignored his supplication of the river god the day before ("I come to you as a suppliant", 5.450), which the `river-of-scheria` summary mentions. Fix: "the first supplication of a mortal", with a sentence on 5.450.
12. **6.313–315 treated as certain.** The `house-of-alcinous` note reports, correctly, that Merry and Riddell find 6.313–315 missing in several manuscripts and only in the margin of the Harleian manuscript, and that modern editors generally reject them here. The `queen-arete` note built its argument on 6.313 without this. Fix: a qualifying sentence in `notes/06/queen-arete.md`, which points to the secure text of 7.75–77.
13. **Wrong summary in `within-shouting-distance`.** "Three of them at sea in Odysseus' own story": the first use (5.400) is in the narrator's account of Book 5. The article body was correct. Fix: the summary now says "once in the narrator's account of Book 5 and twice in his own tale".
14. **Quotations that do not match the translation.** Fix: aligned with `en/06.txt`:
    - `corcyra-and-the-phaeacians`: "far from enterprising men" (6.8 reads "grain-eating") and "has dealings with us" (6.205 reads "mingles with us");
    - `aristotle-lions-of-europe`: "along lofty Taygetus … delighting in boars" (6.103–104 read "either along towering Taygetus … delighting in wild boars");
    - `delos`: a quotation of 6.162–163 that left out words without an ellipsis;
    - `notes/06/klytos.md` (now in `famous`): "to wash, which lie dirty" (6.59 reads "to wash them, which lie here soiled");
    - `notes/06/great-hearted.md`: "on him depend …" (6.197 reads "on whom … depend");
    - `notes/06/temenos.md`: "the famous grove sacred to Athena" (6.321–322 read "the famous grove, holy to Athena").
15. **Inconsistent title for Plutarch.** `notes/06/posis.md` cited *How the Young Man Should Listen to Poems*, while twelve other places use *How the Young Man Should Study Poetry*. Fix: standardized.
16. **Entry without a candidate record.** `handmaids-of-nausicaa` is a new entry, but `candidates.json` had no `created` record for it (the record "Nausicaa's handmaids" points to `handmaids`). I judged the two entries to be distinct subjects (the class of serving women, and the group of girls who act in this book), not a duplicate. Fix: a `created` record added.
17. **Ledgers out of step with the index.** `categories.json` listed `trojans` and `chariot` among the entries that occur in Book 6 (only through the false matches of findings 1 and 2), and did not list `heros`. `coverage.json` listed `trojans` and `chariot` in the blocks 76–100 and 301–325. After findings 3 and 4, `klytos` and `sweet-as-honey` were named in all four ledgers. Fix: entry lists, counts and dispositions in `categories.json` recomputed from `candidates.json`; coverage blocks corrected and the two block notes on τρώγειν and τρώχων marked as fixed; the ids replaced in `candidates.json`, `coverage.json` and `sources.json`; candidate records added for `chariot` and updated for `trojans`, `sebas`, `litotes`, `gods-and-mortals`, the κλυτός record and the μελιηδής record.

## Checked and accepted

- **Claims that are correct.** Of the 252 entries that claim tokens in Book 6, the lemma table shows no other wrong lemma. These cases were checked and accepted:
  - Phrase entries that claim particles and pronouns inside their formula (by design).
  - `poseidon` on Ποσιδήιον (6.266): the adjective of the god's name, a pattern older than this submission.
  - `aegis` on αἰγιόχοιο.
  - `goats` on αἰγείῳ "of goatskin".
  - `wine` and `wineskin` on ἀσκῷ.
  - `well-built` on πυκινὸν δόμον: an Iliad-note phrase. The verse 6.134 is Il. 12.301.
  - `aristos` on ἄρειον.
  - `famous` on ἐννοσίγαιος, inside the Iliad-note phrase κλυτὸς ἐννοσίγαιος.
  - `posis`: the exclusion `"!=πόσιν τε"` keeps βρῶσίν τε πόσιν τε "food and drink" (6.209, 6.246, 6.248) out of "husband".
  - `dream` is excepted at 6.49, and `onar` holds ὄνειρον.
- **Separation of the handmaid entries.** `handmaids` and `handmaids-of-nausicaa` are separate subjects. The other overlaps that the script found are phrases inside formulas or similes, or later passages that the new articles discuss (for example `hearth` on πυρὸς ἐσχάραι, Il. 10.418).
- **Capitalized names.** Every capitalized word in Book 6 is claimed. All 26 names in the lexicon are claimed.
- **Unclaimed lemmas.** Every river line (6.59, 85–92, 97, 116, 210, 216, 224, 317) is linked to `river-of-scheria` by refs. The note grc of this site is global, so a pattern ποταμός would claim every river in Homer. θαῦμα (6.306) is linked to `thambos` by refs. The other unclaimed nouns, verbs and adjectives are routine vocabulary for the lexicon (ἀνήρ, γυνή, δίδωμι, ὁράω, καλός and others), parts of a scene that an article treats (the poplars, spring and meadow are in `grove-of-athena`; the harbor and wall are in `scheria`; κίων is in `house-of-alcinous`), or rare words handled in the lexicon notes (συνέριθος, εἰσίθμη, πλίσσομαι, ἀδευκής, ἀμφάδιος). These agree with the `omitted` records of the ledger, and no further entry is needed.
- **Scope.** Entry summaries are general. The exceptions are similes and stories that occur only in Book 6, where a general summary is the Book 6 event. Later sources stand under `## Outside Homer` or are attributed in name and etymology sections.
- **Links.** All links resolve (build: 0 missing links).

## Remaining scholarly uncertainty

- **Odysseus at Delos.** The story has `period: cypria`. Homer names neither Troy nor the occasion. The period rests on the scholion that cites Simonides and on Merry and Riddell, and the article says so.
- **6.313–315.** Murray prints the lines. Merry and Riddell report that most modern editors reject them in Book 6. The notes now state both facts. The index keeps the lines, because the base text has them.
- **Eustathius page numbers.** The OCR of Stallbaum's Eustathius in the scratch folder is too poor to confirm page numbers by search. These citations rest on the page images recorded in `sources.json`.
- **Sources not checked locally.** Carrara 2022 (open access, recorded as consulted), Pausanias, Plutarch, Thucydides, Strabo, Pliny and Cicero have no local copy in `_src`. Their cited content agrees with the standard texts as I know them, but I did not read them again for this audit.
- **Broad patterns.** `ὄλβ*`, `πομπ*`, `γαστ*` and `πτωχ*` are safe in Book 6. When more Odyssey books arrive, run the homograph check on them again. The comments in `wagon` (ἄμαξαν, the Great Bear) and `palm-tree` (Φοίνικος, the name Phoenix) already say which lines to except later.
- **Structure of `famous`.** κλειτός and κλυτός now share one entry, as the Iliad notes already assumed. Another option is a split into two entries. That would need the Iliad notes for Books 2, 8 and 13 to move, which is outside the scope of this contract.

## Post-fix build output

`node --preserve-symlinks-main /Users/raunaqsharma/greekidx/scripts/build.mjs --dry --verbose`:

```
GreekIndexBounty: 2690 entries (2690 articles), 110 stories, 2197 quotes, 8757 lines, 5412 lemmas — 32819 ms
exit code: 0
```

No `!` warnings, no `?` unindexed names, no `→` missing links, no `✗` errors. `site/data/report.json` after the full build: errors 0, warnings 0, unindexed names 0, missing links 0, unsaved quotes 0. The entry count fell by two (from 2692) because of the merges in findings 3 and 4.

Other checks:

- `node scripts/validate.mjs`: "Validation passed (content only)". Every changed file is inside the research contract. No Iliad note was changed.
- `node --test tests/*.test.mjs`: 35 passed, 0 failed.
- `node scripts/homographs.mjs 6`: `trojans` is no longer reported. The four remaining reports are Iliad 6 families that are older than this submission (Ἑκτορίδης, γοάω, εὐχετάομαι).

issuesFound: 17
issuesResolved: 17

auditAgent: a36d563d0b14916ac (independent Opus 5.5 helper; did not write the audited files)
