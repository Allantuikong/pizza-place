class Pizza {
    constructor(type, size, crust, toppings) {
        this.type = type
        this.size = size
        this.crustrust = crust
        this.toppings = toppings
    }
    fullOrder() {
        return this.pizzaType + "," + this.pizzaSize + "," + this.pizzaCrust + "," + this.pizzaToppings 
    }

    calculateCost() {
  

        if (this.size === 'Kapyenga (Small) ') {
            this.cost += 500;
        } else if (this.size === 'Medium') {
            this.cost += 700;
        } else if (this.size === 'Large') {
            this.cost += 1000;
        } else if (this.size === 'Uzito (x-large)') {
            this.cost += 1200;
        }
    
        if (this.crust === 'Delightfully crispy(normal)') {
            this.cost += 0;
        } else if (this.crust === 'Heavily stuffed(Muchies time!!)') {
            this.cost += 100;
        } else if (this.crust === 'Glutten free (Health freaks)') {
            this.cost += 150;
        }
    
        this.topping.forEach(topping => {
            this.cost += 100;
        });
        return this.cost;
    }
}




class Order {
    constructor(crust, size, topping) {
        this.crust = crust;
        this.size = size;
        this.topping = topping;
        this.cost = 0;
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

        let inputtedtype = $('input[name=pizzaType]:checked', '#orderPizza').parent().text()
        let inputtedsize = $('input[name=pizzaSize]:checked', '#orderPizza').parent().text()
        let inputtedcrust = $('input[name=pizzaCrust]:checked', '#orderPizza').parent().text()
        let inputtedtoppings = $('input[name=pizzaToppings]:checked', '#orderPizza').parent().text()
        let newPizza = new Pizza(inputtedtype,inputtedsize,inputtedcrust,inputtedtoppings)

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
    

        
        $("#remoteThankYou").html("Thank you " + remoteClientName + " for odering with us! Your order will be delivered to your location in " + remoteClientAddress + ".");
    
        resetFields()
    
    
    })


})

