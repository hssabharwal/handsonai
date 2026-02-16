# Feature PRD Workflow Checklist

Quick reference for the feature PRD workflow.

## Phase 1: Define

- [ ] Ask: What feature? What problem? Who are users? What should happen?
- [ ] Create PRD at `specs/[feature-name].md` (or repo-conventional location)
- [ ] Use the inline PRD template from SKILL.md
- [ ] Write numbered acceptance criteria (yes/no verifiable)

## Phase 2: Stress-Test

- [ ] Review for missing edge cases
- [ ] Check for ambiguous criteria
- [ ] Resolve all open questions
- [ ] Iterate until solid

## Phase 3: Create Issue

- [ ] Run: `gh issue create --title "[Feature] Name" --label "type:feature"`
- [ ] Link to PRD file in issue body
- [ ] Note the issue number

## Phase 4: Handoff

- [ ] Tell user to run `/feature-dev`
- [ ] Reference: `Implement specs/[feature-name].md (issue #XX)`

---

## Acceptance Criteria Rules

- Numbered list (not checkboxes)
- Yes/no verifiable statements
- Focus on *what*, not *how*
- Active voice
- Concrete expected values
