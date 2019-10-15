---
name: Technical Debt report
about: The source code needs non-functional improvement.
title: "[DOCUMENTATION/CLEANUP/PERFORMANCE/MAINTAINABILITY/DEPENDENCY] Pick one, then
  insert title here"
labels: Technical Debt, Needs More Info
assignees: codingcodymiller

---

**For staff use only**

### Technical Debt Report
> _To be filled out by author. Add the `Technical Debt` and `Needs More Info` labels. Assign issue to self on creation._

#### **Is your technical debt fix request related to a problem? Please describe.**
A clear and concise description of what the problem is. Ex. I'm always frustrated when [...]

#### **Describe the solution you'd like**
A clear and concise description of what you want to change.

#### **Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

#### **Additional context**
Add any other context or screenshots about the feature request here.

> _After all the above sections are filled out, remove the `Needs More Info` label, then assign issue to the repository maintainer._

---

### Pre-Implementation Checklist
> _To be filled out by repository maintainer._

#### **Validation**
- [ ] The Request section is filled out completely.
  - If not, add `Needs More Info` label and assign back to author.
- [ ] This request is not a duplicate of another request.
  - If it is, reference duplicate issue, add `Duplicate` label, and close issue.
- [ ] This request does not run counter to intended architecture.
  - If it does, add `By Design` label and close issue.

#### **Budgetting**
- [ ] The fix will provide enough benefit to justify the cost.
  - If not, add the `Won't Fix` label and close issue.
- [ ] The fix can be budgetted for active development at this time.
  - If not, add the `Postponed` label.

> _After all the above checks pass, add the `Ready for Implementation` label and assign issue to implementer._

---

### Implementation
> _To be filled out by implementer._

#### **Steps**
If the technical debt fix can be broken down into sub-tasks/-issues, add checklist for completion. Reference any sub-issues directly. Steps are checked off as they are added to a pull request.
- [ ] Add checklist of sub-tasks, referencing sub-issues directly
- [ ] Check off sub-issues as they are given the `Verified` label
- [ ] Check off sub-tasks as they are implemented and added to a pull request

#### **Opening Pull Requests**
Because this repository has its pull request template designed for student use, pull requests that are made by staff must use the template for internal repo pull requests.
1. Start a new pull request as normal.
1. Pick the `base` and `compare` branches.
1. Replace the body of the pull request with the contents of the [Internal Repository Pull Request Template](https://github.com/Learning-Fuze/internal-repo-template/raw/master/.github/PULL_REQUEST_TEMPLATE.md).
1. Follow the directions on the pull request.

> _After all the above steps have been completed and integrated into the main development branch, add the `Ready for Testing` label, remove the `Ready for Implementation` label, and assign issue to tester for verification._

---

### Verification
> _To be filled out by tester._

Commit tested on main development branch: [commit #]
- [ ] Application runs without crashing.
- [ ] Application functionality has not changed.

> _After the main development branch is verified to meet the spec, add the `Verified` label, remove the `Ready for Testing` label, then close the issue._
