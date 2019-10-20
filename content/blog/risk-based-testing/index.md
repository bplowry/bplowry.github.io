---
title: Risk-based testing
date: "2019-10-16T04:10:10.612Z"
description: "How do you decide which features you test and which features you don't?"
draft: true
---

Testing, why?

- build confidence

Testing, what?

- key workflows
- button labels? really?

Testing, who?

- let "the business" (e.g. product owner) decide what risk they're willing to accept
- per requirement, A/C, story, epic

Testing, when?

- Things that are more risky should be tested more often
- Pretty much means you need automated tests
- PR build for "critical/high", nightly run for "moderate", nothing for "low"

Testing, how?

- do you want a different methodology for testing based on risk
- E2E tests
- integration tests
- unit tests
- manual tests (repeated)
- manual tests (once)
- never test
