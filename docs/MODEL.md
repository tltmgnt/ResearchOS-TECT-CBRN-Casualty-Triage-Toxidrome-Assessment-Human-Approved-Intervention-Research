# ResearchOS TECT CBRN simulation contract

## Implemented scope
This software is a research record and simulation harness. It does not localize people, read sensors, estimate vital signs, infer a medical category, recommend patient treatment, transmit device commands or administer a substance. Researcher-entered assessment labels are compared with visible authored synthetic labels. These are not trained-model predictions, blinded validation or clinical evidence.

Only version 1 studies with mode `simulation` and cases marked `synthetic-manikin` are accepted. The default fixture contains 20 fictional cases spanning five category labels and one deliberately unknown presentation. The label does not establish that user-entered text is actually synthetic; users must keep real patient and operational data out of the app.

## State transitions and timing
Start assessment creates a new case revision and clears prior assessment/approval. Record assessment requires that start event. Entered category, triage, quality and notes are owner declarations. Unknown category, withheld triage or limited/unavailable quality cannot authorize a simulated task. There is no clinical classification threshold in executable code.

Human review records approve/refuse/withhold, reviewer label and rationale. Approval requires a complete, non-withheld assessment at most five minutes old, remaining fictional payload, the category-matched simulation task and an applicable-airway-plan declaration. Approval lifetime is 10–300 seconds and is bound to one case and revision. These are engineering defaults for this software exercise, not clinical timing recommendations.

A simulation outcome requires a current bound approval and non-stale assessment. At exact expiry approval is invalid. Every attempt consumes one fictional payload unit, including failed attempts. The outcome consumes approval. Completed cases cannot be assessed or completed twice. A failed case requires a new human approval for another attempt. Safety invalidation clears both assessment and approval and requires a new assessment. No automated retry occurs.

The browser supplies wall-clock time; replay verifies nondecreasing timestamps. This is not a secure clock and cannot prove real-world timing. Session elapsed time is not autonomous hardware assessment latency.

## Integrity and imports
Each event contains sequence, previous digest, event type, payload, timestamp and SHA-256. Study digest binds canonical JSON. Import/CLI replay recomputes the chain and checks state transitions. Hashing detects inconsistency relative to the file; anyone able to rewrite and rehash the record can construct another internally consistent history. There is no trusted signer, identity authentication, secure audit server or tamper-proof evidence store.

Evidence file bytes are hashed locally; the app retains filename, size, digest, requirement mapping, notes and timestamp only. It does not upload or retain file contents. A declared file reference never changes a requirement to verified or proves physical qualification. Preserve the actual file separately.

## Metrics
Current assessment coverage counts cases with entered assessments. Accepted assessment count requires known category, complete quality and non-withheld triage. Category agreement uses accepted labels versus the fixture's visible authored labels; there is no independent medical ground truth.

Per-category coverage hit rate divides accepted matching declarations by all cases authored as that category. Unassessed and withheld positives count as misses. Descriptive 95% Wilson intervals use z=1.95996398454. Shared synthetic templates are not independent clinical observations; intervals are not evidence of model accuracy or patient performance.

Simulation completion counts and category counts come from recorded events. `physicalDemonstrationVerified` and `clinicalValidityVerified` are always false. Five completed software records do not establish physical payload delivery, battery endurance, no-resupply operation, airway capability or survival benefit.

## Reference categories and physical requirements
The reference cards condense the owner's supplied TRIAGE-X Tables 1–3. The respiratory/pulse cue values are scripted simulation presentations, not stand-alone diagnostic rules. Chemical-specific sensors and specific-agent identification are out of scope. Palpable pulses, auscultation and some behavioral signs cannot simply be inferred from imagery; actual sensing must be independently demonstrated.

The supplied airway requirement covers oxygen and escalation to non-invasive or invasive ventilation. IV/IO access is a separate capability if the blood-agent category is selected. No procedure, dosing instruction, device driver or physical implementation is provided here.
