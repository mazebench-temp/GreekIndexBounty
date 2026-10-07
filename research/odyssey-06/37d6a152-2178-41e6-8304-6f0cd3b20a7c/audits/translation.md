# Translation audit: Homer, Odyssey 6

Reviewer: Claude (Anthropic Opus 5.5), independent translation auditor. This reviewer did not write the translation.

## Scope

- Greek: `content/library/homer/odyssey/grc/06.txt` (Murray 1919, Perseus), lines 1–331.
- English: `content/library/homer/odyssey/en/06.txt`, rows 1–331.
- Conventions: `content/library/homer/odyssey/TRANSLATION.md`.
- Lead only: `content/library/homer/odyssey/lexicon/06.json`.

Every English row was compared with its Greek verse, 1–331, in order. The numbering of the two files matches row for row (331 Greek verses, 331 English rows, no gaps).

## Method

1. A script paired each Greek verse with its English row and checked that the line numbers agree.
2. The auditor read each pair in order and checked these points:
   - omitted or added clauses, images and particles;
   - subject and object;
   - the scope of each negation (for example 6.173–174, 6.201, 6.240, 6.301, 6.325, 6.329);
   - tense and aspect, including the iteratives σινέσκοντο (6.6) and ἀποπλύνεσκε (6.95), the pluperfect ἐτεθήπεα and the perfect τέθηπα (6.166–168);
   - mood (optatives of purpose 6.113–114, 6.147; generic subjunctives 6.159, 6.288; the imperatival infinitives 6.258–261, 6.295, 6.304, 6.310–311);
   - participles, the dual (6.19, 6.82, 6.183), direct and indirect speech, and vocatives (6.25, 6.57, 6.68, 6.149, 6.168, 6.175, 6.187, 6.199, 6.218, 6.239, 6.255, 6.289, 6.324).
3. The auditor checked each line list in the "Key words" table against the Greek with `grep` (εἵματα, ἐσθής, κούρη, ἀμφίπολος, ξεῖνος, πόλις, ἄστυ, λούω and others).
4. The auditor checked each formula in both formula tables against its Greek lines and its English rows. Shared Iliad lines were spot-checked in the Iliad files (Il. 5.133, 12.299–301).
5. The auditor checked the speech marks. Each English “ ” and ‘ ’ pair matches the editorial marks in the Greek file: 25–40, 57–65, 68–70, 119–126, 149–185, 187–197, 199–210, 218–222, 239–246, 255–315 (inner speech 276–284), 324–327.
6. The auditor searched the English for British spellings and for dashes. None were found.
7. The auditor used lexicon notes that mention rendering, dispute or ambiguity as leads (6.2, 6.193, 6.201, 6.226, 6.264, 6.278, 6.318).

## Findings

1. **6.251, inconsistent formula.**
   - Greek: αὐτὰρ Ναυσικάα λευκώλενος ἄλλʼ ἐνόησεν.
   - Problem: the phrase ἄλλʼ ἐνόησε(ν) is "thought of something else" at 6.112, but "thought of other things" at 6.251. This breaks Principle 3 (one Greek formula, one English formula). The lexicon already glosses ἄλλʼ at 6.251 as "something else". The formula was also missing from the formula tables.
   - Fix applied: 6.251 now reads "But white-armed Nausicaa thought of something else:". TRANSLATION.md adds the row "ἄλλʼ ἐνόησε(ν) | thought of something else | 112, 251" to "Formulas new in Book 6", and adds 6.112 and 6.251 to the examples in Principle 3. Inline quotations of the old wording were corrected (see "Files and lines corrected").
2. **TRANSLATION.md key-word table, wrong line reference.**
   - Greek: 6.59 ἐς ποταμὸν πλυνέουσα, τά μοι ῥερυπωμένα κεῖται.
   - Problem: the row for εἵματα lists 6.59, but εἵματα does not occur in 6.59. The word occurs at 6.58 (the line before), and 6.59 has only the relative τά. The other references in the row are correct (grep check).
   - Fix applied: 6.59 was removed from the εἵματα list. The reference 6.59 for πλύνω (πλυνέουσα) is correct and stays.
3. **6.278, undocumented reading.**
   - Greek: ἦ τινά που πλαγχθέντα κομίσσατο ἧς ἀπὸ νηὸς.
   - Problem: Murray prints ἦ "surely", and some editors print ἤ, which gives ἤ … ἤ "either … or" with 6.280. The English "Perhaps … or" was not recorded in the conventions file. The rendering itself is correct: ἦ … που is an assertion with "I suppose", and ἤ at 6.280 gives the alternative.
   - Fix applied: a new entry for 6.278 in "Book 6: disputed constructions" records the reading and the rendering. The English stays unchanged.
4. **6.53–54, participle rendered twice.**
   - Greek: τῷ δὲ θύραζε / ἐρχομένῳ ξύμβλητο μετὰ κλειτοὺς βασιλῆας / ἐς βουλήν.
   - Problem: the one participle ἐρχομένῳ has two English verbs: "as he was going out of doors" (6.53) and "as he went to join" (6.54).
   - Reclassified as an accepted choice. The participle governs two goals: θύραζε "out of doors", and μετά + accusative with ἐς βουλήν "to join the kings in council". English needs a verb of motion for each goal. The second verb adds no new content. To remove it, the auditor would have to move θύραζε or ξύμβλητο to a different English row, and this is worse for line fidelity. No change.

## Files and lines corrected

- `content/library/homer/odyssey/en/06.txt`, row 251: "thought of other things:" was changed to "thought of something else:".
- `content/library/homer/odyssey/TRANSLATION.md`:
  - Principle 3: the examples now include 6.112 and 6.251;
  - the εἵματα key-word row: 6.59 was removed;
  - "Formulas new in Book 6": a new row for ἄλλʼ ἐνόησε(ν);
  - "Book 6: disputed constructions": a new entry for 6.278.
- Inline quotations of the old 6.251 wording were corrected:
  - `content/library/homer/odyssey/notes/06/thought-of-another-thing.md`, line 12: “but white-armed Nausicaa thought of something else”;
  - `content/library/homer/odyssey/notes/06/white-armed.md`, line 6: she “thought of something else” while Odysseus ate;
  - `content/index/formulas/thought-of-another-thing.md`, front matter `en:` is now `[thought of something else]`. The old second pattern no longer occurs in the English.
- For the integration auditor: the only English wording that changed is 6.251. After the fix, `grep -rn "thought of other things" content` returns nothing in the Odyssey files.

## Remaining scholarly uncertainty (documented choices, unchanged)

These readings stay as recorded in TRANSLATION.md, "Book 6: disputed constructions". The English matches each recorded choice:

- 6.2 ἀρημένος "worn down";
- 6.8 ἀλφηστής "grain-eating";
- 6.122 ὥς τε as a comparison;
- 6.174 παύσεσθαι with no stated subject, "it will cease";
- 6.185 ἔκλυον "know it best";
- 6.187 and 6.262–267, the clauses with no main clause;
- 6.193 ἀντιάσαντα "who has met with people";
- 6.201 διερός "living";
- 6.207 πρὸς Διός "from Zeus";
- 6.254 ἔκ τʼ ὀνόμαζεν "addressed him", the deliberate exception to the Iliad formula;
- 6.265 ἐπίστιον "ship-shed";
- 6.269 σπεῖρα "sails";
- 6.274 the subject of εἰσίν;
- 6.278 ἦ / ἤ (new entry);
- 6.308 ποτικέκλιται αὐτῇ "leans against it";
- 6.318 πλίσσοντο "stepped out" (the sense is disputed; the lexicon records the dispute).

An observation for the lexicon auditor (outside this audit's edit scope): at 6.2 the lexicon glosses ἀρημένος as "overcome". The translation and TRANSLATION.md use "worn down", and they keep "overcome" for δαμείς (6.11).

## Post-fix result

All 331 English rows agree with the Greek in clause content, grammatical relations, negation scope, tense, mood and speech structure. Every key-word line list in TRANSLATION.md matches the Greek. Every formula in the two formula tables has the same English on each listed line, and the one exception (6.254) is documented. The speech marks match the Greek. The spelling is American, and the English has no em dashes.

issuesFound: 4
issuesResolved: 4

auditAgent: a4c6afe6b1e56723f (independent Opus 5.5 helper; did not write the audited files)
