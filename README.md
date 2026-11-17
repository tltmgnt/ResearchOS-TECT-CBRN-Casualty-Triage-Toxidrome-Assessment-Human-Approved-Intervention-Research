# ResearchOS TECT — CBRN Research Studio

A simulation-only research workspace for synthetic/manikin assessment records, human review and intervention-demonstration evidence. This implements the software research workflow in the proposed white paper, not an autonomous medical or robotics system.

## Working application
- Twenty fictional cases, local coordinate records and five toxidrome reference cards.
- Researcher-entered category, triage, quality and uncertainty notes; no automated clinical inference.
- Casualty-specific simulation review with approve/refuse/withhold, expiry and revision binding.
- Recorded simulation outcomes, payload accounting, refusal and safety invalidation.
- Descriptive synthetic-label agreement, coverage and event timing.
- Requirements register and local evidence-file hashing, always explicitly unverified.
- Browser-local persistence, verified event replay, JSON/CSV/Markdown exports and CLI.

Hosted workspace: https://researchos-tect-cbrn-research.troturn31.chatgpt.site (private; sign in with ChatGPT). Publication status must be confirmed separately from this source URL.

## Run locally
Node 22+, no npm dependencies:
```sh
npm run check
python -m http.server 8000 --directory dist
```
Open http://localhost:8000. Modules, fetch and Web Crypto require localhost or HTTPS; direct file:// opening is unsupported. No patient data, credentials, clinical algorithms or device endpoints are needed.

## Reproducible CLI
```sh
node cli.mjs init examples/study.json /tmp/cbrn-record.json
node cli.mjs verify /tmp/cbrn-record.json
node cli.mjs report /tmp/cbrn-record.json
node cli.mjs csv /tmp/cbrn-record.json /tmp/cbrn-cases.csv
```
Output files refuse overwrite. The browser and CLI share one engine. Import expects the exported record wrapper with bundle and evidence fields. Events are replayed and checked; evidence references are unverified metadata.

## Research boundaries
[State model and integrity contract](docs/MODEL.md) · [Validation and missing evidence](docs/VALIDATION.md)

No real-patient use, diagnosis, treatment recommendation, physical delivery, real-time sensor input, specific-agent identification or chemical-specific sensor is implemented. Reviewer/observer labels are unauthenticated. Event hashing is consistency checking, not tamper-proof identity or evidence verification. Browser-local records are not encrypted or synchronized; export backups and keep original evidence separately.

All physical and clinical claims remain unverified. Reference toxidromes are for simulation design. A checked airway plan is not airway capability. Five software completions do not satisfy a five-manikin physical demonstration. No DARPA affiliation, eligibility, medical-device approval or clinical effectiveness is claimed. TECT is retained as the project identifier without an assumed expansion.

## Checks and publishing
`npm run check` checks source syntax, runs 21 unit tests and builds the static app. GitHub Actions repeats checks and CLI replay on Node 22 and 24, and uploads `dist/`. Sites configuration identifies the hosted project; production source is packaged and deployed separately. Interactive browser verification is reported separately from unit tests.

Apache-2.0 license retained.
