function Pizza (type,size,crust,toppings) {
    this.type = type
    this.size = size
    this.crust = crust
    this.toppings = toppings
}

//pizza types
let pizzaType1 = {
    name: "Meat Deluxe",
    price: [],
}
let pizzaType2 = {
    name: "Peri peri chicken",
    price: [],
}
let pizzaType3 = {
    name: "Chicken BBQ",
    price: [],
}
let pizzaType4 = {
    name: "Indian Veg Feast",
    price: []
}
//pizza sizes & prices
let pizzaSize1 = {
    name: "Kapyenga(small)",
    price: 500
}
let pizzaSize2 = {
    name: "Medium",
    price: 700
}
let pizzaSize3 = {
    name: "Large",
    price: 1000
}
let pizzaSize4 = {
    name: "Uzito(x-large",
    price: 1200
}
//pizza crust & prices 
let  pizzaCrust1 = {
    name: "Delightfully crispy(normal)",
    price: 0
}
let pizzaCrust2 = {
    name: "Heavily stuffed(Muchies time!!)",
    price: 100
}
let pizzaCrust3 = {
    name: "Glutten free (Health freaks)",
    price: 150
}
//pizza toppings & prices 
let pizzaToppings1 = {
    name: "Pepperoni",
    price: 50
}
let pizzaToppings2 = {
    name: "Extra cheese",
    price: 60
}
let pizzaToppings3 = {
    name: "Sausage",
    price: 70
}
let pizzaToppings4 = {
    name: "Pineapple",
    price: 80
}
let pizzaToppings5 = {
    name: "Bacon",
    price: 90
}
let pizzaToppings6 = {
    name: "none",
    price: 0
}

$(document).ready(function(){
    $("button#submit").submit(function(event){
        event.preventDefault()

        $(".pizza-order").each(function(){
            let inputtedPizzaType = $(this).find(".pizzaType").val()
            let inputtedPizzaSize = $(this).find(".pizzaSize").val()
            let inputtedpizzaCrust = $(this).find(".pizzaCrust").val()
            let inputtedpizzaToppings = $(this).find(".pizzaToppings").val()
            let newPizza = new Pizza(inputtedPizzaType,inputtedPizzaSize,inputtedpizzaCrust,inputtedpizzaToppings)
            
            console.log(newPizza)
        })

        


    })
})

 

