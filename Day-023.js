function checkDiscount() {
    let age=document.getElementById("age").value;
    let isStudent=document.getElementById("isStudent").checked;

    if (age<18 || isStudent) {
        alert("Discount");
    }    
    else {
        alert("Regular Price")
    }
}

function calculate() {
    let product= document.getElementById("product").value;
    let insurance= document.getElementById("insurance").checked;
    let quantity= document.getElementById("quantity").value;
    let total=product*quantity+(insurance && 10);
    let Shipping="";

    if (total > 400) {
        Shipping = "Free";
    }
    else if (total > 100) {
        Shipping = "Discounted";
    }
    else {
        Shipping = "Standard";
    }

    let ship = document.getElementById("shipping")
    ship.textContent = ship.textContent + Shipping
}

