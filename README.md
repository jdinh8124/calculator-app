# Calculator

### Project Setup

Before starting on this project, you will need to **fork** and then **clone** this repository into your `lfz` folder on your current development environment.

1. Fork this repository from LearningFuze
    - Click on the <kbd>**Fork**</kbd> button at the top right of the page.
    - Select your Github user name to complete the fork

2. Clone this repository to your development environment
    - In your terminal, navigate to the location of your `lfz` folder
    - `cd ~/lfz` or `cd ~/Desktop/lfz`
    - `git clone https://github.com/[Your User Name]/calculator.git`

3. Navigate into the `calculator` directory
    - `cd calculator`
    - You are now ready to get started!
    - If you are not in the proper directory, navigate to the `lfz` folder, if you're not sure how, contact an instructor.

## Getting Started

After navigating into this repository, you will want to start by creating a new branch off of the `master` branch to contain the code required for the next feature of this project.

### Before each feature

- Make sure that the current branch says `master`.
  - Check that with the `git status` command.
    1. If you are on `master`:
       - `git pull origin master`, will get your most up to date changes and update this branch.
       - `git checkout -b FEATURE_NAME_HERE`, will create a new branch based on the name provided to represent this next feature.
    2. If not, `git checkout master`, will take you back to the default branch.
       - Go back to step 1.
    3. If you're not sure how, contact an instructor.
- **Example**
  - `git status`
  - `git checkout master`
  - `git pull origin master`
  - `git checkout -b handlingInputs`

You are now ready to start on the first feature!

### Core Feature
- Store and Display Inputs - [Instructions](guides/features/store-display-inputs.md)
- Calculate and Display Inputs - [Instructions](guides/features/calculate-inputs.md)

### MVP Features
- <a href="https://docs.google.com/spreadsheets/u/1/d/1HRpRqdyQrax5vgwrVatcOxSxly6GHXXfZuzc0lb9Tfg/pubhtml#" target="_blank">Basic, Comprehensive, Advanced, and Extra Operations</a>

### Challenge
- Operation Rollover
- Operation Repeat
