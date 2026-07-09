# VECTOR // CyberPath

An interactive cybersecurity learning atlas — 29 hand-built, browser-based
simulations that teach security concepts by letting you *do* them instead of
reading about them: break a login with SQL injection, factor an RSA key with
Shor's algorithm, phish yourself, audit a company for compliance, and more.

Built as both a study tool and a portfolio piece.

**[Live demo](./index.html)** — open in a browser, no build step, no install.

## What it is

VECTOR presents the whole field of cybersecurity as one navigable atlas,
organised into four phases:

| Phase | Covers |
|---|---|
| **0 — Foundations** | Bits & bytes, how the internet works |
| **1 — Build the system** | Symmetric encryption, hashing, public-key crypto, digital signatures, TLS/HTTPS, quantum computing, quantum vs. RSA, post-quantum crypto, packets/TCP-IP, DNS, VPNs, passwords, MFA, OAuth, Zero Trust |
| **2 — Break the system** | Malware, phishing, web vulnerabilities (XSS/SQLi), pentesting |
| **3 — Govern the system** | Prompt injection, adversarial ML, data poisoning, model leakage, fraud & AML, cyber risk, governance, compliance |

Every module is a self-contained interactive simulation — not a slideshow.
Examples: drag physical key objects onto a padlock to feel why public and
private keys have different powers; type a real SQL injection payload into a
sandboxed login form and watch the query it rewrites; run Shor's algorithm
against a lock you built yourself two modules earlier.

Each module ends with a `LEARNING SIMULATION` disclosure describing exactly
what's simplified — the goal is correct intuition, not a fake sense of
implementing production-grade crypto.

## Running it

No build step. Clone or download the repo and open `index.html` in a
browser, or serve the folder locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000/index.html
```

## How it's built

- **Vanilla HTML/CSS/JS** — no framework, no bundler, no `node_modules` at
  runtime. React is the only dependency, loaded from a CDN.
- **A tiny custom component runtime** (`assets/js/support.js`) compiles the
  `<x-dc>` template block in `index.html` — `{{ expr }}` interpolation,
  `sc-for` / `sc-if` control flow, event bindings — into React elements. It's
  a from-scratch reimplementation of a template-to-React pipeline, generated
  from a TypeScript source (`dc-runtime/src/*.ts`) not included in this repo.
- **`assets/js/app.js`** is the application logic for the whole atlas: the
  node/graph layout for the map, per-module state machines, and the
  `draw*Canvas()` functions that render each module's custom `<canvas>`
  visualization (rotor machines, lattice diagrams, packet routes, attack
  trees, transaction graphs, and more).
- **Modules are fetched fragments.** Each node in `modules/*.html` is loaded
  and inlined at boot by `assets/js/boot.js`, keeping `index.html` as the
  shell and each module independently editable.
- Fully **themeable** (light / dark) and **responsive** down to mobile —
  canvases redraw from CSS custom properties rather than hardcoded colors.

## Status

v0.2 — 29 of 30 planned modules are live and fully interactive. MITM
interception is the one module still pending.

## License

MIT — see [LICENSE](./LICENSE).
