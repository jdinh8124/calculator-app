# **Version 0.1**
*****
## Description
Version 0.1 is the starting point of the Calculator Project. You must create the base structure and styles, using bootstrap as you deem necessary. For this version we are looking to see that you
understand how to create the basic structure of a web application, style it, and make it reasonably responsive.  No functionality will be encoded with this version.

> - Maintained by: `codingcodymiller`

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

### Core Features
- Store and Display Inputs - [Instructions](guides/features/store-display-inputs.md)
- Calculate and Display Inputs - [Instructions](guides/features/calculate-inputs.md)

### Intermediate Features
- <a href="https://docs.google.com/spreadsheets/u/1/d/1HRpRqdyQrax5vgwrVatcOxSxly6GHXXfZuzc0lb9Tfg/pubhtml#" target="_blank">Basic, Comprehensive, Advanced, and Extra Operations</a>

### Final Features
- Operation Rollover
- Operation Repeat
> ##### Related Reading
> - <a href="https://drive.google.com/open?id=0B6piuc4O8oQmMmo1YkhQYjY1Rnc" target="_blank">JS Reference Variables 1</a>
> - <a href="https://drive.google.com/open?id=0BwjF2I7CBLDVNTY1ZTBIOWNnbUk" target="_blank">JS Reference Variables 2</a>
> - <a href="https://drive.google.com/open?id=0B7eOl4joefDuRTViMjhrcm9raDQ" target="_blank">Event Delegation</a>
> - <a href="https://drive.google.com/open?id=0BwjF2I7CBLDVbG5jSkZzTFlHWlU" target="_blank">Repeat Blocks</a>

*****

> ##### Related Videos
> - <a href="https://plus.google.com/events/cn0tp0a0484m5oq5ft23l5rrm68" target="_blank">JS Reference Variables</a>
> - <a href="https://plus.google.com/events/cja0mfet542cvtmc5ompe24ahes" target="_blank">JS Reference Variables 2</a>
> - <a href="https://plus.google.com/events/cg2n17hsqrj64cf4iekfo0j80us" target="_blank">JS Reference Variables 2-2</a>
> - <a href="https://plus.google.com/events/cn0tp0a0484m5oq5ft23l5rrm68" target="_blank">JS Repeat Blocks</a>
> - <a href="https://plus.google.com/events/c3nvb7sbb66rphgl2af2c2t1occ" target="_blank">JS Event Delegation</a>

*****

> ##### Related Prototypes
> - <a href="https://github.com/Learning-Fuze/prototypes/tree/master/js_ref_data_types" target="_blank">JS Reference Variables</a>
> - <a href="https://github.com/Learning-Fuze/prototypes/tree/master/js_loops" target="_blank">JS Repeat Blocks</a>
> - <a href="https://github.com/Learning-Fuze/prototypes/tree/master/js_event_delegation" target="_blank">JS Event Delegation</a>

# Getting Started

## Have you cloned it from **your** repo to your local system?
- **Yes**
    - Continue to next step
- **No**
    - Go to your LFZ folder.
    - use `git clone [repo address]` to make a local copy on your development machine.
- **I don't know**
    - If you have a copy, use `git remote -v` to see what address it came from.  If it is from the LearningFuze account you cloned the **wrong repo**.  If it is your address you have it right.  If there is no copy, you haven't cloned it yet!
## 1. Are you in the right folder?
- **Yes**
    - You are in the folder named after the repo you cloned, go to next step
- **No**
    - You are most likely still in your LFZ folder where you cloned from. Change directories to the repo folder.
- **I don't know**
    - type `pwd` and press enter.  If you don't see the right folder, use `cd [folder name]` till you get to the right folder.  Use `cd ..` to go backwards a step in your folder structure, if necessary.
## 2. Are you on your master branch?
- **Yes**
    - Continue to "Pull Latest Changes"
- **No**
    - Make sure you `git add .` and `git commit` to your current branch before you switch to your master branch
- **I don't know**
    - Run the command below
    - `git branch` - this will highlight the branch you are currently on
    - If you are on `master`, you may proceed to the next step. If you are not, follow directions for if you are not on your master branch that are listed directly above.
## 3. Pull Latest Changes
- `git checkout master`
- `git pull origin master`
- **Now continue with the next steps**
## 4. Create a feature branch
- `git checkout -b version0.1`


# Coding Details
## 1. Layout:
- Create a standard calculator layout with at least the following:
    - 9 numeric keys: `0` through `9`
    - 4 arithmetic function: `-`, `+`, `*`, `/`
    - equation button: `=`
    - 2 clear buttons: `C` (Clear), and `CE` (Clear Entry or current number)
    - 1 display area for calculations / results
## 2. Styling:
- Apply whatever styling method you choose.  You can use standard CSS or Bootstrap
- Calculator should be relatively responsive between mobile and desktop
- You do not need to make it like the displayed calculator.  You should make the styling your own!


# After Coding
## 1. Add files to git
- `git add .`
## 2. Commit files (Group files together)
- `git commit -m "Calculator v0.1 - Your Name"`
- **Replace "Your Name" with your first and last name**
## 3. Send to GitHub (Push)
- `git push origin version0.1`
## 4. Create pull request
- Pull request should be made from version0.1 to **your repository's** master branch


# Design Reference
#### Example appearance:
![Calculator Reference Image](https://github.com/Learning-Fuze/calculator/blob/v0.1/assets/calculator_wf.png?raw=true)
