# Lexicon audit: Homer, Odyssey 6

Reviewer: Anthropic Opus 5.5, independent lexicon auditor. This reviewer did not write the lexicon.

Standard: docs/research-standard.md, section 3 (analyze each occurrence) and section 7 (audit).

## Scope

- File: `content/library/homer/odyssey/lexicon/06.json`.
- Coverage: every token of lines 1–331 (2,418 tokens, 331 rows).
- Reference texts: `grc/06.txt` (Murray, Perseus) and `en/06.txt` (the project translation).
- Each analysis was checked for the exact token form, the lemma, the contextual gloss, the part of speech with morphology, and the note.

## Method

1. Automated passes.
   - `node scripts/lexicon.mjs check content/library/homer/odyssey/lexicon/06.json 6 homer.odyssey` before and after the fixes.
   - A script listed every normalized form that carries more than one lemma or part of speech in the book.
   - The same script listed every finite verb without tense, mood, voice, person or number, every participle without tense, voice, case, number or gender, and every nominal form without case, number or gender.
   - A comparison script matched each exact form against all Iliad lexicon files and listed each form with a lemma that the Iliad never uses for it. A second listing gave each Odyssey 6 lemma that is absent from the Iliad (`node scripts/lexicon.mjs lemmas homer.iliad` gives the same lemma set).
   - A gloss spot check compared the content words of each gloss with the English of the same line and the two adjacent lines. It produced 256 candidates. Each candidate was read by hand. Most are synonyms (for example "wagon" for the translation's "carriage"). The real contradictions are in the findings below.
2. Manual pass. The reviewer read every analysis of lines 1–331 against the Greek and the English. The reviewer gave more attention to these points:
   - augmentless verbs and forms where an augment cannot show (ἵκανε 136, ἵμασεν 316, ἱκόμην 176);
   - tmesis (9, 21, 77, 100, 107, 117, 131, 140, 212, 214, 228, 230–231, 248, 253, 254);
   - duals (σταθμοῖιν 19, ἡμιόνοιιν 82, ὄσσε 131, ὁμοφρονέοντε and ἔχητον 183, ὤμοιιν 219);
   - epic endings (-οιο, -φι, -εσσι, -ῃσι, -ηαι, -μεναι, -έμεν, diectasis);
   - homographs: πόσις 'husband' (244, 277, 282) and πόσις 'drink' (209, 246, 248); κήρ 'death' (11) and κῆρ 'heart' (158); μήδεα 'counsels' (12) and μήδεα 'genitals' (129); ἦ particle, ἤ/ἦ 'or', ἢ 'than' and ἦ 'she spoke' (198); τοι as pronoun and as particle; ὅς relative and ὅς possessive (278, 331); οἶος and οἷος (102, 139); φώς and φῶς (129); βιός and βίος (270).
   - All of these homographs were already correct before the audit.

## Findings

1. Lines 127, 135, 145, ὣς. Problem: lemma ὡς. The same word 'so, thus' has the lemma ὥς at 1, 41, 66, 71, 109, 166, 211, 223, 235, 247, 285, 316 and 328. The Iliad lexicon uses ὥς for ὣς 314 times. Line 71 has the same formula ὣς εἰπών as line 127 with the lemma ὥς. Fix: lemma ὥς at all three. At 127 the gloss is also "so", for the translation "So saying".
2. Line 250, δηρὸν. Problem: part of speech "adv." The same form at 220 is "adj. · acc. sg. neut." with an adverbial note, and the Iliad has this form as an adjective 6 of 9 times. Fix: `adj. · acc. sg. neut.`, note "adverbial neuter: 'for long'".
3. Line 278, που. Problem: part of speech "adv." Every other enclitic που in the book (125, 155, 173, 179, 190, 200) is "particle". Fix: `particle`.
4. Line 328, ἔκλυε. Problem: parsed "impf." The same verb is aorist at 185 (ἔκλυον) and 247 (κλύον), and the Iliad parses ἔκλυε as aorist 5 of 6 times. Fix: `verb · aor. ind. act. 3 sg.`. The note now names the thematic aorist ἔκλυον and the older label "imperfect with aorist sense".
5. Line 265, ἐπίστιόν. Problem: the note gave the uncertain meaning two times ("meaning uncertain … sense uncertain …"). Fix: one statement of the uncertain meaning, plus the accent remark.
6. Line 126, πειρήσομαι. Problem: the gloss "let me find out" and the parse "aor. subj." disagree with the translation "I will try". The Iliad parses the same formula as future indicative (2 of 2). Fix: gloss "I will try", parse `verb · fut. ind. mid. 1 sg.`. The note keeps the short-vowel aorist subjunctive as the alternative reading.
7. Line 55, κάλεον. Problem: the gloss "they had summoned" gives a pluperfect sense. The parse is imperfect, and the note and the translation have "were calling". Fix: gloss "were calling".
8. Line 256, φημι. Problem: the gloss "I think" disagrees with the note ('say, declare') and with the translation "I tell you". Fix: gloss "I tell you".
9. Line 9, ἔλασσε. Problem: the gloss "drew" disagrees with the note ("'drove (a wall)'") and with the translation "drove a wall around the city". Fix: gloss "drove".
10. Lines 1, 117, 127, 224, 249, 322, δῖος. Problem: three different glosses ("noble" 4 times, "godlike" 2 times, "brilliant" 1 time) for one epithet. The translation renders δῖος as "brilliant" in all seven lines. "Godlike" also collides with the gloss of θεοειδής (7) and ἀντίθεος (241, 331). Fix: gloss "brilliant" in all six lines.
11. Line 2, ἀρημένος. Problem: the gloss "overcome" disagrees with the translation and with TRANSLATION.md (6.2), which render ἀρημένος "worn down" and keep "overcome" for δαμείς (11). The translation auditor reported this item through the coordinator. Fix: gloss "worn down".

## Files changed

- `content/library/homer/odyssey/lexicon/06.json`: 18 analyses in 17 rows (lines 1, 2, 9, 55, 117, 126, 127, 135, 145, 224, 249, 250, 256, 265, 278, 322, 328). Token forms, token order and the one-row-per-line format are unchanged. The token count stays 2,418.

## Items checked and kept

- Line 251: the translation auditor changed the English to "thought of something else". The gloss of ἄλλʼ is already "something else", so no change is necessary.

- χρή (27, 190, 207) has no voice. The form is an impersonal verb from a noun, and the Iliad lexicon has the same parse 17 times.
- Lemma policy for verbs in tmesis is mixed. Lines 77 (ἐντίθημι, ἐγχέω), 100 (ἀποβάλλω) and 107 (ὑπερέχω) use the compound lemma. The other tmesis lines use the simple verb and name the compound in the note. Every case has a note, and the Iliad lexicon uses both conventions. Thus τίθει has the lemma ἐντίθημι at 77 (tmesis) and τίθημι at 252 (no preverb).
- Differences from the Iliad for the same form are correct in context: ἐτίθει 76 (τίθημι, no preverb), ἑζόμενος 118 (ἕζομαι, no κατά), εἰρύαται 265 (ἐρύω 'draw up ships', not ἔρυμαι 'guard'), ἄλλῃ 286 (dative feminine of ἄλλος, 'another woman', not the adverb), τινες 279 (τις).
- ἦε at 121 has the lemma ἤ. This agrees with the Iliad (8 of 8).

## Remaining genuine ambiguities (kept in the notes)

- 2 ἀρημένος: origin of the defective participle.
- 8 ἀλφηστής and 48 ἐΰθρονος: disputed derivations.
- 28 ἄγωνται: who the plural subject is (the escort or the groom's family).
- 29, 33, 69, 314 τοι: particle or pronoun.
- 33 ἐντύνεαι: aorist subjunctive or present form.
- 96, 227 λίπ(α): adverb or elided dative.
- 103 Τηΰγετον: neuter or masculine.
- 107 ὑπέρ, 117 ἐπί, 131 ἐν, 140 ἐκ, 210 ἐπί, 219 ἀμφί: preverb in tmesis or adverb/preposition.
- 122 ὥς τε: 'as if' or exclamatory 'how'.
- 138 ἄλλη: distributive nominative or the adverb ἄλλῃ.
- 158 περὶ κῆρι: adverb plus locative, or preposition plus dative.
- 184–185 πόλλʼ ἄλγεα and χάρματα: predicate nominative or object of an understood verb; ἔκλυον 'they know it' or 'they are well spoken of'.
- 193 ὧν and ἀντιάσαντα: what governs the genitive.
- 197 ἐκ: with τοῦ or with Φαιήκων.
- 201 διερός: 'living' or 'swift'.
- 219 ὤμοιιν: genitive or dative dual.
- 219–221 ἀπολούσομαι, χρίσομαι, λοέσσομαι and 255 πέμψω: short-vowel aorist subjunctive or future indicative.
- 226 ἀτρύγετος: 'unharvested' or 'unwearied'.
- 227 πάντα: adverbial neuter plural or masculine singular.
- 242 δέατʼ: the manuscript variant δόατʼ.
- 265 ἐπίστιον: exact meaning.
- 273 ἀδευκής: exact meaning.
- 278 ἦ: Murray's accent, against ἤ … ἤ in other editions.
- 288 γάμον: subject of ἐλθεῖν or accusative of goal.
- 307 κίονι: gender not marked by the form.
- 308 αὐτῇ: the pillar, the hearth or the queen.
- 318 πλίσσοντο: exact sense.
- 324 Ἀτρυτώνη: derivation.

## Post-fix check output

```
$ node scripts/lexicon.mjs check content/library/homer/odyssey/lexicon/06.json 6 homer.odyssey
content/library/homer/odyssey/lexicon/06.json: 331 lines, 0 errors, 0 warnings
```

The automated morphology scan after the fixes reports 2,418 tokens. The only remaining entries are the three impersonal χρή forms described above.

`node scripts/homographs.mjs 6` reports index patterns, not lexicon errors. One report touches this book: the pattern Τρώ* in `content/index/peoples/trojans.md` also catches τρώχων (6.318, lemma τρωχάω). The lexicon analysis of τρώχων is correct. The pattern belongs to the index audit.

## Result

Passed. All eleven issues are resolved in `lexicon/06.json`.

issuesFound: 11
issuesResolved: 11
