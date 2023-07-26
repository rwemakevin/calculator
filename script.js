let currentInput = "";
let result = 0;
let currentOperator = "";

let upperDisplay = document.getElementById("typing2")

//Function to update the display
function updateInput() {
    document.getElementById("typing").textContent = currentInput;
  }

// Function to handle number  clicks
function handleNumberClick(number) {
currentInput += number;
updateInput();
}

  // Function to handle operator button clicks
  function handleOperatorClick(operator) {
    if (currentInput !== "") {
      if (currentOperator === "+") {
        result += parseFloat(currentInput);
      } else if (currentOperator === "-") {
        result -= parseFloat(currentInput);
      } else if (currentOperator === "*") {
        result *= parseFloat(currentInput);
      } else if (currentOperator === "/") {
        result /= parseFloat(currentInput);
      } else {
        result = parseFloat(currentInput);
      }
    }
    upperDisplay.textContent = currentInput;
    currentInput = "";
    currentOperator = operator;
    updateInput();
  }


   // Function to handle the equals button click
   function handleEqualsClick() {
    handleOperatorClick("");
    currentInput = result.toString();
    updateInput();
  }


  // Function to clear the calculator
  function clearCalculator() {
    currentInput = "";
    result = 0;
    currentOperator = "";
    updateInput();
    upperDisplay.textContent = 0;
  }

  // Function to reload the calculator
  function clearCalculator2() {
    location.reload()
  }

   // Attach click event listeners to number buttons
   document.querySelectorAll(".button.number").forEach(button => {
    button.addEventListener("click", function() {
      handleNumberClick(button.textContent);
    });
  });

  // Attach click event listeners to operator buttons
  document.querySelectorAll(".button.operator").forEach(button => {
    button.addEventListener("click", function() {
      handleOperatorClick(button.textContent);
      
    });
  });

   // Attach click event listener to the equals button
   document.getElementById("equals").addEventListener("click", handleEqualsClick);

      // Attach click event listener to the clear button
    document.getElementById("clear").addEventListener("click", clearCalculator);

// Attach click event listener to the reload button
document.getElementById("clear2").addEventListener("click", clearCalculator2);
