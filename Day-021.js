function performAndOperation() {
  let input1 = document.getElementById('input1').checked;
  let input2 = document.getElementById('input2').checked;

  let result = input1 && input2;
  alert("Result of AND operation: " + result);
}

function performAndOperation() {
  let input1 = document.getElementById('input1').checked;
  let input2 = document.getElementById('input2').checked;

  let result = input1 || input2;
  alert("Result of OR operation: " + result);
}

alert(true && false)
alert(false && true)
alert(true || false)
alert(false || true)
