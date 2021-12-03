console.log('JavaScript code has loaded!')

let yourName = "Rachasima Tran"

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0
// Code to update name display 
document.getElementById('credit').textContent = `Created by Rachasima Tran`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    console.log('Gingerbread + button was clicked!')
    gb++;
    total++;
document.getElementById('qty-gb').textContent = gb;
document.getElementById('qty-total').textContent = total;
})

document.getElementById('minus-gb').addEventListener('click', function() {
    console.log('Gingerbread - button was clicked!')
    if(gb > 0) {
    gb--;
    total--;
    }
document.getElementById('qty-gb').textContent = gb;
document.getElementById('qty-total').textContent = total;
})

document.getElementById('add-cc').addEventListener('click', function() {
    console.log('Chocolate Chip + button was clicked!')
    cc++;
    total++;
document.getElementById('qty-cc').textContent = cc;
document.getElementById('qty-total').textContent = total;
})

document.getElementById('minus-cc').addEventListener('click', function() {
    console.log('Chocolate Chip - button was clicked!')
    if (cc > 0 ) {
    cc--;
    total--;
    }
document.getElementById('qty-cc').textContent = cc;
document.getElementById('qty-total').textContent = total;
})

document.getElementById('add-sugar').addEventListener('click', function() {
    console.log('Sugar Sprinkle + button was clicked!')
    sugar++;
    total++;
document.getElementById('qty-sugar').textContent = sugar;
document.getElementById('qty-total').textContent = total;
})

document.getElementById('minus-sugar').addEventListener('click', function() {
    console.log('Sugar Sprinkle - button was clicked!')
    if (sugar > 0 ) {
    sugar--;
    total--;
    }
document.getElementById('qty-sugar').textContent = sugar;
document.getElementById('qty-total').textContent = total;
})