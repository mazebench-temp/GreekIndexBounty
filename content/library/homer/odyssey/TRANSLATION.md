# Odyssey: translation conventions

The English is a new line-for-line translation by Claude (Anthropic Opus 5.5), made in 2026.
The source is the Greek text in `grc/`: A. T. Murray, *Homer: The Odyssey* (Loeb Classical
Library, 1919). The Perseus Digital Library digitized this text (canonical-greekLit,
`tlg0012.tlg002.perseus-grc2`, commit `ceeb60d9`, CC BY-SA 4.0). The line numbers are Murray's.

Every English row carries the number of the Greek verse that it renders. Quotations, the index
and the interlinear reader can thus address any range of lines in either language. Book 6 has
331 verses and 331 English rows.

American spelling is used throughout ("gray-eyed Athena", "the gray sea").

## Principles

1. **Line fidelity.** Each verse has its own row. Names and key terms stay on the same line as
   in the Greek, because the index links words line by line. Sometimes English syntax runs
   across a line break. Then the words stay within the same one or two verses as the Greek
   (for example 6.39–40, 6.86–87, 6.131–132, 6.162–163, 6.310–311).
2. **The Iliad's English for the Iliad's formulas.** The Odyssey and the Iliad share many
   formulas and whole verses. A formula that the Iliad translation in this library already
   renders keeps the Iliad's English in the Odyssey. The file `../iliad/TRANSLATION.md` is the
   reference for the shared epithets. The table "Formulas shared with the Iliad" below gives the
   Iliad line for each shared formula in Book 6.
3. **One Greek formula, one English formula.** A verse or phrase that repeats inside the
   Odyssey has the same English each time. Examples in Book 6: the verse 6.209 = 6.246, and the
   phrases at 6.53 and 6.306, 6.79 and 6.215, 6.112 and 6.251, 6.150 and 6.243.
4. **Key words keep their English word.** The table "Key words" gives the fixed English for the
   Odyssey vocabulary of hospitality, supplication, shame, marriage and the household. Where one
   Greek word has two senses, the table names both and gives the lines. Two senses do not get one
   gloss.
5. **Speeches.** A speech opens with “ on its first line and closes with ” on its last line. A
   speech inside a speech uses ‘ ’ (6.276–284), as at Iliad 6.479. The project does not use the
   em dash. A sentence that breaks off in the Greek ends with a semicolon (6.187).

## Key words

| Greek | English | Notes |
|---|---|---|
| ξεῖνος, ξεῖνε | stranger | 6.187, 6.208, 6.209, 6.246, 6.255, 6.277, 6.289. In the Odyssey, ξεῖνος is mostly the man who arrives from outside and has the protection of Zeus (6.207–208). The Iliad already has "a stranger" for ξεῖνος at 4.387. "guest-friend" stays for the hereditary tie between two houses, ξεῖνος πατρώϊος (Il. 6.215, 6.231) |
| φιλόξεινος | kind to strangers | 6.121, with θεουδής "god-fearing"; the opposite is ὑβρισταί "arrogant", ἄγριοι "savage", οὐδὲ δίκαιοι "not just" (6.120) |
| ἱκέτης | suppliant | ἱκέτην ταλαπείριον "a much-tried suppliant" (6.193) |
| λίσσομαι / γουνοῦμαι | entreat / I beseech you | λίσσομαι "entreat" (6.142, 6.144, 6.146); γουνοῦμαί σε "I beseech you" (6.149), without "by your knees", because Odysseus has just decided not to touch her knees (6.146–147). γούνων λαβεῖν "clasp the knees" (6.142, 6.147, as Il. 1.407); γούνων ἅψασθαι "touch your knees" (6.169) |
| αἰδέομαι, αἴδομαι | feel shame; stand in awe of | "feel shame", modesty about marriage or nakedness (6.66, 6.221, as Il. 6.442); "stood in awe of", the respect of Athena for her father's brother Poseidon (6.329). The noun αἰδώς does not occur in Book 6 |
| σέβας | awe | σέβας μʼ ἔχει "awe holds me" (6.161), as σεβάσσατο "held back in awe" (Il. 6.167) |
| νεμεσάω / μωμεύω / ὄνειδος | be indignant / blame / reproach | νεμεσῶ "I am indignant with" (6.286), as the Iliad table; μωμεύῃ "may blame me" (6.274), as μωμήσονται (Il. 3.412); ὀνείδεα "reproaches" (6.285). The noun νέμεσις does not occur in Book 6; the Iliad table gives "blame" |
| ὁμοφροσύνη, ὁμοφρονέω | like-mindedness, be like-minded | 6.181, 6.183. One English stem keeps the Greek ὁμο- "same" and φρον- "mind" |
| ἄνασσα | queen | 6.149, 6.175. Odysseus' address to Nausicaa |
| βασίλεια | princess | 6.115. Nausicaa is the king's daughter; "queen" stays with ἄνασσα |
| πότνια / γύναι | lady / lady | πατὴρ καὶ πότνια μήτηρ "father and lady mother" (6.30, 6.154), as Il. 6.429; the vocative γύναι "lady" (6.168), as Il. 3.204. The Iliad formula βοῶπις πότνια Ἥρη keeps "ox-eyed queen Hera" |
| ἀμφίπολος | handmaid | 6.18, 6.84, 6.109, 6.115, 6.116, 6.198, 6.199, 6.209, 6.217, 6.218, 6.238, 6.239, 6.246, 6.260, 6.320, as Il. 3.143; ἀμφιπόλοισι γυναιξίν "with her handmaid women" (6.52, 6.80) |
| δμῳή / δμώς | slave woman / slave | δμῳαί "the slave women" (6.99, 6.307), as δμῳῇσι γυναιξίν (Il. 6.323); δμῶες "the slaves" (6.69, 6.71). Kept apart from ἀμφίπολος |
| ἀπήνη / ἄμαξα | carriage / wagon | Homer gives the same vehicle two names. ἀπήνη "carriage" (6.57, 6.69, 6.73, 6.75, 6.78, 6.88, 6.90, 6.252); ἄμαξα "wagon" (6.37, 6.72, 6.260), as Il. 7.426, 12.448. Both words stand together at 6.72–73 |
| ἐσθλός | good | 6.30, 6.182, 6.189, 6.284. The Iliad's "brave" (of warriors) does not suit the suitors or the "good" of 6.189; κακός of persons "base" (6.187), "the bad" (6.189); κακώτερος "baser" (6.275) |
| γάμος | marriage | 6.27; θαλερὸν γάμον "the marriage of her prime" (6.66; θαλερός "in their prime", Il. 3.26); ἀμφάδιον γάμον "a public marriage" (6.288) |
| πόσις / ἀνήρ | husband | πόσις (6.244, 6.277, 6.282); ἀνήρ "husband" beside οἶκος (6.181), but ἀνὴρ ἠδὲ γυνή "a man and a woman" (6.184). ἄλοχος and ἄκοιτις do not occur in Book 6 |
| μνάομαι | court | μνῶνται "are courting you" (6.34), "who are courting her" (6.284) |
| ἔεδνα | bride-gifts | ἐέδνοισι βρίσας "prevailing by the weight of his bride-gifts" (6.159), as ἐεδνωταί (Il. 13.382) |
| παρθένος / κούρη | maiden / girl | παρθένος "maiden" (6.33); παρθένος ἀδμής "the unwed maiden" (6.109, 6.228). κούρη "girl" (6.15, 6.20, 6.47, 6.74, 6.78, 6.113, 6.135, 6.142, 6.147, 6.222, 6.223, 6.237), "daughter" with the father's name in the genitive (6.22, 6.105, 6.151, 6.323). θυγάτηρ is "daughter" |
| διερός | living | διερὸς βροτός "living mortal" (6.201). See the disputed constructions |
| ἀλφησταί | grain-eating | ἀνδρῶν ἀλφηστάων "grain-eating men" (6.8). See the disputed constructions |
| ἐπίστιον | ship-shed | 6.265. See the disputed constructions |
| ὄλβος | prosperity | 6.188 |
| νόστος, νόστιμον ἦμαρ / πομπή | homecoming, the day of homecoming / escort | 6.14, 6.290, 6.311, as the Iliad table; πομπή "escort" (6.290), as Il. 6.171 |
| χάρις, χάριτες, χαρίεις / Χάριτες | grace, graces, graceful / the Graces | 6.234–237; the goddesses (6.18). One English stem for the Greek stem |
| μάκαρ, μακάρτατος | blessed, most blessed | of the gods (6.46) and of mortals: τρὶς μάκαρες "thrice blessed" (6.154–155), μακάρτατος (6.158) |
| μίσγομαι, ἐπιμίσγομαι | mingle with | 6.136, 6.205, 6.241, 6.288 |
| ἄστυ / πόλις, πτόλις | town / city | ἄστυ (6.178, 6.194, 6.296); πόλις (6.3, 6.9, 6.40, 6.114, 6.144, 6.177, 6.191, 6.195, 6.255, 6.262, 6.263, 6.298), πτόλις (6.294) |
| εἵματα / ἐσθής | clothes / clothing | εἵματα "clothes" (6.26, 6.58, 6.61, 6.64, 6.91, 6.98, 6.111, 6.144, 6.214, 6.228, 6.252); ἐσθής "clothing" (6.74, 6.83, 6.192); φᾶρος "cloak", χιτών "tunic" (6.214); ῥάκος "rag" (6.178) |
| ἔλαιον / ἀλοιφή | olive oil / ointment | ἔλαιον "olive oil" (6.79, 6.96, 6.215, 6.219), as Il. 2.754 and 10.577; ἀλοιφή "ointment" (6.220) |
| λούω / ἀπολούω / νίζω | bathe / wash off / wash | λούω (6.96, 6.210, 6.216, 6.221, 6.227); ἀπολούσομαι "wash … from" (6.219); νίζετο "washed" (6.224); πλύνω "wash" (clothes) (6.31, 6.59, 6.93) |
| μάστιξ / ἱμάσθλη | whip / lash | 6.81, 6.316 / 6.320 |
| ῥοαί / ῥέεθρα | currents / streams | ποταμοῖο ῥοῇσιν "the currents of the river" (6.216); ποταμοῖο ῥέεθρα "the streams of the river" (6.317), as Il. 2.461 |
| θάλος / ἔρνος / δόρυ | young shoot / sapling / stem | 6.157 / 6.163 / 6.167. δόρυ is the trunk of the palm here, not a spear |
| μήδεα | counsels; genitals | two words: θεῶν ἄπο μήδεα εἰδώς "who knew counsels from the gods" (6.12; "counsels", Il. 3.202); μήδεα φωτός "the man's genitals" (6.129) |
| κήρ / κῆρ | fate / heart | κηρὶ δαμείς "overcome by fate" (6.11); περὶ κῆρι "in his heart" (6.158). Two words, as in the Iliad table |
| κλυτός | famous; glorious | "famous" of persons and places (6.36, 6.321, 6.326; κλυτὰ δώματα "famous homes", Il. 2.854); "glorious" of things (κλυτὰ εἵματα, 6.58, as κλυτὰ τεύχεα "glorious armor"). κλειτός is also "famous" (6.54; ναυσικλειτοῖο "famous for ships", 6.22) |
| λαός | army; people | πολὺς δέ μοι ἕσπετο λαός "a great army followed me" (6.164); οὔνομα λαῶν "the name of the people" (6.194), as the Iliad table |
| οὐρανός | sky | τοὶ οὐρανὸν εὐρὺν ἔχουσιν "who hold the wide sky", of the gods (6.150, 6.243), as οὐρανὸν εὐρύν "the wide sky" in the Iliad (3.364, 5.867, 7.178); οὐρανόθεν "down from the sky" (6.281), as Il. 1.195 |
| δαίμων | a god | 6.172, as Il. 7.291 |
| ὑπερφίαλος / ὑπερηνορέων | overbearing / overweening | 6.274, as Il. 3.106 / 6.5, as Il. 4.176 |
| δυσμενέες / εὐμενέται | enemies; hostile men / well-wishers | δυσμενέεσσι "enemies" (6.184), as Il. 3.51; δυσμενέων ἀνδρῶν "hostile men" (6.200), as Il. 5.488; εὐμενέτῃσι "well-wishers" (6.185) |
| πένθος / ἄλγεα, κήδεα | grief / sorrows | πένθος (6.169), as Il. 1.362; ἄλγεα (6.184), κήδεα (6.165), as the Iliad table |
| τέμενος / ἀλωή | domain / orchard | 6.293, as Il. 6.194 / 9.534 |
| ἥρως | the hero | 6.303, as Il. 1.102 |

## Formulas shared with the Iliad

Each row gives the English that Book 6 takes from the Iliad translation, and one Iliad line where
that English stands.

| Greek | English | Od. 6 | Iliad |
|---|---|---|---|
| πολύτλας δῖος Ὀδυσσεύς | much-enduring brilliant Odysseus | 1, 249 | 8.97 |
| δῖος Ὀδυσσεύς | brilliant Odysseus | 117, 127, 217, 224, 322 | 1.145 |
| ἀντιθέῳ Ὀδυσῆι | godlike Odysseus | 331 | 11.140 |
| θεὰ γλαυκῶπις Ἀθήνη | the gray-eyed goddess Athena | 13, 112 | 1.206 |
| γλαυκῶπις Ἀθήνη | gray-eyed Athena | 24, 41 | 5.133 |
| ἣ μὲν ἄρʼ ὣς εἰποῦσʼ ἀπέβη γλαυκῶπις Ἀθήνη | So saying, gray-eyed Athena went away | 41 | 5.133 (the whole verse) |
| Παλλὰς Ἀθήνη | Pallas Athena | 233, 328 | 1.400 |
| κλῦθί μευ, αἰγιόχοιο Διὸς τέκος, Ἀτρυτώνη | Hear me, child of aegis-bearing Zeus, Atrytone | 324 | 5.115 |
| ὣς ἔφατʼ εὐχόμενος, τοῦ δʼ ἔκλυε … | So he spoke in prayer, and … heard him | 328 | 1.43 |
| Διὸς ἐκγεγαυῖα | child of Zeus | 229 | 3.199 |
| κλυτὸς ἐννοσίγαιος | the famous shaker of the earth | 326 | 8.440 |
| Ἄρτεμις ἰοχέαιρα | Artemis of the showering arrows | 102 | 5.53 |
| νύμφαι … κοῦραι Διὸς αἰγιόχοιο | nymphs, daughters of aegis-bearing Zeus | 105 | 6.420 |
| μάκαρες θεοί | the blessed gods | 46 | 1.406 |
| θεῶν, οἳ Ὄλυμπον ἔχουσιν | the gods who hold Olympus | 240 | 5.890 |
| ἐΰθρονος Ἠώς | Dawn of the fair throne | 48 | 8.565 |
| ἅμʼ ἠοῖ φαινομένηφι | when dawn appears | 31 | 9.682 |
| ἠῶθι πρό | in the early dawn | 36 | 11.50 |
| λευκώλενος | white-armed (Nausicaa, the handmaids) | 101, 186, 239, 251 | 1.55 |
| ἐϋπλόκαμος | with lovely tresses | 135, 198, 222, 238 | 6.380 |
| ἐΰπεπλος | well-robed | 49 | 6.372 |
| μεγαλήτωρ | great-hearted | 14, 17, 196, 213, 299 | 2.547 |
| θεοειδής / ἀντίθεος | godlike | 7 / 241 | 2.623 / Iliad table |
| δαΐφρων | wise-hearted | 256 | Iliad table |
| ἀγαυοί | noble | 55 | 3.268 |
| εὐρύχορος | with its wide dancing floors | 4 | 9.478 |
| βίηφι | strength | 6 | 4.325 |
| στῆ δʼ ἄρʼ ὑπὲρ κεφαλῆς, καί μιν πρὸς μῦθον ἔειπεν | and stood above her head and spoke to her | 21 | 2.59 |
| τῇ μιν ἐεισαμένη προσέφη | In her likeness … spoke to her | 24 | 3.389 |
| κεχάριστο θυμῷ | was dear to her heart | 23 | 5.243 |
| πατὴρ καὶ πότνια μήτηρ | father and lady mother | 30, 154 | 6.429 |
| ἤματα πάντα | all (their, her) days | 46, 281 | 8.539 |
| ἀλλʼ ἄγε | But come | 36, 126 | Iliad table |
| ὣς εἰπών, ὣς εἰποῦσα | So saying | 41, 71, 127 | 3.139 |
| ὣς ἔφαθʼ (ὣς ἔφατʼ) | So she (he) spoke, and | 66, 211, 223, 247 | 2.807, 3.76 |
| ὣς ἄρα φωνήσασʼ | So she spoke, and | 316 | 1.428 |
| ἦ ῥα καί | She spoke, and | 198 | 3.310 |
| τὸν δʼ αὖ … ἀντίον ηὔδα | Then … answered him face to face | 186 | 4.265 |
| δή ῥα τότʼ … μετηύδα | Then … spoke among | 217, 238 | 2.109 (μετηύδα) |
| μάλα μὲν κλύον ἠδʼ ἐπίθοντο | they listened closely to her and obeyed | 247 | 7.379 |
| ἔπος τʼ ἔφατʼ ἔκ τʼ ὀνόμαζεν | and spoke to him, and addressed him | 254 | Iliad 1.361, 7.108 have "called him by name" |
| αὐτίκʼ ἔπειτα | At once | 323 | 2.322 |
| ὥρμαινε κατὰ φρένα καὶ κατὰ θυμόν | pondered in his mind and in his heart | 118 | 1.193 |
| ὤ μοι ἐγώ | Ah me | 119 | 11.404 |
| (διάνδιχα) μερμήριξεν, ἢ … ἦ | was torn two ways in thought, whether … or | 141 | 1.189, 13.455 |
| ὧδε (ὣς ἄρα) οἱ φρονέοντι δοάσσατο κέρδιον εἶναι | as he pondered, this seemed to him the better way | 145 | 13.458 |
| εἶδός τε μέγεθός τε φυήν τʼ ἄγχιστα | in looks and stature and build, most closely | 152 | 2.58 |
| οὐκ οἴη, ἅμα τῇ γε καὶ ἀμφίπολοι … | not alone; … handmaids … went along with her | 84 | 3.143 |
| γούνων λαβεῖν | clasp the knees | 142, 147 | 1.407 |
| ἐπέεσσι μειλιχίοισι | with soothing words | 143, 146 | 4.256, 6.214 |
| κερδαλέος | shrewd | 148 | 10.44 |
| ἔξοχον ἄλλων | above all others | 158 | 9.631 |
| βῆ ῥʼ (δʼ) ἴμεν ὥς τε λέων ὀρεσίτροφος | he went on like a mountain-bred lion | 130 | 12.299 |
| ἀλκὶ πεποιθώς | trusting in his courage | 130 | 5.299 |
| μήλων πειρήσοντα καὶ ἐς πυκινὸν δόμον ἐλθεῖν | make an attempt on the sheep, and go even into the close-built fold | 134 | 12.301 (the whole verse) |
| ἄλλυδις ἄλλη | this way and that | 138 | 12.461 |
| σμερδαλέος | terrible | 137 | 2.309 |
| θάρσος ἐνὶ φρεσὶ θῆκε | put daring in her mind | 140 | 5.2 (θάρσος); 1.55 (ἐπὶ φρεσὶ θῆκε) |
| χειρὶ παχείῃ | with his strong hand | 128 | 3.376 |
| ἐπὶ μακρὸν ἄυσαν | shouted aloud | 117 | 5.101 |
| μάστιγα καὶ ἡνία σιγαλόεντα | the whip and the glossy reins | 81 | 5.226 |
| μάστιξεν δʼ ἐλάαν | and whipped them to a run | 82 | 5.366, 8.45 |
| ἄμοτον | without end | 83 | 4.440 |
| ἐΰτροχος | well-wheeled | 72 | 8.438 |
| ἐΰξεστος | polished | 75 | 10.576 |
| πολυδαίδαλος | intricately worked | 15 | 3.358 |
| μενοεικής | satisfying | 76 | 9.90 |
| ἀσκῷ ἐν αἰγείῳ | in a goatskin | 78 | 3.247 |
| ποταμὸς δινήεις | the eddying river | 89 | 8.490 |
| μελιηδής | honey-sweet | 90 | 4.346 |
| ἔριδα προφέρουσαι | bringing on (a rivalry) | 92 | 3.7 ("bring on their evil strife") |
| παρὰ θῖνʼ ἁλός | along the shore of the sea | 94 | 11.622 |
| λοεσσάμεναι καὶ χρισάμεναι λίπʼ ἐλαίῳ | bathed and anointed themselves richly with olive oil | 96 | 10.577 |
| δεῖπνον εἵλοντο | took their meal | 97 | 2.399 |
| ἠελίοιο … αὐγῇ | in the rays of the sun | 98 | 8.480 |
| ἐν πυρὸς αὐγῇ | in the light of the fire | 305 | 9.206 |
| μολπή | song and dance | 101 | 1.472 |
| οἴνοπα πόντον | the wine-dark sea | 170 | 2.613 |
| ἁλὸς ἀτρυγέτοιο | the barren sea | 226 | 1.316 |
| πολιὴν … θάλασσαν | the gray sea | 272 | 4.248 |
| νῆες ἀμφιέλισσαι | the curving ships | 264 | 13.174 |
| νῆες ἐῖσαι | balanced ships | 271 | 1.306 |
| νηῶν … μελαινάων | the black ships | 268 | Iliad table |
| ἀγλαὸν ἄλσος | a splendid grove | 291 | 2.506 |
| θαῦμα ἰδέσθαι | a wonder to see | 306 | 5.725 |
| ἀέκητι | against the will of | 240, 287 | 12.8 |
| φίλα φρονέουσα | in friendship (is minded in friendship) | 313 | 5.116 |
| πατρίδα γαῖαν | native land | 315 | 2.140 |
| ἐπιζαφελῶς | furiously | 330 | 9.516 |
| καμάτῳ | weariness | 2 | 10.98 |
| κηρὶ δαμείς … Ἄϊδόσδε | overcome by fate … to Hades | 11 | 7.330 (Ἄϊδος δέ "to Hades") |
| ἠΐθεος | young man | 63 | 4.474 |
| ἕδος | seat | 42 | 4.406 |
| δηιοτής | combat | 203 | 5.348 |

Murray prints a comma in θεά, γλαυκῶπις Ἀθήνη (6.13, 6.112). The English follows the Iliad
formula θεὰ γλαυκῶπις Ἀθήνη without the comma.

### Formulas new in Book 6

These formulas have no example in the Iliad books of this library. Later books keep this English.

| Greek | English | Od. 6 |
|---|---|---|
| Φαιήκων ἀνδρῶν | of the Phaeacian men | 3, 114, 202 |
| Φαίηκες ἀγαυοί | the noble Phaeacians | 55 |
| Ναυσικάα λευκώλενος | white-armed Nausicaa | 101, 186, 251 |
| θυγάτηρ μεγαλήτορος Ἀλκινόοιο | the daughter of great-hearted Alcinous | 17, 196, 213 |
| ἐυῶπις κούρη | the fair-faced girl | 113, 142 |
| Διὸς κούρη μεγάλοιο | the daughter of great Zeus | 151, 323 |
| τοὶ οὐρανὸν εὐρὺν ἔχουσιν | who hold the wide sky | 150, 243 |
| τοὶ ἐπὶ χθονὶ ναιετάουσιν | who dwell on the earth | 153 |
| ἀνθρώπων … αὐδηέντων | human beings who have speech | 125 |
| (τήνδε) πόλιν καὶ γαῖαν ἔχουσιν | hold this city and land | 177, 195 |
| ἀνδρῶν ἀλφηστάων | grain-eating men | 8 |
| ἀπήνην ὑψηλὴν ἐύκυκλον | a carriage, high, with good wheels | 57–58, 69–70 |
| ἄμαξαν ἐύτροχον ἡμιονείην | the well-wheeled mule wagon | 72 |
| ἐπʼ ἐσχάρῃ ἧστο (ἧσται) | sat (sits) at the hearth | 52, 305 |
| ἠλάκατα στρωφῶσʼ ἁλιπόρφυρα | turning the sea-purple wool on her distaff | 53, 306 |
| χρυσέῃ ἐν ληκύθῳ ὑγρὸν ἔλαιον | liquid olive oil in a golden flask | 79, 215 |
| ἀλλὰ δότʼ, ἀμφίπολοι, ξείνῳ βρῶσίν τε πόσιν τε | But, handmaids, give the stranger food and drink | 209, 246 |
| παρθένος ἀδμής | the unwed maiden | 109, 228 |
| ῥεῖα … ἀρίγνωτος | easily known | 108, 300 |
| ἄλλʼ ἐνόησε(ν) | thought of something else | 112, 251 |
| ὀρέων αἰπεινὰ κάρηνα / πηγὰς ποταμῶν καὶ πίσεα ποιήεντα | the steep peaks of the mountains / the springs of rivers and the grassy meadows | 123–124 (6.124 = Il. 20.9, not yet in the library) |

## Book 6: disputed constructions

- **6.2**: ἀρημένος, "worn down" or "overpowered". Rendered "worn down", which keeps it apart from δαμείς "overcome" (6.11).
- **6.8**: ἀλφηστής. The ancient derivation is "grain-eating" (ἄλφι + ἔδω); a modern one is "earning, enterprising" (ἀλφάνω). Rendered "grain-eating men".
- **6.12**: θεῶν ἄπο μήδεα εἰδώς, wisdom that comes from the gods. Rendered literally, "who knew counsels from the gods".
- **6.27–28**: καλὰ μὲν αὐτὴν ἕννυσθαι, τὰ δὲ τοῖσι παρασχεῖν: fine clothes for the bride herself, and others for the groom's party. οἵ κέ σʼ ἄγωνται is "who will lead you home".
- **6.53, 6.306**: ἠλάκατα is the wool on the distaff (ἠλακάτη "distaff", Il. 6.491). Rendered "turning the sea-purple wool on her distaff".
- **6.70**: ὑπερτερίη, an upper frame or body set on the carriage. Rendered "fitted with an upper frame", with no further reconstruction.
- **6.80**: χυτλώσαιτο, to wash and then anoint oneself. Rendered "anoint herself after bathing".
- **6.92**: ἔριδα προφέρουσαι, the verb of the cranes' "evil strife" (Il. 3.7), here a friendly contest. Rendered "bringing on a rivalry".
- **6.100**: κρήδεμνα, headdresses or veils. Rendered "veils".
- **6.122**: ὥς τε, comparative ("a female cry, as of girls") or "how, so". Rendered as a comparison, because 6.125 asks whether the voices are nymphs' or human.
- **6.129**: μήδεα φωτός, a homonym of μήδεα "counsels" (6.12). Rendered "the man's genitals".
- **6.130–134**: the lion simile repeats Il. 12.299–301 with γαστήρ in place of θυμὸς ἀγήνωρ. Line 6.134 keeps the English of Il. 12.301.
- **6.149**: γουνοῦμαι is formed from γόνυ "knee", but Odysseus has decided not to clasp her knees. Rendered "I beseech you".
- **6.159**: ἐέδνοισι βρίσας, "weighing down" rivals with bride-gifts. Rendered "prevailing by the weight of his bride-gifts".
- **6.164**: λαός, the host that sailed for Troy or a band of men. Rendered "army", as the Iliad table.
- **6.166–168**: ὣς δʼ αὔτως … ὡς σέ makes one comparison across three lines, with the tense pair ἐτεθήπεα / τέθηπα. Rendered "in just the same way … I stood amazed … as I … stand amazed".
- **6.174**: παύσεσθαι has no stated subject, "the evil" (6.173) or "I". Rendered "it will cease".
- **6.179, 6.269**: σπεῖρα, pieces of cloth. "some wrapper for the cloths" at 6.179; "sails" at 6.269.
- **6.185**: μάλιστα δέ τʼ ἔκλυον αὐτοί, "they themselves feel it most" (the scholia, ἐπαισθάνονται) or "they have the best report". Rendered "they themselves know it best".
- **6.187**: the ἐπεί clause has no main clause; 6.188 starts a new thought. The line ends with a semicolon, and no main clause is supplied.
- **6.193**: ἀντιάσαντα has no object. Rendered "who has met with people", the smallest addition that makes the English complete.
- **6.201**: διερός, "living" (the scholia, ζῶν), "wet" or "swift". Rendered "no living mortal".
- **6.207–208**: πρὸς Διός, "from Zeus" or "under the protection of Zeus". Rendered "from Zeus". δόσις δʼ ὀλίγη τε φίλη τε has no verb: "and a small gift is a dear one".
- **6.254**: ἔκ τʼ ὀνόμαζεν. Nausicaa does not know his name and calls him "stranger" (255), so the formula is rendered "addressed him" here. The Iliad's "called him by name" (1.361, 7.108) fits only where a name follows. This is a deliberate exception to the formula rule.
- **6.262–267**: the ἐπήν clause has no main clause; Nausicaa turns to the gossip at 6.273. The description runs on with semicolons. πύργος is the towered wall around the city, "rampart", as Il. 12.333.
- **6.265**: ἐπίστιον, a ship-shed, a slip, or a station for each ship. Rendered "ship-shed", the sense in the scholia.
- **6.266–267**: ἀγορή is the place, "place of assembly"; Ποσιδήιον is a noun here, "shrine of Poseidon" (an adjective at Il. 2.506). ῥυτοῖσιν λάεσσι κατωρυχέεσσι is "hauled stones bedded deep in the earth".
- **6.274**: εἰσίν has no stated subject. Rendered "there are very overbearing men among the people", because 6.275 names one "baser man", not all Phaeacians.
- **6.278**: Murray prints ἦ τινά που, "surely, I suppose", with ἤ "or" at 6.280. Some editors print ἤ … ἤ, "either … or". The English "Perhaps … or" renders ἦ … που as a guess and keeps 6.280 as the alternative. Both readings give this sense.
- **6.300–303**: τοῖσι … οἷος is a correlation, and ἥρωος runs into 6.303. The English keeps the Greek order and leaves "the hero" on 6.303.
- **6.308**: ποτικέκλιται αὐτῇ, against the same pillar (κίονι, 6.307) or beside the queen. Rendered "leans against it".
- **6.329**: αἴδετο, the respect of a younger god for an elder kinsman. Rendered "stood in awe of", kept apart from "feel shame" (6.66, 6.221).
- **6.331**: πάρος ἣν γαῖαν ἱκέσθαι. The anger lasts up to the arrival, so πάρος + infinitive is "until he reached his own land".

## Later books

This file covers Book 6, the first Odyssey book in the library. Each later book adds its
formulas, key words and disputed constructions to the sections above. A later book keeps the
English fixed here. A later book that changes a rendering records the change, the lines and the
reason in this file.
