const defaultResult = 0;
let currentResult = defaultResult
let logEntries = []

// Gets input from field
function getNumInput() {
  return parseInt(userInput.value)
}

// Generates and writes calculation log
function createAndWriteLog(operator, resultBeforeCalc, calcNum) {
  const calculationDescription = `${resultBeforeCalc} ${operator} ${calcNum}`
  outputResult(currentResult, calculationDescription) // from vendor.js file
}



// Write log entries and push to Log Entries array
function writeToLog(operationId, prevResult, operationNum, finalResult) {
  const logEntry = {
    operation: operationId,
    prevResult: prevResult,
    number: operationNum,
    result: finalResult,
  }
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNum = getNumInput()
  const initResult = currentResult
  let operatorType;
  if(calculationType === 'ADD') {
    currentResult += enteredNum
    operatorType = '+'
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNum
    operatorType = '-'
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNum
    operatorType = '*'
  } else {
    currentResult /= Math.floor(enteredNum)
    operatorType = '/'
  }
  createAndWriteLog(operatorType, initResult, enteredNum)
  writeToLog(calculationType, initResult, enteredNum, currentResult)
}

function add() {
  calculateResult('ADD')
}

function subtract() {
  calculateResult('SUBTRACT')
}

function multiply() {
  calculateResult('MULTIPLY')
}

function divide() {
  calculateResult('DIVIDE')
}

// Event listeners 
addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)