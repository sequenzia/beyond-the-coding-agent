# Tools & Extensibility integration draft

Numbering note, September 16, 2026: the orientation insertion shifts this review's deck slide numbers 10 through 47 forward by one. The original review numbers below are historical. See `internal/deck/section-2-orientation-numbering-map.json` for current spec paths.

Accepted and integrated September 16, 2026. The presenter approved this draft for the outline, slide specs, and PowerPoint. Outline beat 2.3, slides 20 through 24, design brief §29, and the reusable builder implement the tool-call foundations, MCP/skills/plugins comparison, and unapproved-destination contract test. A2A remains in Markdown backup. This file retains the supporting content review. Rehearse the 4:10 area reference.

## Agreed direction and carried-forward structure

- Bring the new storyboard's tool-call explanation into the existing quote, foundations, decisions, pitfalls, and FRB sequence.
- Explain the model's proposal, application execution checks, and returned observation through one illustrative tool call.
- Distinguish MCP, skills, and plugins briefly on stage. Keep A2A in supporting material.
- Center the FRB example on a well-formed export request whose destination is not permitted. The expected result is rejection before transfer.
- Preserve the exact-checked-content requirement, source identities, uncertainty, and explicit operation outcomes from the existing FRB contract.

Keep the brief coding-agent connection, CUI/ECI processing boundary, current headline pitfall, and spoken takeaway. The external storyboard's access-assistant fixture is not imported. Tool setup, protocol internals, incident inventories, and implementation tutorials remain supporting material.

## Integration map and rehearsal reference

| Current slide | Proposed role | Main change | Rehearsal reference |
|---|---|---|---|
| 20 | Quote | Keep the tool-quality quotation and illustration. | 0:20 |
| 21 | Foundations | Show proposal, checked execution, and observation using an FRB export call. | 1:10 |
| 22 | Design and extension decisions | Explain capability size, MCP, skills, plugins, and the maintained contract. | 1:15 |
| 23 | Pitfalls | Connect argument validity to permission and retain explicit outcomes. | 0:20 |
| 24 | FRB application | Show the unapproved-destination request and the rejection to verify. | 1:05 |
| Total | Five static screens | Increase of 0:30. | 4:10 |

Section 2 now has a 28:30 rehearsal reference within its 25:00 to 29:00 range. Tools & Extensibility adds 0:30. The remaining areas still need their content reviews. The outline and timing checks are synchronized; spoken pacing remains to be rehearsed.

## 1. Quote

**Kicker:** Tools & Extensibility · Perspective

Retain the existing Anthropic tool-quality quotation and attribution from slide 20 and Research §3. Retain the current illustration.

**Spoken bridge:** A tool gives the model an operation it can request. The contract must make that operation useful to the caller and enforceable by the application.

The quotation introduces an engineering responsibility. It does not establish that improving a tool fixes every model or workflow failure.

Cut first: the contract-element inventory. Never cut the quotation and attribution.

Sources: Anthropic, September 2025. Research §3.

## 2. Foundations

**Kicker:** Tools & Extensibility · Foundations

**Proposed title:** Tool calls and execution

### Proposed visible content

**Proposal**

The model selects an operation and supplies arguments.

**Execution**

Application code validates, authorizes, and executes permitted requests.

**Observation**

The result informs the next model step.

Show one illustrative application call:

`export_cited_brief(draft, citations, destination)`

Label the application checks: **Authenticated identity. Exact checked content. Permitted destination.**

### Explanatory treatment

Use one native editable flow from model proposal through application execution to the returned result. Place the illustrative call at the proposal-to-execution boundary. Put the application checks with execution, not inside the model.

This is conceptual pseudocode for the already defined export operation. It is not a vendor API or a complete callable schema. In particular, no caller-supplied `checked=true` or approval flag establishes verification or authorization.

Keep typography, spacing, and colors in the design brief when this draft is adopted. The diagram should use the visual language established for the model invocation and context evidence path.

### Proposed talk track

**A tool call is a request for an operation.** The model selects the tool and supplies arguments. Application software checks the request, performs the permitted operation, and returns a result. A coding agent reading a file or running tests uses this pattern.

Our illustrative call requests export of a draft, its citations, and a destination. The application supplies authenticated identity and checks current access. The export service also establishes that this exact content passed verification and that the destination is permitted.

The input schema describes the argument structure. A well-formed destination can still be outside the permitted scope. **Code enforces that boundary.**

The result must distinguish confirmed completion, a known failure, and an unknown outcome. Those observations help the caller decide what to do next.

Tool design therefore includes the operation, its inputs, the checks, and the meaning of its result.

Cut first: the coding-agent elaboration. Never cut the proposal/execution distinction, application-controlled checks, or explicit outcome states.

Sources: Anthropic, September 2025; MCP server concepts, July 2026, rechecked September 2026; OWASP, 2025. Research §3. Illustrative export contract: Research §0 and `internal/frb-running-example.md`.

## 3. Design and extension decisions

**Kicker:** Tools & Extensibility · Decisions

**Proposed title:** Capabilities and extension mechanisms

### Proposed visible content

**Capability size**

Flexible primitives or task-oriented operations. Evaluate the boundary on real work.

**Extension mechanisms**

| Mechanism | Role |
|---|---|
| MCP | Connect applications to tools and context. |
| Skills | Reusable task instructions and supporting resources. |
| Plugins | Package capabilities for installation and distribution. |

**Operational contract**

Maintain descriptions, inputs, results, and failure behavior. Enforce permissions in code.

### Explanatory treatment

Use the small terminology comparison to answer which integration need each mechanism serves. The roles can be combined: a plugin can package a skill and an MCP integration. Do not depict them as three competing versions of a tool or three mandatory layers of every application.

Retain capability granularity and ownership as engineering decisions. The mechanism table should not turn this screen into a list of technologies without a design choice.

### Proposed talk track

First choose the capability boundary. Small operations give the caller more combinations and more steps to coordinate. A task-oriented operation can handle more work in code, while embedding assumptions about the task. Evaluate that trade-off.

Then choose how to extend the system. **MCP, the Model Context Protocol, connects applications to providers of tools and context.** The application can discover operations and call them through a common interface.

**A skill supplies reusable instructions and supporting resources for a task.** It can include scripts or examples. **A plugin packages capabilities for installation and distribution**, such as a skill together with an MCP integration. Exact packaging depends on the host.

These mechanisms can work together. None replaces the execution checks we just saw. Someone still owns the descriptions, schemas, implementation, permissions, and failure behavior. Keep those pieces aligned as the capability changes, and check that the model can find and use the appropriate operation.

Cut first: plugin packaging examples and discovery elaboration. Never cut capability granularity, the three mechanism roles, or application-owned enforcement.

Sources: MCP, July 2026; Agent Skills and OpenAI plugin documentation, checked September 2026; Anthropic tool-design guidance. Research §3. The OpenAI documentation supplies a concrete packaging example, not a claim of one universal plugin format.

## 4. Pitfalls

**Kicker:** Tools & Extensibility · Challenges and pitfalls

**Proposed title:** Tool-design pitfalls

### Proposed visible content

- **Contract:** Description, schema, and behavior can drift.
- **Authority:** Valid arguments still require permission checks.
- **Outcomes:** Success, failure, and uncertainty need distinct results.

**Pitfall:** Copying APIs without evaluating task fit.

### Proposed talk track

**Copying APIs without evaluating task fit** is the headline pitfall. Keep descriptions and behavior aligned, remove confusing overlap, and enforce permissions even when the arguments look valid. Return confirmed results, known failures, and unknown outcomes distinctly.

Preserve the exact headline sentence on slide 44. The Authority cue replaces the current Tool set cue. Overlapping tool purposes remain in the explanation and supporting design notes.

Cut first: the overlap reminder. Never cut the exact headline pitfall or the distinction between a known rejection and an unknown result.

Sources: tool-contract and authorization guidance, Research §3.

## 5. FRB application

**Kicker:** Tools & Extensibility · FRB application

**Proposed title:** Export cited brief

**Illustrative contract test. No deployed result claimed.**

### Proposed visible content

**Design**

Export the exact checked draft to a permitted destination.

**Failure to test**

The proposed destination is outside the approved scope.

**Evidence to check**

Reject before transfer. Return a clear reason. Confirm no export at that destination.

Use a compact comparison:

| Contract requires | Model proposes |
|---|---|
| A destination permitted for these records | A destination outside that scope |

**Expected result:** Export rejected.

### Explanatory treatment

Make the mismatch visible at the execution check. The comparison and expected result explain the same failure as the body copy; consolidate them into one composition when designing the slide. Do not add a second dense contract table beside the example.

Use no real address, destination URL, credential, or controlled record. The example inherits the existing illustrative CUI/ECI boundary. A well-formed destination argument is not necessarily an authorized destination.

### Proposed talk track

The FRB brief is ready for export. Our contract requires the exact draft that passed verification, its citations, and a destination permitted for these records.

**Suppose the model requests an export to a destination outside that approved scope.** Its arguments can be well formed and still fail the permission check.

The expected behavior is for the service to reject the request before transfer and return a clear reason. In a test, check both the rejection and the absence of an export at that destination. An error message alone does not establish that no transfer occurred.

This preserves the CUI/ECI boundary. A permitted export must still retain the checked wording, citations, and uncertainty and return a matching receipt.

This rejection is a known outcome. Orchestration next handles continuation and uncertainty after execution.

**A description guides the model. Code enforces the contract.**

### Supporting contract artifact

The existing export contract is the engineering artifact for this area. Retain its full inventory in supporting material:

| Contract element | Requirement |
|---|---|
| Purpose and inputs | Export the checked draft and citations to the requested destination. |
| Identity and authority | The application establishes the caller and enforces the allowed data and destination scope. |
| Verification precondition | The exact content has passed the required checks. A caller assertion is insufficient. |
| Permitted completion | Preserve checked wording, source identities, uncertainty, and limitations. Return a receipt. |
| Rejection | Reject a disallowed destination before transfer, with a useful reason. |
| Unknown outcome | Report uncertainty when an attempted operation cannot be confirmed. Orchestration decides what follows. |

This is an illustrative design and expected test behavior. No successful deployment, measured rejection rate, or actual export is claimed. Do not add a new autonomous fallback destination or imply that packaging the tool grants authority.

Cut first: the MCP-exposure reminder and receipt elaboration. Never cut illustrative status, the destination mismatch, rejection before transfer, no-export check, or exact checked content.

Sources: the shared FRB contract and the selected teaching failure, Research §0 and §3. Data boundary: Research §1. General authorization guidance: Research §3.

## Backup: A2A

Agent2Agent supports communication between agents. Keep that distinction available for questions about systems built from independently implemented agents. It is not part of the main slide copy or timed talk track, and the FRB example does not assume an A2A integration.

Sources: A2A Project, version 1.0.0 overview, checked September 2026. Research §3. Version-specific mechanics require their own documentation check if discussed in detail.

## Review outcome and adoption

- Accepted the five-screen sequence, tool-call diagram, and conceptual function example.
- Included MCP, skills, and plugins on stage. Kept A2A in Markdown backup.
- Selected the unapproved-destination failure, with rejection before transfer and an explicit no-export check.
- Preserved exact checked content, source identities, uncertainty, and distinct operation outcomes.
- Integrated the content into Research §3, the shared FRB contract, outline beat 2.3, specs 20 through 24, design brief §29, and `internal/deck/author.mjs`.
- Kept the exact recap pitfall, map assets, narrative numbering, and build counts.
- Rehearsal remains open for the 4:10 Tools & Extensibility and 28:30 Section 2 references.

## Source material

- External storyboard: `research/external/ai-engineering-presentation-storyboard.md`, slides 9 through 11.
- External report: `research/external/ai-engineering-research-report.md`, §3.
- Current outline: `outlines/outline-v2.md`, beat 2.3.
- Evidence layer: `research/section-2.md`, §0 and §3, with inherited data constraints in §1.
- Shared example: `internal/frb-running-example.md`.
