# Integration audit: Homer, Odyssey, Book 6

Reviewer: Anthropic Opus 5.5 (model ID `claude-opus-5-5`), acting as the independent integration auditor. This reviewer did not write the translation, the lexicon, the structure, the articles, the notes or the ledgers.

Standard: docs/research-standard.md, section 7 ("The integration audit verifies scene/speech consistency, stable IDs, article scope, quotations after translation edits, citations and witness labels, lexical homographs, links, mobile reader interactions, and the final diff"); CONTRIBUTING.md, steps 7 to 9; docs/review-checklist.md.

Date: 2026-10-07.

## Scope

- Branch `odyssey-06` against `origin/main`, with the uncommitted changes of the four earlier audits.
- `content/library/homer/odyssey/grc/06.txt`, `en/06.txt`, `lexicon/06.json`, `structure/06.json` and `TRANSLATION.md`.
- The Book 6 notes in `content/library/homer/odyssey/notes/06/` and every changed file in `content/index/`.
- `content/quotes/homer.odyssey.json`.
- The ledgers `candidates.json`, `categories.json`, `coverage.json` and `sources.json`.
- The generated reader data `site/data/texts/homer.odyssey/6.json` and `site/data/report.json`.
- The four earlier audit reports (translation, lexicon, index, sources).

## Method

The scripts were run through the symlink `/Users/raunaqsharma/greekidx`, because the npm scripts print nothing when the path has spaces.

1. **Structure.** A script compared each speech in `structure/06.json` with the opening and closing quotation marks of `grc/06.txt` and `en/06.txt`. The reviewer downloaded the Perseus TEI file at the pinned commit (`tlg0012.tlg002.perseus-grc2.xml` @ ceeb60d9) and listed the line span of each `<q>` element in Book 6. The reviewer read the eight scene summaries and the two day notes against the English. The validator resolves speaker and addressee IDs.
2. **Quotations.** `scripts/checkquotes.mjs homer.odyssey` was run. That script strips references with "Od." or "Odyssey" and also reads bare references in Iliad articles as Odyssey lines, so a second script was written for this audit. It reads every `“…”` quotation in `content/index/` and in the Odyssey notes. It treats a reference as Odyssey 6 when the reference has "Od." or "Odyssey", or when the file is an Odyssey note or an entry with `work: homer.odyssey`. It compares the quotation with `en/06.txt`, with one line of margin. A third script found quotations without a reference that share four or more consecutive words with Book 6 but do not match it. The reviewer read every reported item in context and separated quotations of the translation from glosses, literal renderings and quotations of other authors.
3. **Homographs.** `scripts/homographs.mjs 6` was run. A script listed, from the reader data, the lemma and the claiming entries of every token of πόσις, κήρ, κῆρ, μῆδος, τρώγω, τρωχάω and ἀπήνη in Book 6. A second script listed, for every entry whose patterns this branch changed (`famous`, `honey-sweet`, `chariot`, `handmaids`, `trojans`, `posis`, `sebas`, `heros`, `olympus`, and the related `wagon`, `food-and-drink`, `ker-doom`, `ker-heart`, `nakedness`, `harsh-king`), every lemma that it claims in all 14 books with a lexicon.
4. **IDs and scope.** A script compared the titles, aliases and Greek headwords of the 106 new entries with all other entries. A script listed the entries that occur on Book 6 lines (fields `le` and `lp`) and compared them with the notes in `notes/06/` and with `categories.json`. The reviewer checked the `work` field of every changed entry and the front-matter references of the nine changed Iliad entries.
5. **Witnesses.** The reviewer checked `bounties/registry.json` for gaps in Odyssey 6, looked for `witnesses/06.json`, and searched the notes for claims of restored lines.
6. **Final diff.** `git diff --name-only origin/main...HEAD` and `git status --porcelain` were checked against the rules of `validateChangeSet` in `scripts/validate.mjs`.
7. **Reader data.** After a full build, a script checked every token of `6.json` for a lemma, a gloss and a parse, and every entity span for its bounds in the English line. The reviewer read the token data of lines 11, 12, 57, 73, 88, 90, 129, 158, 209, 244, 246, 248, 277, 282 and 318.
8. **Export.** `scripts/export.mjs` was run.

## Findings and fixes

1. **6.327 quoted in three forms.** The translation reads "Grant that I may come to the Phaeacians as one dear to them and pitied." Nine places quoted the request as "dear and pitied", "as one dear and pitied" or "grant that I come to the Phaeacians dear and pitied", including three quotations of Aristotle, *Rhetoric* 3.14.11, who quotes this verse. Fix: aligned with the translation in `index/formulas/dear-and-pitied.md` (summary, the pattern line, the Aristotle quotation) and in the notes `dear-and-pitied`, `gold-poured-on-silver`, `the-wrath-of-poseidon`, `prayer` (two places), `pity` and `odysseus`.
2. **6.207–208 quoted in a word order that the translation does not have.** The translation reads "for from Zeus are all / strangers and beggars". Five places gave "strangers and beggars are all from Zeus" or "strangers and beggars all come from Zeus". Fix: `index/words/ptochos.md`, `index/words/xenia.md`, `notes/06/to-the-land-of-what-mortals.md`, and the summaries of `notes/06/xenia.md` and `notes/06/ptochos.md` now quote "from Zeus are all / strangers and beggars". Unquoted paraphrases and labels ("strangers and beggars are from Zeus" in passage labels, quote titles and the scene summary 198–250) stay.
3. **κλυτὸς ἐννοσίγαιος rendered "the famous earth-shaker".** TRANSLATION.md fixes the formula as "the famous shaker of the earth" (6.326), and the Iliad translation has the same words at 9.362. The general article `index/epithets/famous.md` quoted "the famous earth-shaker" for Il. 9.362, Od. 5.423 and 6.326. The note `notes/06/famous.md` used the same words in its summary and quoted 5.423 in a form that differs from the quotation of 5.423 in `notes/06/poseidon.md`. Fix: all three places now read "the famous shaker of the earth".
4. **Formula article not updated after the translation audit.** The translation audit fixed ἄλλʼ ἐνόησε(ν) as "thought of something else" (TRANSLATION.md, 6.112 and 6.251) and changed the `en` pattern of `index/formulas/thought-of-another-thing.md`. The title, the summary, the gloss of ἄλλʼ, the quotation of the formula verse (which is 6.112) and the quotation of 23.241–246 still had "thought of another thing". Fix: all five now use "something else". The verse quotation now cites 6.112. The ID stays `thought-of-another-thing`. The old title and "thought of another thing" are aliases, so old links and searches still resolve.
5. **Other quotations of Book 6 that did not match en/06.txt.** Each one was presented as the words of the translation. Fix: aligned with the current English.
   - `index/epithets/thrice-prayed-for.md`: "three times blessed" (6.154–155) is now "thrice blessed".
   - `index/epithets/unbroken.md`: "an unwed girl" (6.109, 6.228) is now "the unwed maiden".
   - `index/people/nausicaa.md`: "such as this man" (6.244–245) is now "such a man".
   - `index/peoples/handmaids-of-nausicaa.md`: "all beautiful" (6.108) is now "all are beautiful".
   - `index/reception/plutarch-on-nausicaas-wish.md`: "a husband and a house, and like-mindedness" is now "a husband and a home" and "like-mindedness" (6.181).
   - `index/reception/the-gossip-lines-275-288.md`: "she felt shame to name her blooming marriage" is now "the marriage of her prime" (6.66).
   - `index/rituals/washing-clothes.md`: "with clean clothes on his skin" is now "on your skin", as Nausicaa says it to her father (6.61).
   - `index/formulas/to-the-land-of-what-mortals.md`: the summary quoted the formula verses as "arrogant and savage and not just, or kind to strangers, with a god-fearing mind". It now quotes the words of 6.120–121: "arrogant and savage and not just", "kind to strangers", "mind god-fearing".
   - `index/similes/the-lion-and-the-girls.md`: "bred in the mountains, trusting in his courage" is now "mountain-bred lion, trusting in his courage" (6.130); "appeared terrible to them" is now "Terrible he appeared to them" (6.137).
   - Notes: `daughter-of-zeus` ("child of Zeus", 6.229); `famous-for-ships` ("but for masts", 6.271); `famous` ("in council, to which the noble Phaeacians were calling him", 6.55, after the lexicon audit fixed κάλεον); `food-and-drink` ("He, much-enduring brilliant Odysseus, drank and ate / greedily; for he had long been without a taste of food", 6.249–250); `gods-and-mortals` and `seeing-the-gods` ("but now he is like the gods who hold the wide sky", 6.243); `gold-and-silver` (the quotation "poured grace upon him" now cites 6.235, where the words occur); `grove-of-athena` ("but she did not yet appear to him face to face", 6.329); `ker-heart` ("prevailing by the weight of his bride-gifts", 6.159); `mules` ("to the carriage", 6.73, with the literal "under the carriage" marked as literal); `onar` ("she wondered at the dream", 6.49; "to tell it to her parents", 6.50); `parthenos` ("the girl", 6.147); `soothing-words` ("stand apart and with soothing words / entreat her", 6.143–144; γουνοῦμαι is now "I beseech you", as at 6.149, with "I clasp your knees" given as the literal sense); `thambos` ("I admire you, lady, and stand amazed, and I am terribly afraid / to touch your knees", 6.168–169); `the-phaeacians-leave-hypereia` ("kept doing them harm", 6.6); `well-rounded` ("a carriage, / high, with good wheels", 6.57–58); `xenia` and `aidos` ("I feel shame / to strip naked", 6.221–222); `posideion` ("very overbearing men among the people", 6.274); `nausicaa` ("Terrible he appeared to them, marred by the brine", 6.137); `marriage` ("And who is this following Nausicaa, a handsome and tall / stranger? … Surely he will be a husband for her", 6.276–277); `phaeacians` ("Not against the will of all the gods who hold Olympus / does this man mingle with the godlike Phaeacians", 6.240–241).
6. **Two English versions of Od. 7.1–2.** `notes/06/grove-of-athena.md` and `notes/06/meanwhile-transition.md` quoted the first verses of Book 7 in two different forms. Fix: `grove-of-athena` now uses the form of `meanwhile-transition`, which also agrees with the formula article `meanwhile-transition` and the note `much-enduring`.
7. **Scene summaries not in the words of the translation.** In `structure/06.json`, the scene 48–84 said that Alcinous orders the slaves "to make ready the wagon"; his order is ἀπήνην, "a carriage" (6.69). The scene 251–320 said that the queen sits "twisting sea-purple yarn"; the translation has "turning the sea-purple wool" (6.53, 6.306), and the scene 48–84 already used that phrase. Fix: both summaries now use the words of the translation. The other summaries were checked: "carriage" stands for ἀπήνη and "wagon" for ἄμαξα (6.37, 6.72, 6.260), and no summary uses the old wording of 6.251 or 6.254.
8. **Summary of the 6.254 note.** `notes/06/called-him-by-name.md` had the summary "Nausicaa “spoke to him, and addressed him” to Odysseus", which repeats the object. Fix: "When she was ready to leave the river, Nausicaa urged Odysseus on, “and spoke to him, and addressed him” (6.254)."
9. **A Book 6 note for an entry that does not act in Book 6.** `notes/06/dream.md` said that "The personified Dream of Iliad 2 has no part in Book 6". It existed only to carry `except: [6.49]`, so that the pattern ὄνειρον of the god Dream does not claim the common noun at 6.49. Because of the note, `candidates.json` gave the record "Dream (personified)" the disposition `expanded`, and `categories.json` listed `dream` among the 14 god entries that "occur in Book 6". The entry occurs on no line of Book 6. Fix: the exception moved into the entry, `content/index/gods/dream.md` (`except: ["Odyssey 6.49"]`, with a comment that names the common noun and `onar`), as `chariot` already does. The note was deleted. The candidate record is now `omitted` as a disproven lead, with the reason. The god review in `categories.json` now lists 13 entries and the dispositions "7 covered, 6 expanded, 1 omitted". After the rebuild, ὄνειρον (6.49) is still claimed by `onar` and not by `dream`. The Book 6 notes that link `[[dream]]` (`onar`, `well-robed`, `dream-scene`) refer to the general article and stay.
10. **The header of grc/06.txt understated the source.** The header said that the editorial quotation marks were added because "Murray’s Perseus text has none". The Perseus TEI prints no quotation marks, but it marks the speeches with 12 `<q>` elements. Their spans are 25–40, 57–65, 68–70, 119–126, 149–185, 187–197, 199–210, 218–222, 239–246, 255–315, 276–284 (inner) and 324–327. These are exactly the 11 speeches of `structure/06.json` and the inner speech that the English marks with ‘ ’. Fix: the header now says that the editorial marks follow the 12 `<q>` elements of the Perseus TEI, which prints no quotation marks, and match the speeches in `structure/06.json`.

## Checked and accepted

- **Speeches.** The opening marks in Greek and English are on lines 25, 57, 68, 119, 149, 187, 199, 218, 239, 255 and 324. The closing marks are on lines 40, 65, 70, 126, 185, 197, 210, 222, 246, 315 and 327. These agree with the 11 speeches of `structure/06.json` and with the Perseus `<q>` elements. The inner speech 276–284 is marked ‘ ’ in both files and is not a separate speech record, as in the Iliad structure files (Il. 6.459–461 has no record of its own). The soliloquy 119–126 has `to_whom: ["odysseus"]`, as at Il. 11.404–410. The validator resolves every speaker and addressee.
- **Days.** "Night of Day 31" (1–47) and "Day 32" (48–331) agree with 6.170 (χθιζός, "on the twentieth day") and with the dawn at 6.48 and the sunset at 6.321.
- **Quote tags.** The build reports 0 unregistered quotes. `scripts/quotes.mjs` registered 0 new quotes. The Odyssey registry has 165 quotes and no duplicate IDs. Its titles are labels (for example "The father grants the wagon", 6.68–70), and they stay.
- **Homographs.** `homographs.mjs 6` reports no Odyssey pattern. Its four reports are Iliad 6 patterns older than this branch (Ἑκτορίδης, γοάω, εὐχετάομαι). The reader data shows:
  - πόσις "husband" (6.244, 6.277, 6.282) is claimed by `posis`; πόσις "drink" (6.209, 6.246, 6.248) only by `food-and-drink`. In the Iliad, `posis` claims only the 21 tokens of "husband", and πόσιος "drink" goes to `desire-for-drink-and-food`.
  - κηρί "death" (6.11) is claimed by `ker-doom`; κῆρι "heart" (6.158) by `ker-heart`.
  - μήδεα "counsels" (6.12) is claimed by no entry; μήδεα "genitals" (6.129) by `nakedness`.
  - τρώγειν (6.90) and τρώχων (6.318) are claimed by no entry. `trojans` claims Τρώς, Τρωϊκός, Τρώϊος and Τρῳός only.
  - ἀπήνη is claimed by `wagon` on all eight lines (57, 69, 73, 75, 78, 88, 90, 252). ἀπηνής "harsh" occurs in no Book 6 line. Its only form in the books with a lexicon, ἀπηνέος (Il. 1.340), goes to `harsh-king`.
  - The new patterns of `famous`, `honey-sweet`, `handmaids`, `sebas` and `heros` claim only the intended lemmas (κλειτός, κλυτός and its compounds, and phrases inside κλυτός formulas; μελίφρων, μελιηδής; ἀμφίπολος, δμῳή, ταμίη, τιθήνη; σέβας; ἥρως, including ἥρωος at 6.303).
- **IDs.** No two entries share an ID. The name collisions between new and older entries are homonyms that claim different lemmas: `hypereia` (the Thessalian spring, Il. 2.734, 6.457) and `hypereia-of-the-phaeacians` (Od. 6.4); `arete` (ἀρετή) and `queen-arete`; `palm-tree`, `purple` and `phoenix` (the `palm-tree` comment names Il. 14.321 for later). Aliases such as "Halius" and "Ulysses" are weak names and do not change any `[[link]]`.
- **Work field.** Every new entry outside the `author` kind has `work: homer.odyssey`. The nine new author entries have no front-matter references. The nine changed Iliad entries cite Odyssey lines with "Od." or "Odyssey" (`chariot` except, `famous`, `honey-sweet`, `olympus`, the comments of `handmaids` and `posis`). The prose references are not links, and the build resolves front-matter references with the entry's own work.
- **Notes.** 188 notes remain in `notes/06/`. 176 belong to entries that occur on Book 6 lines. The other 12 belong to author entries: `alcman`, `aristarchus`, `aristophanes-of-byzantium`, `eustathius`, `homeric-scholia`, `joyce`, `lucretius`, `pausanias`, `pliny-the-elder`, `polygnotus`, `sophocles`, `zenodotus`. Each of these notes describes the author's work on Book 6, as `iliad/notes/06/aristarchus.md` does for the Iliad. They stay. The author review in `categories.json` also lists `athenaeus`, which has no Book 6 note. Athenaeus is the source of the Book 6 article `athenaeus-ball-games`.
- **Article scope.** In the shared articles, this branch added general material and lists of uses with line references, not Book 6 narration. The index audit reached the same result for the new entries.
- **Witness labels.** `bounties/registry.json` gives Odyssey 6 the range 1–331 with no omitted lines. There is no `witnesses/06.json`. No note claims a restored line. The word "supplement" in `notes/06/anacoluthon.md` means a verb that a reader supplies, not a text restoration. The lines 6.313–315 stay as Murray prints them, and the notes report the doubts about them (index audit, finding 12).
- **Reader data** (`site/data/texts/homer.odyssey/6.json`, full build):
  - 331 lines, 2,418 tokens. Every token has a lexicon record with a lemma, a gloss and a part of speech or parse. The word popover reads these fields.
  - 1,923 distinct lexicon records, 1,518 with a note.
  - Every line has at least one entry. 251 entries claim tokens, and 285 entries occur on lines through tokens or refs.
  - 570 entity spans in the English column. All are inside their line and start and end on word boundaries. The sample is correct: "fate" → `ker-doom` (11); "carriage" → `wagon` (57, 73, 88, 90); "the man's genitals" → `nakedness` (129); "food and drink" → `food-and-drink` (209, 246, 248); "husband" → `posis` (244, 277, 282); no span on 318.
  - At 158 the span "most blessed in his heart" goes to `thrice-blessed`, so κῆρι has its link to `ker-heart` in the Greek column only.
  - The file has 8 scenes, 11 speeches and 2 days, as in `structure/06.json`.
  - The visual check of the mobile layout and the word sheet is done separately by the lead in a browser. Screenshots are in `evidence/screenshots/`. This audit did not open a browser.
- **Final diff.** `origin/main...HEAD` changes 315 files. With the uncommitted changes of the audits, the logs and the screenshots, the union is 321 paths. Every path is allowed by `validateChangeSet`:
  - one manifest `submissions/37d6a152-2178-41e6-8304-6f0cd3b20a7c.json`;
  - the research folder;
  - `content/index/*/*.md`;
  - `content/quotes/homer.odyssey.json`;
  - the Odyssey files `grc/06.txt`, `en/06.txt`, `lexicon/06.json`, `structure/06.json`, `notes/06/*.md` and `TRANSLATION.md`.
  
  No Iliad note, script, work inventory or site file is changed. `site/data/` and `dist/` are ignored by `.gitignore` and are not in the diff.

## Remaining limitations

- **Edition credits in the reader (outside this contract).** `content/library/homer/odyssey/work.json` still has the credits from before any Odyssey book was imported: "Planned base: … No Greek text imported yet …" and "No translation submitted …". The reader shows these credits in its footer (`site/assets/js/views/reader.js`, line 118), and the work page shows them too. A research PR may not change `work.json` (`validateChangeSet`; CONTRIBUTING.md, "What research PRs may change"). The Iliad credits were set in the import commit `beee59b`. The fix needs an infrastructure PR or a maintainer edit. This item is not counted in the findings below, because this submission cannot resolve it.
- **Glosses and other authors.** After the fixes, `checkquotes.mjs homer.odyssey` reports 779 items in the whole library and 9 in the Book 6 notes. The audit script reports 118 items with an Odyssey 6 reference. The reviewer read each one. They are glosses of single words (for example "oil-flask", "for mules", "better, more profitable"), literal renderings of a Greek phrase given beside the Greek, quotations of scholia, LSJ, Merry and Riddell, Eustathius and later authors, and bare references in Iliad articles that the script reads as Odyssey lines.
- **Other Odyssey books.** Quotations of Odyssey books other than 6 cannot be checked against a project translation, because none exists yet. Two places render the opening of the poem differently: "raged unceasingly" (`notes/06/poseidon.md`, 1.20–21) and "raged furiously" (`index/stories/the-wrath-of-poseidon.md`, 1.19–21). The Greek adverbs differ from 6.330 (ἀσπερχές at 1.20, ἐπιζαφελῶς at 6.330), so the difference is not an error. When Odyssey 1, 5, 7 and 8 arrive, run the quotation check on these files again.
- **Manifest counts.** This audit deleted one note (189 to 188 files in `notes/06/`) and changed one candidate disposition. The lead must run `submission measure` again before the manifest is final.
- **Mobile layout.** This audit verified the data that the reader and the word sheet use. It did not check the layout on a phone.

## Post-fix outputs

```
$ node --preserve-symlinks-main /Users/raunaqsharma/greekidx/scripts/build.mjs --dry --verbose
GreekIndexBounty: 2690 entries (2690 articles), 110 stories, 2197 quotes, 8757 lines, 5412 lemmas — 31686 ms
exit code: 0   (no "!" warnings, no "?" unindexed names, no "→" missing links, no "✗" errors)

$ node --preserve-symlinks-main /Users/raunaqsharma/greekidx/scripts/build.mjs
site/data/report.json: errors 0, warnings 0, unindexedNames 0, missingLinks 0, unsavedQuotes 0

$ node /Users/raunaqsharma/greekidx/scripts/validate.mjs
Validation passed (content only; use --submission to check a PR manifest).

$ node --test tests/*.test.mjs
tests 35, pass 35, fail 0

$ node --preserve-symlinks-main scripts/quotes.mjs
Registered 0 quotes in 0 files.

$ node --preserve-symlinks-main scripts/checkquotes.mjs homer.odyssey
1404 quotations checked against the Odyssey translation; 779 not found (glosses and other authors' words included).
(Book 6 notes: 9 items, all glosses or other works; before the fixes: 23)

$ node --preserve-symlinks-main scripts/homographs.mjs 6
4 patterns catching more than one lemma.   (all four are Iliad 6 patterns older than this branch)

$ node --preserve-symlinks-main scripts/export.mjs
Exported 53 files (51.8 MB) to dist/
exit code: 0
```

The full outputs of `checkquotes.mjs`, `homographs.mjs` and `export.mjs` are in `evidence/logs/checkquotes.log`, `evidence/logs/homographs.log` and `evidence/logs/export.log`.

## Rendered reader check (lead, separate pass)

The lead opened the dev server (scripts/serve.mjs) in a browser at a 375 x 812 phone viewport on 2026-10-07 and checked:

- The Book 6 reader (#/read/homer.odyssey/6): the scene heading, the day label, the summary, and the Greek over English rows render without horizontal scroll.
- A word sheet: tapping δῖος (6.1) opens the "Brilliant" epithet sheet with its line counts.
- An article at book scope: #/entry/nausicaa renders the summary, links, speech statistics, and section tabs.

Screenshots: evidence/screenshots/mobile-reader-book6.jpg, mobile-word-sheet-dios.jpg, mobile-entry-nausicaa.jpg. This rendered check was done by the lead, not by the independent auditor.

issuesFound: 10
issuesResolved: 10
auditAgent: a328d705968190ed3 (independent Opus 5.5 helper; did not write the audited files)
