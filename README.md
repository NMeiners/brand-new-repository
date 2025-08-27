Author: Nathan Meiners<br/>
<br/>
Overview:<br/>
	&emsp;The page contains a basic random number generator that<br/>
	&emsp;generates a number within the user's selected range.<br/>
   <br/>
Functionality:<br/>
	&emsp;A link to the repository is included and styled for visibility.<br/>
   <br/>
	&emsp;The user must select a minimum and maximum range.<br/>
   <br/>
	&emsp;The page guarantees only integers can be entered and <br/>
 	&emsp;ensures the minimum is less than or equal to the maximum.<br/>
<br/>
	&emsp;If there is no miminum/maximum value entered <br/>
	&emsp;or the entered range is invalid, the page will warn<br/>
	&emsp;the user when the "generate" button is clicked.<br/>
<br/>
	&emsp;Once the user has input a valid minimum/maximum,<br/>
	&emsp;the "generate" button will alter an output paragraph<br/>
	&emsp;to display the generated number.<br/>
<br/>
	&emsp;The number is generated using a "generate(min, max)" javascript function.<br/>
<br/>
Choices and Challenges:<br/>
	&emsp;CSS styles are stored within style tags within the head block,<br/>
	&emsp;rather than attached to specific tags.<br/>
<br/>
	&emsp;When getting the selected range from the user entry fields,<br/>
	&emsp;the generate() function must first convert text to numbers <br/>
	&emsp;to ensure the values are not passed as strings.<br/>
	&emsp;The numbers are then validated as integers.<br/>
<br/>
	&emsp;To maintain separatation between HTML elements and JavaScript,<br/>
	&emsp;the generate() function returns the generated number which is then<br/>
	&emsp;used to update the output by the "onclick" event.<br/>
   
