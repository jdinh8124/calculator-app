---
name: Bug report
about: Something on the site is broken
title: "[BUG] Insert title here"
labels: Bug, Needs More Info
assignees: codingcodymiller

---

**For staff use only**

### Bug Report
> _To be filled out by author. Add the `Bug` and `Needs More Info` labels. Assign issue to self on creation._

#### **Describe the Bug**
A clear and concise description of what the bug is.

#### **Steps To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

#### **Expected Behavior**
A clear and concise description of what you expected to happen.

#### **Actual Behavior**
A clear and concise description of what actually happened. If applicable, add screenshots to help explain your problem.

#### **Device Information**
- Device: [Hardware device make and model, e.g. Lenovo Thinkpad Yoga 15]
- OS: [Operating system name and version, e.g. Windows 10, Version 1903]
- Browser: [Web browser client and version, e..g. Google Chrome, Version 76]
- Other Related Software (If Applicable): [Web server, middle scripting engine, database, etc. and version]

#### **Additional context**
Add any other context or screenshots about the problem here.

> _After all the above sections are filled out, remove the `Needs More Info` label, then assign issue to the repository maintainer._

---

### Pre-Implementation Checklist
> _To be filled out by repository maintainer._

#### **Validation**
- [ ] The Report section is filled out completely.
  - If not, add `Needs More Info` label and assign back to author.
- [ ] This bug is not a duplicate of another request.
  - If it is, reference duplicate issue, add `Duplicate` label, and close issue.
- [ ] This bug is not intended functionality.
  - If it does, add `By Design` label and close issue.
- [ ] This bug is reproducible with the provided steps.
  - If it isn't, add `Not Reproducible` label and assign back to author.

#### **Budgetting**
- [ ] The fix will provide enough benefit to justify the cost.
  - If not, add the `Won't Fix` label and close issue.
- [ ] The fix can be budgetted for active development at this time.
  - If not, add the `Postponed` label.

> _After all the above checks pass, add the `Ready for Implementation` label and assign issue to implementer._

---

### Implementation
> _To be filled out by implementer._

#### **Steps Taken**
A sequential set of steps taken to uncover and fix the bug.
1. How was the root cause of the bug narrowed down?
1. How was the bug fixed?

#### **Root Cause**
What was the root cause of the bug?

#### **Prevention**
How can this type of bug be prevented in the future?

#### **Opening Pull Requests**
After an attempted fix has been pushed to GitHub, open a pull request using the following URL template (filling in the compare branch name):
```
https://github.com/Learning-Fuze/calculator/compare/master...<COMPARE BRANCH>?assignees=codingcodymiller&&expand=1&&template=bug_fix.md&&labels=Bug+Needs%20More%20Info&&title=[BUG]%20Insert%20Fix%20Title%20Here
```

#### **After Merging Pull Requests**
After a pull request referencing this issue has been merged, update the implementation sections above with any new information.

> _After all debugging has been completed and integrated into the main development branch, add the `Ready for Testing` label, remove the `Ready for Implementation` label, and assign issue to tester for verification._

---

### Verification
> _To be filled out by tester._

Commit tested on main development branch: [commit #]
- [ ] Application runs without crashing.
- [ ] Bug is fixed, following the Steps To Reproduce.

> _After the main development branch is verified to meet the spec, add the `Verified` label, remove the `Ready for Testing` label, then close the issue._
