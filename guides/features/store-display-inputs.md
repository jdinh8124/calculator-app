Instructions - Store and Display Inputs
--

### Overview

In this feature, the **HTML** and **CSS** of the calculator skeleton is provided. The first step to have a calculator is being able to have numbers and operators that will be used for calculations. You will have a few goals in this feature:
<details>
<summary>1. Create needed global variables and apply click handlers to caluculator buttons</summary>

- Create a `main.js` file.
- Declare the following variables in the global variable space:
  - `calculationArray`, assign it the value of an empty array `[]`.
    - This variable will be used to store all of the numbers and operators required for calculation. It will also be used by the function you create to calculate the math operations for all calculations
  - `displayArray`, assign it the value of an empty array `[]`.
    - This variable will be used to store all of the numbers and operators that you want to display on the calculator display.
    - It is separate from the calculation array because you do not always want to push every number that is pressed into the calculation array just because you want to display them
      - this will make more sense later, **trust us**.
  - `stringNumberToPush`, assign it the value of an empty string `""`.
    - This variable will be used to hold all of our number strings before they are pushed to the calculation array, `displayInputs`.
    - NOTE: You want to use string numbers because they are easy to concatenate together to form multi-numbers such as "673"
  - `calculationResult`, assign it the value of `null`
      - This variable will be used for conditional purposes related to when to allow the operator button to be pushed.
- Now we have click handlers to apply!
  - At the top of the `main.js` file, use jQuery to setup document.ready and give it `initializeApp` as a callback.
  - Declare the `initializeApp` function.
    - It takes no parameters
    - This function is going to call another function: `applyClickHandlers`
  - Now, Declare the `applyClickHandlers` functions
    - It takes no paramaters
    - It will apply click handlers using jQuery
      - For the first click handler, select the id of `number-block`
        - Use event delegation to have it listen for any child with the class of `number`
        - It should be given the callback function `numberButtonHandler`
        - Now Declare the function `numberButtonHandler`
          - it takes a single parameter `event`
        - Have the function console log the event object when it is called
        - Now test to make sure that when you click on a number that the console log of the event object shows up in the console.
          - When the console log works, move on to the next step.
      - For the next click handler, select the id of `operator-column`
        - Use event delegation to have it listen for any child with the class of `operator`
        - It should be given the callback function `operatorButtonHandler`
        - Now Declare the function `operatorButtonHandler`
          - it takes the same `event` parameter as your click handler callback in the previous step
          - it will perform the same functionality as your `numberButtonHandler` function
      - For the final click handler of this feature set, select the id of `equals`
        - give it `equalsButtonHandler` as a call back function
        - Declare the `equalsButtonHandler` with the `event` parameter, and the same functionality as the two previous callback functions
    - That is the last click handler for this feature set
      - Make sure to test them all prior to moving on to the next section.
      - Check each button and the console logs that were created
  - Now that we have our click handler callbacks functioning correctly. It is time to store and display a single number!
  - You have completed step 1!
</details>

<details>
<summary>2. Store one single digit number and display it</summary>

- The following work will be done in the `numberButtonHandler` function
    - The functionality to add is to be able to pull the text from the number that is clicked so that we can use it for display, and later, calculation purposes.
    - First, declare a variable at the top of the function called `inputtedNumber` and assign it the value of an empty string `""`
    - On the next line, assign your `inputtedNumber` variable the result of using jquery to select the current target of the event object that is passed into the `numberButtonHandler` function
      - now console log the `inputtedNumber` variable.
        - to test this, click on a number on the calculator and the console log of the `inputtedNumber` variable should contain the element which you clicked on
      - confirm this before you move on.
    - Getting the element that was clicked on is great, but we need to go a little further to get the text we are looking for.
      - Because the text for each button is contained in a child `<p>` tag, we are going to use the jQuery `.find()` method
        - `.find()` is very useful for seeking child elements
          - Documentation: https://www.w3schools.com/jquery/traversing_find.asp
      - So we want to add `.find("p")` to our jQuery selector for `event.currentTarget` so that we target the actual `<p>`  element.
      - Lastly, we add the jQuery `.text()` method to retrive the text from the `<p>` element we just selected.
    - Now test your selector by clicking on a number again and checking the console log
      - If it displays the text of the number you clicked, move onto the next step.
    - So now that our function is correctly retrieving the text from the numbers that we click on, we can store and display them!
    - To store the number for display
      - concatenate the `inputtedNumber` variable value to the `stringNumberToPush` global variable.
      - after concatenation, push the `inputtedNumber` variable into the `displayArray` global variable array
      - confirm that this works by console logging the `displayArray` variable and checking that it properly stored the `inputtedNumber` variable value.
        - Do not push `stringNumberToPush` into the calculation array yet
          - we will address that in the `operatorsButtonHandler` callback soon
      - Move on to the next step when this functionality is complete
  - Declare a function, `updateDisplay`
    - it take no parameters
    - the functionality is as follows
      - it joins the `displayArray` indexes into a single string
      - it places that text into the calculators display
    - to achieve this
      - declare a variable at the top of the function, `displayText`
      - assign it the value of using the `.join()` method on the `displayArray` global variable
        - documentation: https://www.w3schools.com/jsref/jsref_join.asp
        - use `""` as the separator in the `.join()` function so that you don't get commas in your display
        - READ THE DOCUMENATION
      - After you are properly storing the joined `displayArray` in your `displayText` variable
        - use jQuery to select the id of `display-text`
        - use the `.text()` method to set the text of the `display-text` element to the value contained in the `displayText` variable.
          - documentation: https://www.w3schools.com/jquery/html_text.asp
  - Now that you have completed constructing the `updateDisplay` function.
    - Call the `updateDisplay` function in your `numbersButtonHandler` function after the function has pushed the `stringNumberToPush` value into the `displayArray` array
    - If everything works, you should see the numbers you click on show up in the display!
  - When that is complete, you have completed step 2:

</details>
<details>
<summary>3. Store an operator and display it</summary>

- The following will be done in the `operatorButtonHandler` function
  - First, declare a variable at the top of the function called `inputtedOperator` and assign it the value of an empty string `""`
  - Next, store the text from the operator you clicked on in the `inputtedOperator` variable in the same way you stored the text from the numbers you clicked on in the previous section.
  - Next, push the value you have stored in the `inputtedOperator` into the `displayArray` global variable
  - Last, call the `updateDisplay` function
  - If you have done all of this correctly, you should be able to:
    - Input numbers and operators into the display array and have them display on the calculator's display.
  - Once you have completed this functionality, move on to the next section

</details>
<details>
<summary>4. Store a multiple number and an operator in the calculation array</summary>

  - You will first start in the `numberButtonHandler` function
    - Note again that you are concatenating the `inputtedNumber` variable value to the `stringNumberToPush` global variable.
      - This is how we are going to add multiple numbers into the array together instead of one digit at a time
        - for example "333" vs "3", "3", "3"
  - Now we move to the `operatorButtonHandler` function
    - Now we are finally going to make use of the calculation array!
      - Because we have been concatinating the numbers we have been pressing to the `stringNumberToPush` variable, we want to push that into the `calculationArray` so those numbers will be used correctly for calculations
        - This is because our `displayArray` is just being used to display what we enter, but if we enter 333, the display array will contain "3","3","3" while we see 333 in the display. To calculate that correctly, we have to push the number "333" which is now contained in `stringNumberToPush`.
      - So the first thing we will do here is push the `stringNumberToPush` variable into the calculation array.
      - Now, console log the `calculationArray` using the previous test case to make sure this is working.
        - To test: Press 3,3,3 on the calculator and then press an operator.
          - When you note that the calculation array is correctly storing "333" in the first index. Move on to the next step
      - Now that we are storing multi numbers correctly, let's add the operator as well!
        - On the next line after you have pushed `stringNumberToPush` into the `calculationArray`, now push the `inputtedOperator` variable into the `calculationArray`.
        - Now console log the `calculationArray` to confirm that the array contains `["333", "operator you clicked"]`
        - Once this works correctly, move on to the next step
      - The last thing we have to do is reset the `stringNumberToPush` global variable to the value of an `""`
        - This is because next time we hit a number we need to create a new string which we will use to calculate that does not contain the previous numbers!
      - Once you have done this, congratulations, you are done with Step 4!


</details>

<details>
<summary>5. Store an additional number in the calulation array and prepare to calculate</summary>

  - The following will be performed in the `equalsButtonHandler` function
    - The first thing to do is to push `stringNumberToPush` into the `calculationArray`;
      - This is to ensure that the last number entered is available to the `calculationArray` for calculation purposes
    - Next, reset the value of `stringNumberToPush` to `""`.
    - Now, set the `displayArray` to the value `[]`.
      - This is to prepare the display to show the result of the calculation.
    - Finally, console log the `calculationArray` to make sure you have 3 items in the array `["number","operator","number"]
      - test this by entering the following values into your calculator
        - Press 333
        - Then press +
        - Then Press 333
        - Then press =
      - the resulting `calculationArray` should contain `["333", "+", "333"].
  - Once you have completed this functionality, Congratulations! You have completed step 5!!!
    -Move on to the second feature set!
</details>







### Design Docs



### After Each Feature

- When your feature implementation is complete, you will want to save and submit your work to the branch that you have created.
  - Use `git status` to check that you are on the correct branch that represents your feature.
  - You will want to **add**, **commit**, and **push** the code that you have written to the appropriate Github repository.
    1. `git add .`
    2. `git commit -m "Description of the feature that you have implemented"`
       - e.g. `git commit -m "Added inputs to be used for calculations"`
    3. `git push origin FEATURE_NAME_HERE`
       - e.g. `git push origin handlingInputs`

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
