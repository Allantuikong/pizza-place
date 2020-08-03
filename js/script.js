class Pizza {
    constructor(type, size, crust, toppings) {
        this.pizzaType = type
        this.pizzaSize = size
        this.pizzaCrust = crust
        this.pizzaToppings = toppings
    }
    fullOrder() {
        return this.pizzaType + "," + this.pizzaSize + "," + this.pizzaCrust + "," + this.pizzaToppings 
    }
}



// //pizza types
// let pizzaType1 = {
//     name: "Meat Deluxe",
//     price: [],
// }
// let pizzaType2 = {
//     name: "Peri peri chicken",
//     price: [],
// }
// let pizzaType3 = {
//     name: "Chicken BBQ",
//     price: [],
// }
// let pizzaType4 = {
//     name: "Indian Veg Feast",
//     price: []
// }
// //pizza sizes & prices
// let pizzaSize1 = {
//     name: "Kapyenga(small)",
//     price: 500
// }
// let pizzaSize2 = {
//     name: "Medium",
//     price: 700
// }
// let pizzaSize3 = {
//     name: "Large",
//     price: 1000
// }
// let pizzaSize4 = {
//     name: "Uzito(x-large",
//     price: 1200
// }
// //pizza crust & prices 
// let  pizzaCrust1 = {
//     name: "Delightfully crispy(normal)",
//     price: 0
// }
// let pizzaCrust2 = {
//     name: "Heavily stuffed(Muchies time!!)",
//     price: 100
// }
// let pizzaCrust3 = {
//     name: "Glutten free (Health freaks)",
//     price: 150
// }
// //pizza toppings & prices 
// let pizzaToppings1 = {
//     name: "Pepperoni",
//     price: 50
// }
// let pizzaToppings2 = {
//     name: "Extra cheese",
//     price: 60
// }
// let pizzaToppings3 = {
//     name: "Sausage",
//     price: 70
// }
// let pizzaToppings4 = {
//     name: "Pineapple",
//     price: 80
// }
// let pizzaToppings5 = {
//     name: "Bacon",
//     price: 90
// }
// let pizzaToppings6 = {
//     name: "none",
//     price: 0
// }




$(document).ready(function(){
    $("#orderPizza").submit(function(event) {
        event.preventDefault();

        let inputtedPizzaType = $('input[name=pizzaType]:checked', '#orderPizza').parent().text()
        let inputtedPizzaSize = $('input[name=pizzaSize]:checked', '#orderPizza').parent().text()
        let inputtedpizzaCrust = $('input[name=pizzaCrust]:checked', '#orderPizza').parent().text()
        let inputtedpizzaToppings = $('input[name=pizzaToppings]:checked', '#orderPizza').parent().text()
        let newPizza = new Pizza(inputtedPizzaType,inputtedPizzaSize,inputtedpizzaCrust,inputtedpizzaToppings)

        $("ul#order-summary").append("<li><span class='pizzaOrder'>" + newPizza.fullOrder() + "</span> </li>")

      
    })

    $("#deliveryPointForm").submit(function(event) {
        event.preventDefault();

        deliveryPoint = $("#deliveryPoint").val();
        if (deliveryPoint == 1) {
            $("#remoteLocation").show();

        }

    })

    function resetFields(){
        $("input#userName").val("")
        $("input#userAddress").val("")
    
      }

    
    $("#submitLocaton").submit(function(event) {
        event.preventDefault();
        var remoteClientName = $("#userName").val()
        var remoteClientAddress = $("#userAddress").val()
    

        
        $("#remoteThankYou").html("Thankyou " + remoteClientName + " for odering with us! Your order will be delivered to your location, " + remoteClientAddress + ".");
    
        resetFields()
    
    
    })

   

})


