#### To start the project: `yarn install && yarn start`

#### To run unit tests: `yarn test`

### How I solved this challenge

I created a grid of styled Buttons that have an onclick function: `handleButtonClick`. I also created a few state variables:

- `total` - the total of the calculations
- `input` - when the user inputs a new value
- `operator` - the operator that is selected
- `selectedKey` - to tell when a key has been pressed so we can highlight it
- `display` - the string value that is shown to the user on the calculator

from here I created functions to break the code up into the functionality we need:

- `handleButtonClick`:
  - this function determines where we move next: to handle the key change, clear the values, calculate a result, set a negative number, or handle percentages
- `handleKeyChange`:
  - this function sets the string value that appears as the total on the calculator. It formats the string properly for the UI and handles concatenation of srings (how I kept track of which value was the user's input vs. the total was by intially setting the `input` variable to `null` and the total to `zero`. I would know that if the `input` was `null`, then we have not entered a second input yet)
- `calculateNewValue`:
  - this function calculates a new total by either adding, subtracting, multiplying or dividing the `total` and the `input`
- `handleNegativeNumber`:
  - this function handles when the `+/-` key is clicked. it will insert a "-" char to the display string (or remove it if it already exists) and updates the numeric value as well
- `clearValues`:
  - this function resets the state when the `AC` key is pressed
