# Sources audit: Homer, Odyssey 6

Reviewer: Anthropic Opus 5.5, independent sources auditor. This reviewer did not write the articles, the notes or the source ledger.

Standard: docs/research-standard.md, sections 1, 5 and 7, and docs/submission-format.md, "Research ledgers".

Date: 2026-10-07.

## Scope

- The source ledger `sources.json` (331 records before the audit).
- The base-edition record `perseus-odyssey-murray-grc` (Murray, Perseus tlg0012.tlg002.perseus-grc2 at commit ceeb60d9).
- The external citations in the Book 6 articles and notes: every file under `content/index/` that the branch `odyssey-06` changes, and every file in `content/library/homer/odyssey/notes/06/` (298 files).
- The life dates in the new author entries `alcman`, `pausanias`, `polygnotus`, `pliny-the-elder`, `lucretius`, `eustathius`, `aristophanes-of-byzantium` and `joyce`.
- The rights of quoted material.

## Method

1. Ledger integrity by script. A Python script checked each record for the ten required fields, an http(s) URL, a `YYYY-MM-DD` date, `access: consulted`, unique IDs, the three required kinds, and that each entry ID resolves to an article with a summary and a body. A second pass grouped records by work and locator to find near-duplicates. A third pass found references to local files that are not in the repository.
2. Verification sample. The reviewer opened the local copies and, where no copy existed, downloaded the source again. The reviewer read the page images of Dindorf pp. 293, 294, 296, 297, 298, 302, 303, 304, 307, 308, 311, 314, 316, 317, 318, and the apparatus image of Monro and Allen, leaf n127. The reviewer read the archive.org OCR of Dindorf, Merry and Riddell, Eustathius (Stallbaum) and the 1908 Oxford text through the archive.org page index, and matched each leaf to its printed page. The reviewer extracted each cited section of the Perseus TEI files by its citation markers. The reviewer read LSJ entries in the Perseus LSJ XML by entry ID.
3. Article citations. A script extracted every sentence in the 298 files that names an ancient author, a modern scholar, a lexicon, a scholion or a page. The reviewer read all 1,338 sentences and checked each distinct passage against a ledger record or against the source itself.
4. Rights. A script listed every quotation longer than 180 characters in the 298 files. The reviewer identified the source of each.
5. After the fixes: the build check, the content validator and the test suite.

## Records verified

The reviewer confirmed the locator and the finding of these records against the source. The IDs are the IDs after the audit.

- Base text: `perseus-odyssey-murray-grc` (331 consecutive lines in Book 6, 12 `q` elements, editor Murray, publisher Trustees of Tufts University, no licence statement in the file).
- Scholia (Dindorf): `schol-od-6-3-9-dindorf-294`, `g8-schol-od-6-hypothesis-dindorf-293`, `g2-schol-od-6-20-23-dindorf`, `g6-schol-od-6-28-32-dindorf-296`, `schol-od-6-40-46-dindorf-297`, `schol-od-6-48-dindorf-298`, `schol-od-6-86-116-dindorf-301-303`, `schol-od-6-102-108-dindorf-302-303`, `schol-od-6-119-125-dindorf-304`, `g3-schol-dindorf-6-108-133`, `g2-schol-od-6-149-152-dindorf-306`, `schol-od-6-157-167-dindorf-307-308`, `g2-schol-od-6-187-208-dindorf-310-312`, `g8-schol-od-6-3-8-195-204`, `schol-od-6-201-204-dindorf-311`, `schol-od-6-228-239-dindorf-313`, `schol-od-6-242-245-dindorf-314`, `schol-od-6-262-268-dindorf-315-316`, `schol-od-6-273-291-dindorf-317`, `schol-od-6-291-330-dindorf-318-320`, `g4-dindorf-schol-od6` (the note on 1.349, p. 62).
- Textual edition: `oct-1908-od-6-apparatus` (entries for 106, 108, 115, 122, 132, 137, 144, 201, 207, 208, 224-316, 239, 242, 244, 245, 264, 269, 275-288, 287, 289, 290, 291, 297, 303, 313-315, 329).
- Commentaries: `eustathius-od-6-100-119-pp241-242`, `eustathius-od-6-242-245-pp251-252`, `eustathius-od-6-265-p253`, `g3-eustathius-od-6`, `g7-eustathius-od6`, `g6-eust-od-6-38-40-p236`, `g6-eust-od-6-92-p240`, `g8-eustathius-od-6-p234`, `merry-riddell-1-349-p40`, `merry-riddell-5-34-p212`, `merry-riddell-6-40-47-pp255-257`, `merry-riddell-6-162-p266`, `merry-riddell-6-242-p273`, `merry-riddell-6-244-p274`, `merry-riddell-6-262-269-pp275-277`, `merry-riddell-6-273-289-pp277-278`, `g2-merry-riddell-6-102-107-pp261-262`, `g6-mr-6-100-101`, `g6-mr-6-180-185`, `g6-mr-6-231`, `g1-merry-riddell-6-notes` (pp. 265, 286, 319).
- Lexica: `lsj-dieros`, `lsj-deato-doassato`, `lsj-epistion`, `lsj-euthronos`, `lsj-thronon`, `lsj-alphestes`, `lsj-hypereia-ogygios`, `lsj-scheria`, `lsj-sphaira-ball`, `g2-lsj-delos`, `g1-autenrieth-nausikaa`.
- Primary and reception texts: `thucydides-1-25-4-3-70-6-2-1`, `strabo-1-2-6-2-7-3-9-2`, `g2-strabo-8-5-1-8-5-7-8-3-12-8-3-32`, `pausanias-8-48-2-3`, `pausanias-1-22-6-5-17-5-5-19-9`, `g2-pausanias-3-1-2-3-20-4-8-24-4-5`, `g5-pausanias-5-9`, `g8-pausanias-10-27-4`, `hymn-apollo-14-18-113-119-146-150`, `hymn-aphrodite-82-102`, `g7-hymn-hermes`, `g7-hymn-hephaestus`, `apollonius-argonautica-4`, `athenaeus-1-14d-15a`, `athenaeus-1-20e-f`, `plutarch-aud-poet-8-27a-b`, `g2-plutarch-de-facie-26`, `aristotle-rhet-3-14-11`, `aristotle-poetics-search`, `g8-aristotle-ha-6-31-8-28`, `g8-herodotus-7-125-126`, `g5-herodotus-1-193`, `g8-aelian-vh-13-14`, `g7-plato-statesman`, `g7-theocritus-10`, `euripides-hecuba-455-465`, `cicero-leg-1-2`, `g8-cicero-nd-1-18`, `pliny-nh-16-240`, `g8-pliny-nh-4-52`, `lucretius-3-1-25`, `virgil-aeneid`, `ovid-met-4-320-328`, `gellius-9-9-12-17`, `g1-horace-epistles-1`.
- Modern works: `g8-carrara-2022-nausicaa`, `chernysheva-2017-thronos`, `bmcr-2024-05-19-psoma-corcyra`, `bmcr-2024-03-15-arft-arete`, `bmcr-1995-06-14-segal`, `g1-dejong-bmcr-2002-06-12`, `g1-cook-2003-dougherty`, `butler-authoress-1897`, `g8-joyce-ulysses-13`, `g8-wikipedia-ulysses`, `g8-goethe-italienische-reise`, `g8-tar-2009-goethe-nausikaa`, `g8-tennyson-passing-of-arthur`, `g8-tennyson-lucretius-1868`.
- New records that this audit verified and added: `plato-republic-10-614b`, `virgil-georgics-2-87`, `hesiod-works-and-days-11-26`, `smith-dgrbm-alcman`, `wikipedia-author-dates-2026-10-07`.

The sample covers every writer group (lead, g1-g8) and every kind. It includes every record behind the textual notes and the reception articles that the task names:

- athetesis of 244-245: `schol-od-6-242-245-dindorf-314`, `oct-1908-od-6-apparatus`, `merry-riddell-6-244-p274`, `eustathius-od-6-242-245-pp251-252`;
- athetesis of 275-288: `schol-od-6-273-291-dindorf-317`, `oct-1908-od-6-apparatus`, `merry-riddell-6-273-289-pp277-278`;
- δέατʼ/δόατʼ: `oct-1908-od-6-apparatus` (image of leaf n127: δέατʼ with a small ο above, L8), `lsj-deato-doassato`, `merry-riddell-6-242-p273`, `eustathius-od-6-242-245-pp251-252`, `schol-od-6-242-245-dindorf-314`;
- ἐΰθρονος: `schol-od-6-48-dindorf-298`, `lsj-euthronos`, `lsj-thronon`, `chernysheva-2017-thronos` (p. 232);
- διερός: `schol-od-6-201-204-dindorf-311`, `lsj-dieros`, `oct-1908-od-6-apparatus`, `g4-merry-riddell-od6` (p. 270);
- Scheria and Corcyra: `thucydides-1-25-4-3-70-6-2-1`, `strabo-1-2-6-2-7-3-9-2`, `g8-pliny-nh-4-52`, `apollonius-argonautica-4`, `schol-od-6-3-9-dindorf-294`, `g8-schol-od-6-3-8-195-204`, `schol-od-6-201-204-dindorf-311`, `merry-riddell-5-34-p212`;
- the palm of Delos: `hymn-apollo-14-18-113-119-146-150`, `euripides-hecuba-455-465`, `cicero-leg-1-2`, `pliny-nh-16-240`, `pausanias-8-48-2-3`, `schol-od-6-157-167-dindorf-307-308`, `merry-riddell-6-162-p266`;
- Athenaeus 1.14d and 1.20e-f: `athenaeus-1-14d-15a`, `athenaeus-1-20e-f` (Kaibel book 1, chapters 25 and 37 in the TEI file);
- Sophocles' *Nausicaa* or *Plyntriai*: `athenaeus-1-20e-f`, `eustathius-od-6-100-119-pp241-242` (image of p. 241), `g8-carrara-2022-nausicaa` (pp. 9, 13-16, 19);
- Aristotle, *Rhetoric* 3.14.11: `aristotle-rhet-3-14-11` (the quotation of Od. 6.327 at 1415b; Perseus labels it "Od. 7.327");
- Lucretius 3.18-22: `lucretius-3-1-25`, `merry-riddell-6-40-47-pp255-257` (p. 256);
- Plutarch 27A-B: `plutarch-aud-poet-8-27a-b` (milestones 27a and 27b in the TEI file).

Total: 109 records checked against the source (more than half of the 213 records after the audit).

## Findings and fixes

1. **Near-duplicate records.** The eight writer groups and the lead logged the same work at the same locator many times. Examples: Cicero, *De Legibus* 1.2 five times; Pliny 16.240 five times; Plutarch 27A-B five times; Merry and Riddell p. 266 four times; the Oxford apparatus five times; Dindorf p. 294 four times. Fix: 62 groups (183 records) were merged into 62 records. Each merged record keeps the union of the entry IDs and the findings of all its sources. Two combined records (`g1-schol-dindorf-314-317`, `g6-schol-od-6-244-275-dindorf-314-317`) only repeated the content of the p. 314 and p. 317 records. Their entry IDs were moved into those two records, and the combined records were removed. The heavily repeated findings (Thucydides, Strabo, Pausanias 8.48, Cicero, Pliny, the Hymn to Apollo, Plutarch, Aristotle, Lucretius, Athenaeus, Apollonius, Eustathius, Butler, the Oxford apparatus, Dindorf pp. 314 and 317, Merry and Riddell on 1.349) were rewritten once, with each distinct fact kept.
2. **References to files outside the repository.** 47 places in titles, locators and findings cited `research/_src/...`, `research/uncertainties.md` or `research/sources-draft.json`. These files are in the lead's scratch area and are not in the submission. Fix: all such references were removed or replaced by a description of the source (for example "page image read").
3. **Records with no entry IDs.** `merry-riddell-6-242-p273`, `lsj-thronon`, `lsj-deato` and `lsj-doassato` had empty `entryIds`. Fix: they now link to `deato-or-doato` and `of-the-fair-throne` (by merge or by addition).
4. **Wrong page for Merry and Riddell on 1.349.** The record `merry-riddell-1-349-p41` and the note `notes/06/phaeacians.md` cited p. 41. The discussion of ἀλφηστῇσιν is on p. 40 (the note on 1.347-349 runs pp. 39-40). Fix: the record is now `merry-riddell-1-349-p40` (merged with `g4-merry-riddell-od1`), with URL `page/40`. The note now cites p. 40.
5. **Wrong page for the scholion on 6.195.** The scholion E.T. on 6.195 is on Dindorf p. 310. Page 311 begins after 6.200 (page image). `g8-schol-od-6-3-8-195-204`, `content/index/reception/corcyra-and-the-phaeacians.md` and `notes/06/homeric-scholia.md` cited p. 311. Fix: p. 310 in the record and the article; "pp. 294, 310-311" in the note.
6. **Other Dindorf page ranges.** `g2-schol-od-6-149-152-dindorf-307` cited p. 307. The page image of p. 307 begins at 6.155, so 6.149 and 6.152 are on p. 306. `g2-schol-od-6-187-208-dindorf-310-311` gave pp. 310-311, but 6.207-208 are on p. 312. `g2-schol-od-6-321-330-dindorf-319` gave pp. 318-319, but 6.318-330 are on p. 320. Several records said "about p." or "page estimated" for pages that the images or the page index confirm (pp. 295, 303, 305, 310, 317). Fix: the locators and IDs were corrected (`g2-schol-od-6-149-152-dindorf-306`, `g2-schol-od-6-187-208-dindorf-310-312`, `schol-od-6-291-330-dindorf-318-320`), and "about" was removed where the page is now confirmed.
7. **The palm scholion: line number and sigla.** Dindorf prints the note on the palm under the lemma 163 (φοίνικος νέον ἔρνος). `content/index/reception/the-palm-of-delos.md` cited "scholia on 6.162" and gave the statement "he means the palm that sprang up for Leto" to ms. E alone. On the page image, ms. E has only the gloss ἀειθαλὲς φυτόν; the statement about Leto is signed E.V. (and Dindorf notes that E omits φοίνικα). Fix: the article now cites 6.163 in its source line and text, and gives the statement to mss. E and V. The record `schol-od-6-157-167-dindorf-307-308` uses Dindorf's lemma number.
8. **Eustathius pages.** `eustathius-od-6-242-245-p251` cited p. 251 for the glosses of δέατο and ἅδοι. Page 251 has the paraphrase (ἀεικέλιος ἐδόκει εἶναι); the glosses δέατο = ἐδόκει and ἅδοι = ἀρέσκοι are on p. 252. `g7-eustathius-od6` gave only the Rome page 1561 for the note on the hyacinth and the gilded silver; the note is on Stallbaum vol. 1, p. 251. `g3-eustathius-od-6` gave "about" pp. 237 and 248; both pages are confirmed. Fix: the record is now `eustathius-od-6-242-245-pp251-252`; the locators give Stallbaum's pages. `gold-poured-on-silver.md` and `like-the-hyacinth-flower.md` now cite Stallbaum vol. 1, p. 251.
9. **Approximate page citations in articles.** Six files cited "Dindorf about p." or "Stallbaum vol. 1, about p." for pages that the audit confirmed: `epithets/much-prayed-for.md` (p. 317), `epithets/much-tried.md` (pp. 310, 248), `epithets/sea-purple.md` (p. 237), `notes/06/easily-known.md` (p. 303), `notes/06/much-prayed-for.md` (p. 317), `notes/06/wild.md` (p. 305). Fix: "about" was removed.
10. **Oxford apparatus finding.** The record said that one manuscript omits 6.224-316. The apparatus (image of leaf n127) reads "224-316 om. Pal. V1", two sigla. Fix: the finding now names Pal. and V1. The merged finding lists every apparatus entry that the articles use.
11. **Carrara 2022 locators.** The record gave "pp. 12-19 (notes 19-77)", but notes 69-77 are on pp. 20-21. `sophocles-nausicaa.md` said "Radt's edition of the fragments counts the pair among the transmitted double titles". Carrara (p. 15, note 36) cites Radt 1983, p. 189, an article, not the edition of the fragments. The same article cited pp. 13-14 for a discussion that runs to p. 15, and pp. 16-17 for a date that Carrara gives on p. 16. Fix: the record locator is pp. 9, 12-21, with notes 36 and 61-62 located. The article now reads "Radt (1983) counts the pair among the transmitted double titles ('überlieferte Doppeltitel'), as Carrara reports (p. 15, note 36)", and cites pp. 13-15 and p. 16.
12. **Joyce: episode numbers.** `joyce.md` and `joyce-nausicaa.md` said that the published novel gives its episodes numbers only. The consulted Wikipedia article states that the episodes have no chapter headings or titles and are numbered only in Gabler's edition. The Gutenberg e-text adds bracketed numbers. Fix: both articles now say that the published novel gives the episodes no titles. The ledger records `g8-joyce-ulysses-13` and `g8-wikipedia-ulysses` now record this, and the second record now also records the 1920 prosecution that `joyce-nausicaa.md` reports.
13. **Merry and Riddell on 6.185.** `notes/06/homophrosyne.md` cited p. 268 for Nauck's "verba vitiosa". The note on 6.185 runs from p. 268 to p. 269, and Nauck's judgement is on p. 269. Fix: the note now cites pp. 268-269.
14. **Article citations without a ledger record.** Five cited passages had no consulted source: Plato, *Republic* 10.614b (the pun on "a tale of Alcinous", `alcinous.md`); Virgil, *Georgics* 2.87 (`alcinous.md`); Virgil, *Aeneid* 2.792-794 (Creusa, `like-a-breath-of-wind.md`); Hesiod, *Works and Days* 11-26 (`notes/06/eris.md`); Hymn to Aphrodite 82 (`god-or-mortal.md`). Fix: the reviewer read each passage in the Perseus file. All five citations are correct. Three new records were added (`plato-republic-10-614b`, `virgil-georgics-2-87`, `hesiod-works-and-days-11-26`), and the Virgil and Hymn to Aphrodite records now include 2.792-794 and line 82.
15. **Life dates without a consulted source.** The eight new author entries give dates and facts (for example "seventh century BCE", "second century CE", "died in the eruption of Vesuvius in 79 CE", "twelfth century, archbishop of Thessalonica", "late third and early second centuries BCE", "1882-1941"). Articles also give Ephorus "of the fourth century BCE", Apollonius "third century BCE" and Butler "died 1902". No ledger record supported these. Fix: the reviewer checked each date in the English Wikipedia articles (accessed 2026-10-07) and, for Alcman, in Smith's *Dictionary of Greek and Roman Biography* (Perseus). Every date in the entries agrees with these sources. The book counts (Pausanias 10, Pliny 37, Lucretius 6) agree with the book divisions in the Perseus files. Two records were added (`smith-dgrbm-alcman`, `wikipedia-author-dates-2026-10-07`); the Butler record now records the death date from Festing Jones' introduction.
16. **Wrong URL and titles for Iliad records.** `g2-iliad-9-516` pointed to the project's own repository on GitHub instead of a source. `g2-iliad-olympus-lines` had a title for the repository copy and a Perseus URL. Fix: both records now point to the Perseus Iliad file and name the repository copy as a secondary copy.
17. **Incomplete bibliographic data.** `g1-dejong-bmcr-2002-06-12` did not name the reviewer, and its locator named a local file. Fix: the title now names R. Scodel, and the locator names the paragraph on "open ends".
18. **Leads and limits not in the submission.** The list of unconsulted leads and the OCR limits existed only in the lead's scratch area. Fix: `evidence/research-limitations.md` now lists the leads that were not opened, the passages cited only at second hand, the pages read only from OCR, and the other limits.

## Rights

Every quotation longer than 180 characters in the 298 files is the project's own translation of an ancient text in the public domain (Ovid, Apollonius, Lucretius, Pausanias, the scholia, Homer, Aelian, Virgil, Plutarch). The quotations from modern works are short: single phrases from Merry and Riddell (1886, public domain), Butler (1897), Goethe, Tennyson and Joyce (public domain), and short phrases from BMCR, Carrara 2022 (CC BY 4.0) and Chernysheva 2017. No restricted modern work is copied at length. The ledger quotes only short phrases from the BMCR reviews and the Wikipedia articles.

## Remaining uncertainty

- The ledger cites the scholia from Dindorf (1855), not from Pontani's modern edition. The manuscript sigla and the page numbers are Dindorf's.
- Many page numbers come from the archive.org OCR with the page index, not from the page images. `evidence/research-limitations.md` lists them.
- The Casaubon letter of the Sophocles sentence in Athenaeus (1.20e or 1.20f) is not confirmed from a printed edition. The articles give "1.20e-f" or "1.20f" with Carrara's "Epitome 1.20F".
- Whether the Nausicaa and the Plyntriai are one play is a scholarly inference from two witnesses. The articles present it as Carrara's report of a long-standing view.
- The fragment numbers of Alcman (PMG), Ephorus (FGrHist) and Simonides were not checked. The articles do not give them.
- Merged findings keep the wording of each original record, so some repeat a point.
- Wikipedia is a tertiary source. The ledger uses it only for life dates and for the publication history of *Ulysses*.

## Post-fix result

- Ledger: 213 records (331 before; 183 records merged into 62, 2 combined records removed, 5 records added). All records have the ten fields, an http(s) URL, a valid date and `access: consulted`. IDs are unique. All entry IDs resolve to articles with a summary and a body. No record references a local file. No two records share the same work and locator. Kinds: lexical 59, commentary 39, reception 37, scholia 35, primary 32, scholarship 11.
- `node --preserve-symlinks-main /Users/raunaqsharma/greekidx/scripts/build.mjs --dry --verbose`: no warnings, no errors, no missing links (2690 entries, 2197 quotes).
- Full build, `site/data/report.json`: errors 0, warnings 0, unindexed names 0, missing links 0, unsaved quotes 0.
- `node scripts/validate.mjs`: "Validation passed (content only)".
- `node --test tests/*.test.mjs`: 35 passed, 0 failed.

issuesFound: 18
issuesResolved: 18
auditAgent: a3526d036cc3cdf66 (independent Opus 5.5 helper; did not write the audited files)
