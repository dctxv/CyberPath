# VECTOR // NOTES SPEC — one living diagram per node

Status: v1 draft · Covers all 10 live modules (Phase 0 FOUNDATIONS, Phase 1 CRYPTO, FRONTIER)
Reference implementation: **FR-03 POST-QUANTUM CRYPTOGRAPHY** ("The Lock That Survives")

---

## 1. Why PQC is the gold standard

Every module in the atlas currently falls into one of two shapes:

**Shape A — the scroll-of-sections (most modules).**
A stack of `bb-section` blocks: kicker → statement → friendly copy → a button or
input → a text readout (`cx-ok` / `cx-alarm` / `bb-readout`). The user scrolls,
reads, presses, reads. The *evidence* for every claim is a sentence, not a picture.
It works, but it reads like a worksheet with buttons.

**Shape B — the PQC shape (only FR-03 has it).**
One persistent, manipulable diagram that never leaves the screen, with a short
chaptered story that reconfigures it. The claim is proven by the diagram itself:
you drag the ◆ message, press FIND NEAREST DOT with each key, and *watch* the
private key snap to the right dot while the public key lands on a near-miss.
Nobody has to tell you lattice crypto works — your own hand just felt it.

Deconstructed, the PQC shape is seven ingredients:

1. **A centerpiece** — one spatial model (the 3D lattice canvas) that IS the topic.
   It's on screen from the first second and stays there. Everything else orbits it.
2. **Chapters, not scroll** — 3 numbered tabs (01 THE GRID / 02 TWO KEYS /
   03 THE ATTACK). Each chapter re-dresses the *same* centerpiece; controls appear
   and disappear per chapter (`pqShowKeys`, `pqShowSkew`, `pqShowAttack`).
3. **DO THIS** — every chapter has exactly one imperative instruction
   ("Drag the tip of an arrow…"). The user always knows what their hands should do.
4. **Direct manipulation** — drag handles, orbit camera, sliders that visibly warp
   the model. Input changes the *picture*, not just a readout line.
5. **The felt proof** — one moment where the core claim is demonstrated by the
   user's own action failing or succeeding (public key → WRONG DOT).
6. **The fizzle** — the attack you expect to work, tried and visibly failing
   (TRY A QUANTUM ATTACK → "NO ADVANTAGE… the lock holds").
7. **Legend + HONESTY MANDATE** — shapes are named; simplifications are confessed
   in a fixed footer block.

**The spec, in one sentence:** every node gets its own Shape-B centerpiece — a
unique, persistent, manipulable diagram — with the seven ingredients above, and
no two nodes may reuse the same visual metaphor or interaction mechanic.

### 1b. The elevated bar — cinematic narrated step-through (v2 direction)

Static chapters are the floor, not the ceiling. The bar we're actually building
to: each module is its own **bespoke, cinematic mini-experience**, not a reskin
of one template. The signature interaction is a **narrated animation that plays,
decelerates to a slow-mo stop at each key beat, and surfaces an explainer of
exactly what's happening right there** — the user supplies the input (types a
message, aims a thing), presses go, and then *watches the concept happen to
their own input*, with the system narrating itself beat by beat.

Reference build: **FD-02 "Send a Message"** — you type a message to a friend,
hit SEND, and a packet animates across a canvas of machines (you → router →
DNS detour → ISP → backbone → server → home), coasting to a slow-mo halt at
each hop where a full-bleed explainer card fades in and the machine pulses.
CONTINUE advances the story. This is the feel every module should have: unique
visuals, unique verb, cinematic pacing, "interesting" over "correct-looking."

---

## 2. Cross-cutting standard (applies to every module)

Keep (already consistent, don't touch):
- HUD chrome: corner brackets, module code (FD-xx / CR-xx / FR-xx), theme toggle,
  [ EXIT ], blinking status line, module-specific counter bottom-right.
- Typography/tokens: Archivo + IBM Plex Mono, `--bb-*` vars, light/dark themes.
- `bb-scope` honesty footer on every module. Never simulate real attacks.
- The "bridge" button to the next node with a cliffhanger sentence.
- Reduced-motion support and pointer-capture patterns from `drawPqCanvas`.

Adopt everywhere (the upgrade):
- **Layout**: centerpiece stage + console rail (the `pq-chamber-grid` pattern —
  stage left, tabs/readout/controls right; stacks vertically on mobile).
- **Chapters**: 3–4 max, numbered `01..04`, each with title, 1–2 sentence copy,
  and one DO THIS line. Completing a chapter's action auto-advances or lights
  the next tab (PQC currently requires manual tab taps — see §3.10).
- **Legend**: every glyph on the stage gets a legend chip.
- **One felt proof + one fizzle** per module, minimum.
- **State discipline**: per-module state keys keep their prefix (`bits*`, `sym*`,
  `ha*`, `rsa*`, `sg*`, `tl*`, `qb*`, `qr*`, `pq*`); canvas modules draw via a
  single `draw<X>Canvas()` reading CSS vars for theming, like `drawPqCanvas`.
- **Progression payoff**: end-screen restates the one-sentence takeaway in
  `bb-statement` size, then the bridge.

Uniqueness ledger — each module owns ONE mechanic, no repeats:

| Node | Centerpiece | Owned mechanic |
|---|---|---|
| FD-01 Bits & Bytes | Signal oscilloscope wire | Flip switches → live waveform |
| FD-02 How the Internet Works | Isometric route map | Drag the packet along hops |
| CR-01 Symmetric Encryption | Rotor cipher machine | Scrub message *through* the machine, both directions |
| CR-02 Hashing | One-way grinder funnel | Pour text in; watch avalanche cascade; back-flow valve refuses |
| CR-03 Public-Key | Two-key padlock bench | Drag physical keys onto a lock |
| CR-04 Digital Signatures | Wax-seal desk | Press seal / crack seal on live document |
| CR-05 TLS/HTTPS | Split-wire handshake theater | Order the steps, watch envelopes fly, attacker split-screen |
| FR-01 Qubit | Arrow stage (Bloch shadow) | Drag arrows tip-to-tail; interference |
| FR-02 Quantum vs RSA | Period comb wall | Drag a comb across a signal to feel period-finding |
| FR-03 Post-Quantum | 3D lattice (built) | Drag basis vectors; nearest-dot snap |
| AT-01 Malware | Sandboxed detonation tree | Detonate; watch the tree grow node-by-node, red-boxed behaviors vs quiet benign |
| AT-02 Phishing | One-message inbox card | Tap-to-reveal sender/link hotspots; timed verdict calls under pressure |
| AT-03 Web Vulnerabilities | Live query / DOM x-ray | Type input, watch it cross from data (ink) to code (red) in the live query/output; naive vs real patch |
| AT-04 Pentesting | Attack path tree | Chain foothold → escalate → pivot → crown jewel; defender severs one link, watches the downstream tree go dark |
| AI-01 Prompt Injection | Document with a smuggled instruction | Pick a doc + defense combo; the sneakiest phrasing always evades pattern-based defenses, only capability-limiting holds |
| AI-02 Adversarial ML | Classifier + perceptibility dial | Drag noise until the label flips while the image stays visually identical; heatmap reveals off-face attention; defense narrows but never closes the invisible window |
| AI-03 Data Poisoning | Nearest-centroid scatter + boundary | Inject mislabeled points and watch the line warp; plant a dormant trigger zone that overrides classification on command while accuracy barely moves |
| AI-04 Model Leakage | Toy model query console | Compare confidence between a trained and untrained record; assemble 3 harmless queries into one private profile; privacy/accuracy trade-off dial |
| GV-01 Fraud & AML | Four-quadrant transaction graph | Inspect ring/structuring/layering/legit clusters, flag or clear each; sensitivity dial live-trades real rings caught against false freezes |
| GV-02 Cyber Risk | Exposure bars + fixed budget | Build one risk's exposure from sliders, then allocate a real budget across 5 controls; the biggest remaining number fires as a scenario |
| GV-03 Governance | 5-category coverage grid | Click-select a control, click-place onto a category; RESPOND has no available control — a drill exposes it and any mismatched placement as ineffective |
| GV-04 Compliance | Evidence-to-requirement audit board | Match artifacts to requirements (one has no valid evidence, ever); a passed-on-paper control gets exploited by a simulated incident — COMPLIANT: TRUE / SECURE: FALSE, atlas finale |

---

## 3. Per-node specs

### 3.1 FD-01 · BITS & BYTES — "The Signal Wire"

**Today:** the strongest non-PQC module — a real game (5 timed rounds of
switch-flipping to hit target bytes, SIGNAL LOST diff screen, efficiency score).
But the byte is displayed as text (`DEC 66 // 01000010`); the switches change a
*number*, and the drama lives in captions.

**Gap:** no picture of what a bit physically *is*. The topic is "data is voltage
patterns on a wire" and there is no wire.

**Centerpiece:** a live oscilloscope strip across the top of the stage — the
current byte rendered as a scrolling square-wave pulse train (high = 1, low = 0),
looping. The 8 switches sit directly under their pulse positions. Flip a switch
and its segment of the waveform snaps up/down in place. The decoded character
rides above the wave as the "received glyph."

**Chapters** (the existing 5 rounds map onto these — keep the game, re-skin it):
- 01 THE WIRE — DO THIS: flip switches and watch the wave change. Free play,
  calibration round.
- 02 TARGET LOCK — rounds 2–4 as today (hit DEC targets, case-flip lesson,
  spell a word), but targets shown as a *ghost waveform* overlaid on yours;
  you're matching wave to wave, and the diff on SIGNAL LOST is visual.
- 03 CORRUPTION — round 5 (find the corrupted character): the message streams
  across the wire glyph by glyph; one glyph's wave has a flipped segment
  glowing faintly. You catch it by watching the signal, then fix the bit.

**Felt proof:** the case-flip round — one switch (weight 32) visibly nudges one
wave segment and `B` becomes `b` on the received glyph. One bit, new meaning.
**Fizzle:** "SPOT THE TAMPER BY EYE" on a 12-character message at full scroll
speed — you can't; sets up hashing. (This replaces nothing; it strengthens the
existing bridge line "how would a machine know?")
**Honesty:** keep the BYTE MODE footer (one-byte map, UTF-8 disclaimer).

### 3.2 FD-02 · HOW THE INTERNET WORKS — "The Route"

**Today:** URL input + presets, a 0–10 scrub slider, and sections that appear as
the stage advances (URL chunks, DNS card pair, request card, hop list, resource
pieces, failure lab). Good bones — the scrubber is already "one request, moved
through the conversation" — but the route is a *list* (`iw-route` rows) and the
page assembly is abstract cards.

**Gap:** the journey is described, never seen. The topic is literally a map and
there is no map.

**Centerpiece:** an isometric (or flat 2.5D canvas) network map: YOUR DEVICE →
ROUTER → ISP → DNS (side quest) → BACKBONE → SERVER, drawn as machine-vision
nodes with the atlas aesthetic. The request is a glowing packet dot ON the map.
The existing scrub slider stays but now drives the dot along the path; you can
also drag the dot directly. Return trip runs the reverse direction carrying the
response pieces.

**Chapters:**
- 01 THE ADDRESS — type/pick a URL; the URL splits into protocol/domain/path
  chips that attach to the packet as its "shipping label." DO THIS: load a URL.
- 02 THE JOURNEY — DO THIS: drag the packet from your device to the server.
  DNS is a visible detour: the packet physically stops at the DNS node, swaps
  the name-chip for an IP-chip, then continues. Each hop pops a one-line meta
  (today's `iw-hop-meta` content).
- 03 THE ANSWER — the server fires back 4 packets (html/css/img/js); they land
  in the browser frame at the start of the map and the toy page assembles
  piece by piece as each arrives. Tap any assembled piece → its packet re-runs
  its trace on the map (replaces the text-only `iw-trace`).
- 04 BREAK IT — failure lab, on the map: pick a symptom, the failing node
  flashes ALARM on the route, and the packet visibly dies there.

**Felt proof:** dragging the packet *backwards* mid-route and seeing state
rewind — the request is a sequence of machine-to-machine handoffs, not magic.
**Fizzle:** "READ THE PACKET" button at a mid-route hop — every carrier on the
path can read the plaintext label and payload. Sets up the CRYPTO phase; the
bridge buttons already point there.
**Honesty:** keep SIMULATION ONLY footer (reserved doc addresses, no live DNS).

### 3.3 CR-01 · SYMMETRIC ENCRYPTION — "The Rotor Machine"

**Today:** two inputs (message, key), a hold-to-seal button, keyprint bars, then
scroll-sections: ciphertext block, hostile scanner, decrypt chamber, avalanche
dial, keycard guessing, handoff toggle. The actual transformation happens
off-screen during the hold — you see before and after, never *during*.

**Gap:** encryption is a transformation and the transformation is invisible.

**Centerpiece:** a cutaway cipher machine: message tiles queue on the left, pass
through 3 visible rotor/gear stages (their teeth patterns generated from the
keyprint — reuse `symFingerprint`), and emerge as ciphertext tiles on the right.
A big horizontal scrubber drags the message through the machine — character by
character, you watch each glyph hit rotor 1, warp, hit rotor 2, warp again.
**Scrubbing is bidirectional: with the same key, dragging back through the
machine un-scrambles it.** That IS symmetric encryption, felt.

**Chapters:**
- 01 THE MACHINE — DO THIS: type a message and scrub it through. Watch each
  character transform per stage.
- 02 THE KEY IS THE MACHINE — DO THIS: change one key character. The rotors
  visibly re-cut (teeth re-snap, keyprint bars re-shuffle) and the same
  plaintext now scrubs to totally different ciphertext (absorbs today's
  avalanche dial — delta % readout stays).
- 03 THE RETURN TRIP — DO THIS: scrub backwards with the right key (clean
  reverse), then switch to a wrong keycard and scrub back — the tiles come out
  as garbage mid-machine, gears visibly misaligned. Absorbs decrypt chamber +
  keycard section. Hostile scanner stays as a one-tap side panel.
- 04 THE FLAW — handoff: the machine's key must ALSO travel the wire (show the
  key-chip riding the FD-02 route in miniature, eavesdropper watching). The
  cliffhanger for CR-03 as today.

**Felt proof:** backwards scrub with right key vs wrong key.
**Fizzle:** hostile scanner (already exists — keep, readability 0%).
**Honesty:** keep LEARNING SIMULATION footer (not real AES).

### 3.4 CR-02 · HASHING — "The Grinder"

**Today:** four scroll-sections (avalanche compare cards, collision hunt
counter, reverse-guess input, tamper detector). The lessons are right; every one
is a text-card comparison.

**Gap:** "one-way function" is a plumbing concept with no plumbing on screen.

**Centerpiece:** a vertical one-way grinder: text funnels in the top, falls
through 4 visible mixing stages (each stage a row of cells that swirl/XOR the
stream — nibbles visibly ricochet and recombine), and the 32-nibble fingerprint
crystallizes at the bottom. A prominent one-way valve (check-valve glyph) sits
between input and output. Typing re-pours in real time.

**Chapters:**
- 01 THE POUR — DO THIS: type; watch the cascade and the print crystallize.
- 02 AVALANCHE — DO THIS: change one letter. The single changed nibble enters
  stage 1, and you watch the corruption *spread* — 1 cell → 5 → 19 → half the
  print flipping red at the bottom (today's delta % readout stays).
- 03 NO WAY BACK — DO THIS: grab the fingerprint and drag it UP toward the
  valve. It physically refuses (bounces, valve flashes). Then the guess input
  as today — but guesses pour DOWN and their prints land next to the target,
  never matching. Absorbs collision hunt (attempt counter stays) + reverse.
- 04 THE ALARM — tamper detector as today, but original and received both hang
  under their grinders side by side; edit → prints diverge with a red seam.

**Felt proof:** dragging the fingerprint against the valve — the inverse doesn't
exist and your hand learns it.
**Fizzle:** collision hunt (exists — keep the "COLLISION SPACE UNREACHABLE"
wall and the give-up readout).
**Honesty:** keep footer (illustrative hash, not SHA-256).

### 3.5 CR-03 · PUBLIC-KEY CRYPTOGRAPHY — "The Bench"

**Today:** the padlock (CSS shackle) with CLICK SHUT / CLICK TO OPEN / USE THE
KEY buttons, then key-pair cards, lock-with-public, open-with-both, publish to
wire, eavesdropper counter. The story is excellent (the padlock metaphor + the
identity cliffhanger). Interaction is all buttons.

**Gap:** the physical intuition — two *different physical objects* with
different powers — is told through button labels instead of objects.

**Centerpiece:** a workbench: one padlock center-stage, a keyring on the right
holding draggable key objects — SERVER PUBLIC (red, blunt: lock-only), SERVER
PRIVATE (ink, cut: unlock-only), and later EAVESDROPPER'S copies. You drag a key
onto the lock; the lock animates (snaps shut / springs open / rejects with a
shudder). The message rides inside a strongbox under the lock.

**Chapters:**
- 01 ONE LOCK, TWO POWERS — DO THIS: click the shackle shut with your finger
  (no key needed), then try to drag it open — it refuses; drag the PRIVATE key
  on — it opens. Locking and unlocking are different powers.
- 02 SEAL FOR A STRANGER — DO THIS: drop the message in the box, drag the
  PUBLIC key on to seal. Then try to re-open with the same PUBLIC key —
  rejected ("that key only closes"). PRIVATE opens it.
- 03 PUBLISH THE LOCK — DO THIS: fling the PUBLIC key onto the wire (it
  duplicates to everyone, including the eavesdropper figure). Eavesdropper
  drags their copy onto an intercepted box, N times, counter climbs, opened: 0.
- 04 THE CATCH — the eavesdropper holds up their OWN public key next to the
  server's. They look identical. "Which lock did you just grab off the wire?"
  Identity cliffhanger → signatures bridge (as today).

**Felt proof:** the same key object that sealed the box failing to open it.
**Fizzle:** eavesdropper's open attempts (exists — keep counter).
**Honesty:** keep footer (padlock is a metaphor; real RSA is primes).
**Optional stretch:** a small "why it's hard" side widget — a two-digit ×
two-digit multiply (instant) vs "which two primes make 899?" timer — feeding
FR-02, which reveals N on this very lock.

### 3.6 CR-04 · DIGITAL SIGNATURES — "The Seal Desk"

**Today:** message input, SIGN button, signature nibbles card, verify with
Alice/Mallory key pick, forge button. Correct lessons; three button-sections.

**Gap:** a signature *binds identity to exact content* — nothing on screen is
bound to anything.

**Centerpiece:** a document on a desk: the message rendered as a letter, and a
wax seal object. Signing = dragging ALICE'S PRIVATE KEY onto the letter; a seal
stamps down, and inside the wax you can SEE the fingerprint nibbles embossed
(reuses the CR-02 print — visual continuity: a signature is a *sealed
fingerprint*). Verification = holding a public-key lens over the seal: Alice's
lens resolves the emboss into VERIFIED; Mallory's lens shows scrambled emboss.

**Chapters:**
- 01 PRESS THE SEAL — DO THIS: sign. Watch the print flow off the message into
  the wax.
- 02 TWO CLAIMS, ONE CHECK — DO THIS: verify with each lens. Alice → VERIFIED;
  Mallory → IDENTITY MISMATCH.
- 03 CRACK IT — DO THIS: edit one character of the *signed* letter. The wax
  visibly cracks along a seam in real time (the embossed print no longer
  matches the letter's live print — show both diverging). Undo the edit → the
  crack heals. This is the felt proof.
- 04 FORGE — DO THIS: try to press a seal holding only Alice's PUBLIC key. The
  stamp bounces — "PRIVATE KEY REQUIRED // NOT HELD." Fizzle, as today.

**Payoff:** the three-tool inventory line (secrecy + fingerprint + identity)
and the TLS bridge, as today.
**Honesty:** keep footer (hash-then-encrypt simplification, CAs come later).

### 3.7 CR-05 · TLS / HTTPS — "The Handshake Theater"

**Today:** plain-HTTP horror card, 4-step order puzzle (good mechanic — keep!),
attacker view toggle with noise cards, MITM button. The puzzle is the right
idea; but a correctly-ordered list just… turns green. The handshake never
*happens*.

**Gap:** the module's promise is "watch them assemble" — nothing assembles.

**Centerpiece:** a theater: BROWSER stage-left, SERVER stage-right, one wire
between them, an ATTACKER clamped onto the middle of the wire with their own
small "what I can read" screen — permanently visible (this is the unique twist:
the attacker's live feed is part of the stage from second one). Handshake
messages are envelopes/certificates/keys that physically fly along the wire when
steps execute.

**Chapters:**
- 01 THE CLEARTEXT DAYS — plain HTTP: the login flies across and the
  attacker's screen shows it verbatim (`user=clay pass=hunter2`). DO THIS:
  send it. Feel bad.
- 02 BUILD THE HANDSHAKE — the existing order puzzle, but each correctly
  placed step *plays out on the wire* (cert flies over → lens-check glyph from
  CR-04 verifies it → key agreement sparks → cipher engages, wire turns to
  static texture). Wrong order still fails with today's specific error copy.
- 03 THE ATTACKER'S HAUL — no toggle needed: their screen has been live the
  whole time. Scrub back through the handshake timeline and watch their feed
  degrade from full plaintext (01) to certificate-only to pure noise. DO THIS:
  scrub the timeline. This absorbs SCAN 02.
- 04 THE IMPOSTER — MITM: drag the attacker's own certificate into the cert
  slot mid-handshake; the CR-04 seal-check catches it visually (seal cracks,
  ALARM). Answers the CR-03 identity question, as today.

**Felt proof:** the attacker feed degrading under the timeline scrub.
**Fizzle:** MITM cert swap (exists — upgrade from button to drag).
**Honesty:** keep footer (simplified TLS 1.3, concept sim only).

### 3.8 FR-01 · WHAT IS QUANTUM COMPUTING — "The Arrow Stage"

**Today:** closest to Shape B already — the qb-dial with the arrow, angle
slider, measurement tally, phase slider with cancel demo, rigged game. The
pieces are right but they're *four separate little widgets* scattered down a
scroll; the arrow you aim in SCAN 01 is not the arrow that cancels in SCAN 02.

**Gap:** continuity. PQC has ONE lattice; this has four disconnected props.

**Centerpiece:** ONE arrow stage — a big circular dial that persists through
all chapters (the same visual object throughout, exactly like the lattice).
Upgrade input from sliders to *dragging the arrow itself* (pointer math already
exists in the PQC module to steal from).

**Chapters:**
- 01 THE COIN — the classical bit as a degenerate arrow: it can only point
  straight up (1) or straight down (0), snapping between. DO THIS: flip it.
  Establishes the stage; the bit lives on the same dial the qubit will.
- 02 THE AIM — DO THIS: drag the arrow to any angle; MEASURE collapses it (the
  arrow visibly slams to 0 or 1); tally histogram fills; the trap ("read the
  exact angle") stays — springing it slams the arrow down mid-drag.
- 03 CANCELLATION — the one thing a coin can't do: a second ghost arrow fades
  in on the same dial; drag it opposite the first and watch the outcome-0
  amplitude bar shrink to zero. Tip-to-tail addition drawn live on-stage.
- 04 THE RIGGED GAME — as today (classical probe vs quantum routine), but the
  routine animates ON the stage: both answer-arrows appear, the wrong one
  visibly cancels to nothing, one measurement fires, done.

**Felt proof:** dragging arrows opposite and watching probability hit 0 —
"these can subtract" in your own hand.
**Fizzle:** the trap / classical probes (both exist — keep).
**Honesty:** keep footer (amplitudes-not-probabilities, 1-qubit shadow,
myth-busting).

### 3.9 FR-02 · QUANTUM vs RSA — "The Comb"

**Today:** inspect-the-lock reveal (N = p×q), classical brute counter with
geological time estimate, the bloom bar strip (two bars spike when Shor runs),
cascade rows. Great narrative (it attacks the lock YOU built); the actual idea
— period-finding — happens inside one button press.

**Gap:** "wrong periods cancel, the right one rings out" is the whole point and
it's currently a 2-bar CSS strip.

**Centerpiece:** a signal wall: the modular-exponentiation sequence for the
lock's N rendered as a repeating waveform/dot-row (the hidden repetition is IN
the picture but hard to eyeball). Below it, a draggable comb — evenly spaced
tines. Drag the comb's spacing; when tines align with the signal's true period,
the whole wall lights up in resonance. That's period-finding, felt by hand.

**Chapters:**
- 01 THE SECRET — inspect the lock (as today, same padlock object from CR-03);
  N revealed; the signal wall boots up, generated from N.
- 02 BY HAND — DO THIS: brute-force slider/counter (as today) PLUS drag the
  comb yourself. With a toy N you *can* find the period manually after some
  fiddling — and the readout shows real N would need more spacings than atoms.
  You now know what the machine is looking for.
- 03 THE MACHINE — RUN SHOR'S: every comb spacing tried in superposition —
  visualized as all combs ghosted at once, wrong spacings destructively
  fading (reuse the FR-01 cancellation grammar), the right comb blooming to
  full brightness. Period → factors fall out → the padlock springs open
  (today's alarm copy).
- 04 BLAST RADIUS — cascade as today, but the falling rows are the actual
  module icons from the atlas (symmetric*, hashing*, sig, tls) toppling —
  (*with the honesty caveat that symmetric/hashing only weaken, per footer).

**Felt proof:** finding the toy period with your own comb-drag in 02, so 03's
"all spacings at once, wrong ones cancel" lands as a shortcut you understand
rather than magic.
**Fizzle:** classical brute force geological-time counter (exists — keep).
**Honesty:** keep footer verbatim (can't factor real keys yet; period-finding
not try-everything; AES only weakened).

### 3.10 FR-03 · POST-QUANTUM CRYPTOGRAPHY — reference, with fixes

Already Shape B. Known weakness (author's own note: "still a little hard to
understand"). Targeted fixes, no rebuild:

- **Add a chapter 00 // WHY A NEW LOCK** — one screen, no interaction: three
  lines — "RSA hid a repeating pattern. The quantum machine finds patterns.
  This lock hides a *location* instead." Right now chapter 01 opens on "two
  arrows build a grid" before the learner knows why they're looking at a grid.
- **Auto-advance**: when the chapter's DO THIS is completed (arrow dragged /
  both keys tried / snap pressed with both keys), pulse the next tab. Learners
  currently don't realize the tabs are the story.
- **Name the metaphor once**: "the grid dots are all possible locked messages;
  the ◆ is YOUR message, knocked off-grid by deliberate noise" — this sentence
  exists implicitly across ch.03 copy but should be the ch.00 anchor.
- **Slow the first snap**: FIND NEAREST DOT currently teleports; animate the
  snap path (150ms) so private-vs-public rounding is watchable.
- **Dead state pruning**: the LWE encrypt/decrypt/noise handlers (`pqEncrypt`,
  `pqDecrypt`, `pqSetNoise`, `pqSetDimension`) are exported to the template but
  nothing in the HTML binds them — the only survivor is `pqQuantumTry`, which
  jumps `pqChapter` to 5 so the dimension-bars canvas branch flashes during the
  quantum fizzle. Either delete the dead LWE code (`pqCipher`, `pqNoise`,
  `pqMessageBit` state + the chapter-4 noise-rings branch) or (better)
  resurrect dimension as a real chapter 04 // THE WALL: a slider 2→12 driving
  the existing dimension-bars viz — "you can eyeball 2D; at 500-D nobody can."

---

## 4. Build order & definition of done

Suggested order (each is an independent PR-sized change, matching "work through
it little by little"):

1. FR-03 fixes (§3.10) — smallest, sharpens the reference before cloning its shape.
2. CR-02 Hashing — highest leverage: its fingerprint visual is reused by CR-04
   and CR-05, so its grammar must exist first.
3. CR-03 Bench → CR-04 Seal Desk → CR-05 Theater (they chain props: lock → seal → both).
4. FD-02 Route (feeds CR-05's wire imagery), then FD-01 Signal Wire.
5. FR-01 Arrow Stage → FR-02 Comb (comb reuses cancellation grammar).

A module is DONE when:
- [ ] Centerpiece visible within 1s of open, present in every chapter.
- [ ] ≤4 chapters, each with one DO THIS; completing it lights the next tab.
- [ ] At least one felt proof and one fizzle.
- [ ] Legend covers every stage glyph; HONESTY MANDATE / scope footer intact.
- [ ] Works with drag on touch + mouse; reduced-motion path; both themes
      (canvas reads CSS vars, no hardcoded colors).
- [ ] Bridge button to next node with cliffhanger copy.
- [ ] No mechanic duplicated from the uniqueness ledger (§2).
