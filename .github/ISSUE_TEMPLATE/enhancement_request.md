---
name: Enhancement request
about: Suggest a user-facing functional improvement to this project.
title: "[NEW/INCREMENTAL] Pick one, then insert title here"
labels: Enhancement, Needs More Info
assignees: codingcodymiller

---

**For instructor use only**

### Enhancement Request
> _To be filled out by author. Add the `Enhancement` and `Needs More Info` labels. Assign issue to self on creation._

#### **Is your enhancement request related to a problem? Please describe.**
A clear and concise description of what the problem is. Ex. I'm always frustrated when [...]

#### **Is your enhancement related to one or more existing features? Which one(s)?**
Yes or No. Describe existing feature(s) from a student's perspective, including references to related issues.

#### **Describe the solution you'd like**
A clear and concise description of what you want to happen.

#### **Describe alternatives you've considered**
A clear and concise description of any alternative solutions or enhancements you've considered.

#### **Additional context**
Add any other context, screenshots, or design documents about the enhancement request here.

> _After all above sections are filled out, remove the `Needs More Info` label, then assign issue to the repository maintainer._

---

### Pre-Implementation Checklist
> _To be filled out by repository maintainer._

#### **Validation**
- [ ] The Request section is filled out completely.
  - If not, add `Needs More Info` label and assign back to author.
- [ ] This request is not a duplicate of another request.
  - If it is, reference duplicate issue, add `Duplicate` label, and close issue.
- [ ] This request does not run counter to intended functionality.
  - If it does, add `By Design` label and close issue.

#### **Budgetting**
- [ ] The request will provide enough benefit to justify the cost.
  - If not, add the `Won't Fix` label and close issue.
- [ ] The request can be budgetted for active development at this time.
  - If not, add the `Postponed` label.

> _After all the above checks pass, add the `Ready for Implementation` label and assign issue to implementer._

---

### Implementation
> _To be filled out by implementer._

#### **Steps**
If the enhancement can be broken down into sub-tasks/-issues, add checklist for completion. Reference any sub-issues directly. Steps are checked off as they are added to a pull request.
- [ ] Add checklist of sub-tasks, referencing sub-issues directly
- [ ] Check off sub-issues as they are given the `Verified` label
- [ ] Check off sub-tasks as they are implemented and added to a pull request

#### **Opening Pull Requests**
Because this repository has its pull request template designed for student use, pull requests made by staff must use the template for internal repo pull requests.
1. Start a new pull request as normal.
1. Pick the `base` and `compare` branches.
1. Replace the body of the pull request with the contents of the [Internal Repository Pull Request Template](https://github.com/Learning-Fuze/internal-repo-template/raw/master/.github/PULL_REQUEST_TEMPLATE.md).
1. Follow the directions on the pull request.

> _After all steps have been completed and integrated into the main development branch, add the `Ready for Testing` label, remove the `Ready for Implementation` label, and assign issue to tester for verification._

---

### Verification
> _To be filled out by tester._

Commit tested on main development branch: [commit #]
- [ ] Application runs without crashing.
- [ ] Enhancement is fully implemented and meets the spec.

> _After the main development branch is verified to meet the spec, add the `Verified` label, remove the `Ready for Testing` label, then close the issue._
