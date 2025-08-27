Author: Nathan Meiners<br/>
<br/>
Overview:<br/>
	- The page contains a basic random number generator that<br/>
	generates a number within the user's selected range.<br/>
   <br/>
Functionality:<br/>
	- A link to the repository is included and styled for visibility.<br/>
   <br/>
   - The user must select a minimum and maximum range.<br/>
   <br/>
   - The page guarantees only integers can be entered and <br/>
   ensures the minimum is less than or equal to the maximum.<br/>
<br/>
   - If there is no miminum/maximum value entered <br/>
   or the entered range is invalid, the page will warn<br/>
   the user when the "generate" button is clicked.<br/>
<br/>
   - Once the user has input a valid minimum/maximum,<br/>
   the "generate" button will alter an output paragraph<br/>
   to display the generated number.<br/>
<br/>
   - The number is generated using a "generate(min, max)" javascript function.<br/>
<br/>
Choices and Challenges:<br/>
   - CSS styles are stored within style tags within the head block,<br/>
   rather than attached to specific tags.<br/>
<br/>
   - When getting the selected range from the user entry fields,<br/>
   the generate() function must first convert text to numbers <br/>
   to ensure the values are not passed as strings.<br/>
   The numbers are then validated as integers.<br/>
<br/>
   - To maintain separatation between HTML elements and JavaScript,<br/>
   the generate() function returns the generated number which is then<br/>
   used to update the output by the "onclick" event.<br/>
   
