var input = document.getElementById('input');
var Output = document.getElementById('output');
var node = document.getElementById('node');
let vertices;

function InputFields(e) {
  //genrating inputs
  input.innerHTML = '';
  vertices = parseInt(e.value);
  for (let i = 0; i < vertices; i++) {
    for (let i = 0; i < vertices; i++) {
      input.innerHTML += "<input class='valueInput' />";
    }
    input.innerHTML += '<br/>';
  }
  vertices > 0 ? (node.style.display = 'block') : (node.style.display = 'none');
}

function Matrix() {
  //generate matrix
  let Inputs = document.getElementsByClassName('valueInput');
  let InputValues = [];
  let Matrix = [];
  for (const element of Inputs) {
    InputValues.push(parseInt(element.value));
  }
  while (InputValues.length) Matrix.push(InputValues.splice(0, vertices));
  return Matrix;
}

function TransitiveClosureAlgo() {
  var graph = Matrix();
  var reach = Array.from(Array(vertices), () => new Array(vertices));
  var i, j, k;

  for (i = 0; i < vertices; i++)
    for (j = 0; j < vertices; j++) reach[i][j] = graph[i][j];

  for (k = 0; k < vertices; k++) {
    for (i = 0; i < vertices; i++) {
      for (j = 0; j < vertices; j++) {
        reach[i][j] =
          reach[i][j] != 0 || (reach[i][k] != 0 && reach[k][j] != 0) ? 1 : 0;
      }
    }
  }

  Print(reach);
}

function Print(reach) {
  for (var i = 0; i < vertices; i++) {
    for (var j = 0; j < vertices; j++) {
      if (i == j) {
        Output.innerHTML += '1 ';
      } else {
        Output.innerHTML += reach[i][j] + ' ';
      }
    }
    Output.innerHTML += '<br/>';
  }
}