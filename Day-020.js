function processFormData() {
  // Access the form
  let form = document.getElementById('myForm');
  //Access the elements by name and get values
  let city = form.elements.city.value;
  let country = form.elements.country.value;

  insertData(city, country);
    
  document.getElementById('city').value = '';
  document.getElementById('country').value = '';
};


console.log(7 + 3);
console.log(10 - 5);
console.log(5 * 3);
console.log(10 / 2);


console.log(30 < 25);
console.log(5 < 9);
console.log(50 > 100);

let x = confirm("Proceed to payment?");
console.log(x);

function checkTicked() {
  let box = document.getElementById("c1");
  console.log(box.checked);
}

function processFormData() {
  let form = document.getElementById('myForm');

  let cardNumber = form.elements.number.value;
  let holder = form.elements.holder.value;
  let method = form.elements.pay.value;

  //Insert data into table with predefined function
  insertdata(cardNumber, holder, method);
    
  // Clear the form fields
  clearFormData();
};

