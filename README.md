Author: Nathan Meiners
Overview:
   The page contains a basic random number generator that
   generates a number within the user's selected range.
   
Functionality:
   A link to the repository is included and styled for visibility.
   
   The user must select a minimum and maximum range.
   
   The page guarantees only integers can be entered and 
   ensures the minimum is less than or equal to the maximum.

   If there is no miminum/maximum value entered 
   or the entered range is invalid, the page will warn
   the user when the "generate" button is clicked.

   Once the user has input a valid minimum/maximum,
   the "generate" button will alter an output paragraph
   to display the generated number.

   The number is generated using a "generate(min, max)" javascript function.

Choices and Challenges:
   CSS styles are stored within style tags within the head block,
   rather than attached to specific tags.

   When getting the selected range from the user entry fields,
   the generate() function must first convert text to numbers 
   to ensure the values are not passed as strings.
   The numbers are then validated as integers.

   To maintain separatation between HTML elements and JavaScript,
   the generate() function returns the generated number which is then
   used to update the output by the "onclick" event.
   
