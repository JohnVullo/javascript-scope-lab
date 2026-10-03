// Write your solution in this file!

const burgers = ["Hamburger", "Cheeseburger"]

let featuredDrink = "Strawberry Milkshake"

function addBurger(){
    const newBurger = "Flatburger"
    burgers.push(newBurger)
}

function changeFeatureDrink(){
    featuredDrink = "JavaShake"
}

if(true){
    const anotherNewBurger = "Maple Bacon Burger"
    burgers.push(anotherNewBurger)
}

console.log(burgers)
console.log(featuredDrink)

addBurger()
changeFeatureDrink()

console.log(burgers)
console.log(featuredDrink)
//console.log(newBurger)
//console.log(anotherNewBurger)