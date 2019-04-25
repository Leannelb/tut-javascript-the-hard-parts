function instructionGenerator (num) {
  let inputsArray = [];
  function mulitplyByNum (input) {
    inputsArray.push(input);
    console.log(inputsArray);
    return input * num;
  }
  return mulitplyByNum;
}

let generatedFunc = instructionGenerator(3);
