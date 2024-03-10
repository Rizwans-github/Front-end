let age = prompt();

if (age > 18) {
  alert("Regular price");
}
else{
  alert("Discount");
}

function check() {
  let ram = Number(prompt());
  let element = document.getElementById('result');

  if (ram > 16) {
    element.textContent = 'Starting the game...';
    } 
  else {
    element.textContent = 'PC upgrade needed';
    }
}

function calculate(){
  let x = document.getElementById("price");

  let isOver18 = confirm("Press OK if under 18");

  if (isOver18 === true) {
    x.textContent = "Discount: 10$";
  }
  else {
    x.textContent = "Regular price: 50$";
  }
}

function calculateTotal() {
  let basePrice = 20;
  let feature = document.getElementById('feature').checked;

  if (feature) {
    let total = basePrice + 5;
    document.getElementById('totalPrice').textContent = total;
  }
  else {
    document.getElementById('totalPrice').textContent = basePrice;
  }
}

