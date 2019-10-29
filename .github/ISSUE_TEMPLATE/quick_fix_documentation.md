---
name: Quick-Fix - Documentation
about: A typo, grammar, formatting, or other <30-minute documentation fix
title: "[DOCUMENTATION] QUICK-FIX: insert title here"
labels: Technical Debt, Needs More Info
assignees: (none)

---

**For staff use only**

### Quick-Fix - Documentation
> _To be filled out by author. Add the `Technical Debt` and `Needs More Info` labels. Assign issue to self on creation._

#### **Short Description**
In two sentences or less, describe the documentation problem and solution.

#### **Additional context**
Add any other links, screenshots, or context about the documentation issue here.

> _After all the above sections are filled out, replace the `Needs More Info` label with `Ready for Implementation`, then move on to the implementation._

---

### Implementation
> _To be carried out by implementer._

#### **Opening a Pull Request**
After the fix has been pushed to GitHub, open a pull request using the following URL template (filling in the compare branch name):
```
https://github.com/Learning-Fuze/calculator/compare/master...<COMPARE BRANCH>?assignees=codingcodymiller&&expand=1&&template=quick_fix_documentation.md&&labels=Technical%20Debt+Needs%20More%20Info&&title=[DOCUMENTATION]%20QUICK-FIX%20-%20Insert%20Title%20Here
```

> _After all steps have been completed and integrated into the main development branch, this issue should automatically close._
