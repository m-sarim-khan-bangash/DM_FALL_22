let inputBox = document.getElementById("inputBox");
let output = document.getElementById("output");
let nodes;

const ShowInputFields = (e) => {
  inputBox.innerHTML = "";
  nodes = parseInt(e.value);
  for (let i = 0; i < nodes; i++) {
    for (let i = 0; i < nodes; i++) {
      inputBox.innerHTML += "<input class='valueInput' />";
    }
    inputBox.innerHTML += "<br/>";
  }
};

const GenerateMatrix = () => {
  let Inputs = document.getElementsByClassName("valueInput");
  let InputValues = [];
  let Matrix = [];
  for (const element of Inputs) {
    InputValues.push(parseInt(element.value));
  }
  while (InputValues.length) Matrix.push(InputValues.splice(0, nodes));
  return Matrix;
};

const CalculateTransitiveClosure = () => {
  let graph = GenerateMatrix();
  let result = [...graph];

  for (let k = 0; k < nodes; k++) {
    for (let i = 0; i < nodes; i++) {
      for (let j = 0; j < nodes; j++) {
        result[i][j] = result[i][j] || (result[i][k] && result[k][j]);
      }
    }
  }
  for (const element of result) {
    for (let j = 0; j < result.length; j++) {
      output.innerHTML += element[j];
    }
    output.innerHTML += "<br/>";
  }
};
