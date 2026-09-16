# Tools and extensibility

Status: reviewed with the presenter, September 15, 2026. Content accepted for this pass. Numbered specs were integrated September 16. Section 2 remains 25:00 to 29:00, with individual cues based on a 27:00 rehearsal reference. MCP depth agreed with the presenter: briefly explain its role in connecting tools. Keep the main teaching on tool design and execution contracts.

Integrated September 16 into [outline-v2.md](../outline-v2.md), beat 2.3, and narrative slides 18 through 22. This file retains the reviewed supporting detail. The current numbered specs are in `slides/section-2/`; Research §3 in [research/section-2.md](../../research/section-2.md) remains the evidence layer. The builder implements the integrated specs.

## Opening quote

Selection: Anthropic, "Writing effective tools for agents, with agents," September 2025. Use the existing quotation about agents being only as effective as the tools they receive. Exact wording, authorship, and verification status remain in Research §3.

Purpose: introduce the tool interface as part of the system's behavior. The model needs to recognize when an operation is useful, supply suitable inputs, and interpret its result.

Spoken bridge: **A tool is a contract between the system and a model caller.** The name, description, inputs, results, and execution rules all contribute to that contract.

Qualification: the quote emphasizes a design responsibility. It does not establish that improving tools resolves every model or system failure.

## What is it?

A tool exposes an operation the model can request, such as reading a file, searching records, running a check, or exporting a document. The surrounding software handles the request, applies the required checks, executes the permitted operation, and returns a result.

The interface needs to describe what the operation does, the inputs it accepts, and how to interpret its output. The implementation must enforce the behavior and boundaries that the description promises.

Extensibility is how the agent gains additional capabilities through these interfaces. Model Context Protocol, or MCP, provides a common way for an AI application to connect to external systems. An MCP server can expose tool definitions that an application discovers and calls. MCP also supports resources and prompt templates; this area focuses on tools.

MCP provides the connection mechanism. The engineering work still includes selecting useful operations, defining their contracts, and enforcing access in the connected systems.

**Brief coding-agent connection:** when a coding agent reads a repository file or runs its tests, it requests a tool operation and receives the result. Connecting an additional service makes another set of capabilities available through the integration.

Boundary: Context decides what information the model needs. Tools defines the operations that retrieve information or act on it. Orchestration later determines when to call those operations and how to coordinate or recover the work.

Sources: Anthropic, September 2025; MCP introduction and server concepts, July 2026 revision; coding-agent tool anchors; OWASP, 2025. Research §3. The MCP explanation describes its role without a protocol or setup walkthrough.

## Why it matters

Tool design affects whether the model can carry out the task. Similar names can lead to the wrong selection. Missing input guidance can produce an unsuitable request. A result without sufficient context can leave the caller unable to judge what happened.

It also determines how much work the model must coordinate. An interface made of many small operations provides flexibility but can require more calls and intermediate decisions. A task-oriented operation can handle more of that work in code, while reducing flexibility and creating a larger contract to maintain.

Some operations disclose data or change external state. **A model's request is not sufficient authorization to execute it.** Inputs need validation, and access rules belong in the software that controls the operation. This applies to reads as well as writes.

The returned result matters after execution. A caller must be able to distinguish a completed action from a failed or unconfirmed one before deciding what to do next.

Sources: Anthropic, September and November 2025; OWASP, 2025; existing tool-contract and failure framing, Research §3. The granularity discussion is a design trade-off to evaluate, not a universal preference for larger tools.

## Key decisions and trade-offs

### Which capabilities should the model receive?

Choose operations that serve the intended task. Decide which work belongs inside a tool and which steps the model should select separately.

Fine-grained operations expose more combinations and intermediate control. Task-oriented operations can reduce the steps the caller must assemble, while embedding more assumptions about the workflow. Evaluate the boundary against the actual task.

Starting approach: begin with a small set of distinct capabilities. Give each a clear purpose. As the set grows, consider discovery or loading definitions when needed, and check that useful capabilities remain findable.

Revisit when traces show repeated sequences that could become a useful operation, confusion between overlapping tools, or tasks that the existing set cannot express. Adding an integration should include a review of the capabilities and access it introduces.

### What must the contract communicate?

Define the name, description, input schema, result, and failure behavior together. Explain when the operation is appropriate and what the caller must supply. Return enough information to support the next decision, with stable identifiers where needed.

Short results reduce the material the model must process, while overly sparse results can remove essential context. Detailed results can help interpretation but add unnecessary input if most of the payload is irrelevant. Choose a useful result for the task.

Starting approach: make required inputs and constraints explicit, validate them in code, and evaluate how the model uses the contract. Test the definition with representative requests and inspect wrong selections or arguments. A well-formed request still needs checks for permitted values and actions.

The result should provide evidence of completion or explain the failure. Where the system cannot confirm completion, return that uncertainty explicitly. The contract should help the caller choose the next step without guessing whether an action occurred.

Revisit when descriptions, schemas, or implementation behavior change, or when traces show misunderstandings about what a returned result means.

### What may execute, and under which rules?

Specify the authorized data and actions, permitted destinations, and any required approval. Enforce those conditions outside the model. Scope each operation to the access needed for its task.

Broad authority gives an integration more freedom, but also expands what an incorrect request can affect. Narrow scope limits that exposure while requiring deliberate changes when legitimate needs expand. Human approval can support policy, but the policy must establish when approval is needed and who can provide it.

Starting approach: define and enforce access for reads and writes, validate requests before execution, and make denied actions explicit without exposing restricted information. A successful connection or a model recommendation does not grant additional authority.

In the FRB scenario, operations handling CUI/ECI records and their export destinations must remain within the applicable approved scope. Evaluate the tools with the available approved models. Clear contracts are part of the design to test, with no guarantee that they remove all capability limits.

Revisit when tool capabilities, user roles, connected services, or data-handling requirements change. Keep descriptions and enforcement aligned with the updated policy.

Sources: Anthropic tool design and discovery material; MCP documentation and security guidance; OWASP authorization. Research §3. FRB processing and model constraints, Research §0 and §1. These are starting design practices, not claims about a particular deployed tool.

## Common challenges and pitfalls

| Challenge | How it appears | Investigation or response |
|---|---|---|
| The tool set mirrors the backend API | The caller must assemble many low-level steps that poorly match the task | Evaluate the operation boundaries against representative work. Consolidate where it helps and retain separate steps where their control matters. |
| Tool purposes overlap | The model repeatedly selects a neighboring operation | Inspect selections, revise names and descriptions, and prune duplicate capabilities. |
| Contract and implementation drift | A documented input is rejected or the returned result changes meaning | Update and evaluate the description, schema, and implementation together. |
| Results omit useful evidence or contain excessive detail | The caller cannot identify the record or completion state, or must process unrelated material | Preserve relevant context and stable IDs. Evaluate the result payload on the task. |
| An operation has excessive authority | A valid-looking call can reach data or destinations outside the intended task | Enforce access and scope in code. Review what each new integration makes possible. |
| An uncertain outcome is treated as success or failure | The caller reports completion or repeats an action without confirming what occurred | Return an explicit unknown outcome and evidence the execution controller can inspect. |

**Headline pitfall:** copying the API surface without evaluating task fit.

Maintenance includes keeping definitions aligned with implementation, checking permission changes, and reevaluating tool use as models and tasks change. Capture failures in representative cases. Detailed execution recovery belongs in Orchestration.

Sources: Anthropic, September and November 2025; OWASP, 2025; tool decisions and maintenance, Research §3. The failures are design considerations, not measured FRB incidents.

## FRB use case as an applied example

**Illustrative proposed design.** The corpus includes CUI and ECI. The system uses the applicable approved processing services and the available approved models. People remain responsible for official causes, decisions, and board records.

The shared tool set contains Search records, Retrieve passages, Export records, and Export cited brief. Background services parse and index the source files. This application focuses on **Export cited brief**, the operation that delivers the researched and checked result.

The tool is designed around a task outcome. It accepts the checked brief and its citations and handles the permitted export. Its contract includes preserving the exact checked content, not just writing a file somewhere.

| Contract element | Proposed requirement |
|---|---|
| Input | The checked draft, citations, and requested destination. |
| Verification precondition | The draft being exported is the exact content that passed the required checks. The service verifies that status. A caller's assertion that it was checked is insufficient. |
| Access and destination | Code rechecks access and enforces the permitted destination under the scenario's CUI/ECI requirements. |
| Content preservation | Keep the checked wording, source IDs, revisions, locations, uncertainty, and limitations. Changed content needs renewed verification. |
| Confirmed result | The exported brief matches the checked draft, with an export receipt. |
| Failure or uncertainty | Return an explicit known failure or an unknown outcome when completion cannot be confirmed. Do not report an unconfirmed export as complete. |

For FRB-042, the export must preserve the unresolved cause and the instruction to inspect the bearing. Exporting the brief must not turn the preliminary hypothesis into an established finding or silently rewrite the checked summary.

If execution times out after a possible export, the tool's response must preserve the uncertainty. Orchestration determines whether to inspect the receipt, retry, or hand off. This area establishes the information the tool must return for that decision.

The same contract can be exposed through an MCP integration. That connection does not supply the application-specific access, verification, and export guarantees; the service must implement them.

Check whether the approved model can select the operation and supply suitable inputs, whether unauthorized destinations are rejected, and whether successful exports match the checked draft. Investigate failures before changing the tool boundary or exposing more authority.

Revisit when the workflow needs different operations, the export contract or permissions change, or evaluation exposes repeated selection, argument, or result-interpretation errors. No successful deployment, benchmark score, or approved provider is claimed.

Sources: shared illustrative FRB contract, Research §0 and §3. Data and model assumptions, Research §1. MCP connection role and OWASP authorization, Research §3.

## Delivery notes

- **Must say:** a tool is an operation with a contract that software must enforce for a model caller.
- **Must say:** MCP provides a common integration interface. Useful operations and enforced boundaries remain engineering responsibilities.
- **Must say:** choose capabilities for the task and evaluate the descriptions, inputs, and results together.
- **Must say:** validation and authorization apply outside the model, including reads and export destinations.
- Takeaway line: "A description guides the model. Code enforces the contract."
- Transition: clear tools provide the available operations. Orchestration decides which step runs next and what happens when execution cannot proceed as planned.
- Cut first during pacing: discovery detail and MCP's additional features, followed by supporting payload examples. Keep the MCP explanation brief.
- Never cut: the plain-language definition, task-fit decision, enforced authorization, headline pitfall, or the export's exact-content and outcome requirements.

## Review questions and decisions

- Agreed structure: quote first, then the five content headings, with a brief coding-agent connection in the definition.
- Agreed MCP depth: a short explanation of its role in connecting tools. Protocol mechanics and setup remain outside the main content.
- Accepted emphasis: capabilities, usable contracts, and execution rules. Discovery supports those decisions.
- FRB focus: the existing Export cited brief operation. The shared reference now explicitly binds verification status to the exported content and distinguishes known failure from an unknown outcome.
- Inherited constraints: CUI/ECI processing and destinations stay within the approved scope. Tool-use evaluation includes the available approved models.
- Review outcome: presenter accepted this content pass, including the focused export example. Proceed to Orchestration. Final pacing and presentation-machine rehearsal remain pending.
