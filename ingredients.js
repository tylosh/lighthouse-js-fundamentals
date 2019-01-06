var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log ('WHILE LOOP')
var j = 0
while (j < ingredients.length) {
  console.log (ingredients[j])
  j++
}


// Write a for loop that prints out the contents of ingredients:
console.log ('FOR LOOP')
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i])
}


// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log ('FOR LOOP BACKWARDS')
for (var i = (ingredients.length) - 1; i > -1; i--) {
  console.log(ingredients[i])
}