# Feature PRD Workflow Checklist

Quick reference for the feature PRD workflow.

## Phase 1: Define

- [ ] Ask: What feature? What problem? Who are users? What should happen? What's NOT in scope?
- [ ] Create PRD at `specs/[feature-name]-prd.md` (or repo-conventional location)
- [ ] Write user stories with acceptance criteria paired directly beneath each story
- [ ] Add Scope section (In Scope / Out of Scope)
- [ ] Add Verification section (happy path + at least one error case)

## Phase 2: Stress-Test

- [ ] Story-criteria alignment: every story has AC, no orphaned criteria
- [ ] Testability: each criterion maps to a specific command, URL, or output
- [ ] Scope boundaries: "Out of Scope" items are specific enough to reject requests
- [ ] Edge cases: empty inputs, unauthorized users, failures
- [ ] Verification completeness: happy path + error case covered
- [ ] Open questions: resolve any that can be decided now

## Phase 3: Create Issue

- [ ] Run: `gh issue create --title "[Feature] Name" --label "type:feature"`
- [ ] Link to PRD file in issue body
- [ ] Note the issue number

## Phase 4: Handoff

- [ ] Tell user to enter plan mode
- [ ] Reference: `Plan the implementation for specs/[feature-name]-prd.md (issue #XX)`

---

## Acceptance Criteria Rules

- Numbered list (not checkboxes)
- Yes/no verifiable statements
- Focus on *what*, not *how*
- Active voice
- Concrete expected values
- Each criterion testable by a specific command, URL, or observable output
