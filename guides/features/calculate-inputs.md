Instructions - Calculation of stored values
--

### Overview

In this feature, You will add the functionality of being able to calculate and display the two numbers and operator you were able to store and display from the previous feature set.

<details>
<summary>1. Create the calculate function which will calculate based on the contents of the calculationArray </summary>

  - Declare a new function `calculate`.
    - It will take three parameters
      - num1
      - num2
      - operator
    - This function will calculate the result of the two numbers and the operator passed into the function's parameters as arguments.
    - Inside the function
      - declare a variable called `number1`
        - store in it the result of running the `.parseFloat()` method on the `num1` parameter
        - we are using `.parseFloat()` instead of `.parseInt()` because we want to allow for numbers with decimels eventually
        - Documentation on `.parseInt()` and `.parseFloat()` READ!!!
          - `.parseInt()`: https://www.w3schools.com/jsref/jsref_parseint.asp
          - `.parseFloat()`: https://www.w3schools.com/jsref/jsref_parsefloat.asp
      - declare a variable called `number2`
        - store in it the result of running the `.parseFloat()` method on the `num2` parameter.
    - Test this functionality by calling the `calculate` function and passing in 2 numbers and an operator as arguments, then console log the two `number` variables to make sure you are properly storing the converted numbers
      - Once this work, move on to the next step
    - Now that you have converted the strings into numbers:
      - declare a variable, `result`.
        - assign it the value of `null`
        - it is going to store the result of the calculation so that it can be returned.
    - Now declare a switch statement
      - you will pass in the `operator` variable as the expression
    - Create a case for each operator that will perform the calculation on `number1` and `number2` based on the chosen operator.
      - for example:
        case "+":
          result = number1 + number2
          break;
    - Once you have completed the switch
      - call the `calculate` function again with the proper arguments and console log the result variable at the end of the function
        - If you have done everything correctly, the console log should contain the result of the calculation.
        - once you have this functionality, remove the console log and move on to the next step.
    - The last thing to do in this function is to return the result variable.
      - This will ensure that the result of the calculation is returned to the place when the function is called.
      - For the last test console log the call of the `calculate` function with the proper parameters. The console log should contain the result of the function call.
      - When this works, Congratulations, you have completed the calculate function!


</details>

<details>

<summary>2. Use the calculate function to calculate the user supplied numbers and operator</summary>

  - The following will be done in the `equalsButtonHandler` function
    - Below the code that is already in the function from previous steps
      - declare a variable `answer`
      - assign the `answer` variable the result of calling the `calculate` function with the numbers and operator stored in the calculation array.
        - for example:
          - var answer = calculate(calculationArray[0], calculationArray[2], calculationArray[1]);
          - Note the positions in the array that are used so that the arguments are passed in to match the order of the parameters.
        - On the next line, console log the `answer` variable
      - To test this new functionality:
        - Open a fresh calculator
        - enter the following inputs.
          - Press 222
          - Then press +
          - Then press 222
          - Then press =
        - The console log of the `answer` variable you declared and assigned the result of calling the `calculate` function should be 444
        - When this functionality is complete and working, move on to the next step!
</details>

<details>
  <summary>3. Display the result of your calculations</summary>

  - Now that you are able to calculate correctly based on your `calculationArray`, we are going to update the display with your calculated answer.
    - The following will be done in the `equalsButtonHandler` function
    - Below your previous work:
      - push the `answer` variable into the `displayArray` array.
      - call the `updateDisplay` function.
    - Now test what you added using the previous test, once the correct answer of 444 is shown on your calculator's display, Congratulations! You have completed this step! and the core functionality of the calculator!
</details>

<details>
  <summary>4. Moving Forward</summary>

  - Now that you have completed the core functionality, what's next?
    - There are many things to consider
      - How do you continue to do calculations after the first one?
        - What does that mean for when you have to reset the `calculationArray`?
        - When should you be allowed to enter an operator into the calculator?
        - How do you intergrate decimels?
        - what about pemdas?
    - Your Journey has only begun!
      - The calculator is a difficult project, but it is extraordinally helpful for problem solving and logic skills because there are so many things that must be considered!
    - Last thing:
      - Make sure you use the inspector! Being able to watch your code will make working through the logic much easier!
        - And not easy, but easier!
      - And finally, keep working on it! Its great practice for JavaScript skills you will need!

</details>






### Design Docs



### After Each Feature

- When your feature implementation is complete, you will want to save and submit your work to the branch that you have created.
  - Use `git status` to check that you are on the correct branch that represents your feature.
  - You will want to **add**, **commit**, and **push** the code that you have written to the appropriate Github repository.
    1. `git add .`
    2. `git commit -m "Description of the feature that you have implemented"`
       - e.g. `git commit -m "added base calculation functionality"`
    3. `git push origin FEATURE_NAME_HERE`
       - e.g. `git push origin basic-calculation`

- Finally, you will want to create a pull request. This will merge the code from your newly **completed** feature branch into your `master` branch.

  1. Navigate to <kbd>New Pull Request</kbd>:
  ![Navigate to pull requests](../post-feature/navigate-to-pull-request.gif)
  2. Compare changes to merge:
  ![Compare changes to merge](../post-feature/compare-changes.gif)
  3. Create a new pull request:
  ![Create new pull request](../post-feature/create-pull-request.gif)
  4. Merge pull request:
  ![Merge pull request](../post-feature/merge-pull-request.gif)
  5. Update master with the new changes:
  ![Update master](../post-feature/pull-new-changes.gif)
  6. Go back to [Features](../../README.md#features), if you're still working through the project.
