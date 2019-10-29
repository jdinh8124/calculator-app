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
Add any other context or screenshots about the technical debt here.

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
After a technical debt fix has been pushed to GitHub, open a pull request using the following URL template (filling in the compare branch name):
```
https://github.com/Learning-Fuze/calculator/compare/master...<COMPARE BRANCH>?assignees=codingcodymiller&&expand=1&&template=technical_debt_paydown.md&&labels=Technical%20Debt+Needs%20More%20Info&&title=[DOCUMENTATION/CLEANUP/PERFORMANCE/MAINTAINABILITY/DEPENDENCY]%20Insert%20Title%20Here
```

#### **After Merging Pull Requests**
After a pull request referencing this issue has been merged, check off any completed steps in the Implementation section above.

> _After all the above steps have been completed and integrated into the main development branch, add the `Ready for Testing` label, remove the `Ready for Implementation` label, and assign issue to tester for verification._

---

### Verification
> _To be filled out by tester._

Commit tested on main development branch: [commit #]
- [ ] Application runs without crashing.
- [ ] Application functionality has not changed.

> _After the main development branch is verified to meet the spec, add the `Verified` label, remove the `Ready for Testing` label, then close the issue._
