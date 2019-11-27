# Nest.js E2E Testing Examples

The [official documentation][1] (and the templated starter) for [Nest.js][2]
shows an end-to-end test that uses the `Test.createTestModule()` helper to
create an instance of `INestApplication` that is used for the subsequent tests.

## Problem

It may simply be an issue of nomenclature -- when I see the phrase "end-to-end",
this makes me think the intention is that of an integration test, where all
components of the application are integrated and then exercised together in a
testing context.

To be fair to Nest, the documentation states that this is not _quite_ an
integration test:

> ... closer to the kind of interaction that end-users will have with the
> production system ...

The key word here is _closer_ -- these tests in Nest approximate the type of
behavior a consumer app might see, but it's not the full story. As a basic
example, adding a `ValidationPipe` to the global pipes that validates all
incoming request bodies against their configured DTOs will not be triggered when
using the `Test.createTestModule()` approach.

This difference is demonstrated in
[`test/app.e2e-spec.ts`](test/app.e2e-spec.ts).

## Solution

It's not clear what value a "Nest-style" e2e test provides by not being a full
integration test, so there are a couple options:

1. Stop using `Test.createTestModule()` in all e2e tests entirely and instead
   use the actual app instance that is run in development and all other
   environments

1. Abandon the use of e2e tests as a label and instead move to (potentially)
   more appropriately named "integration" tests (e.g. `app.integration.spec.ts`)

[1]: https://docs.nestjs.com/fundamentals/testing#end-to-end-testing
[2]: https://nestjs.com