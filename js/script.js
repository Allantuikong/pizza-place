class Pizza {
    constructor(type, size, crust, toppings, quantity) {
        this.newType = type
        this.newSize = size
        this.newCrust = crust
        this.newTopping = toppings
        this.newQuantity = quantity
    }
}
    
$(document).ready(function() {
    $("#orderPizza").submit(function(event){
        event.preventDefault()
        
          function type() {
            let pizzaType = document.getElementById("pizza_type").value;
            return parseInt(pizzaType);
          }
          function size() {
            let pizzaSize = document.getElementById("pizza_size").value;
            return parseInt(pizzaSize);
          }
          function crust() {
            let pizzaCrust = document.getElementById("pizza_crust").value;
            return parseInt(pizzaCrust);
          }
          function toppings() {
            let pizzaToppings = document.getElementById("pizza_toppings").value;
            return parseInt(pizzaToppings);
          }
          function number() {
            let pizzaNumber = document.getElementById("quantity").value;
             return parseInt(pizzaNumber);
          }

        let userInput = new Pizza (type(), size(), crust(), toppings(), number())
    
        let totalCost = (userInput.newType + userInput.newSize + userInput.newCrust + userInput.newToppings) * userInput.newQuantity

    
        $("#order-summary").html("Your charges for the pizza is Ksh. " + " " +  totalCost + "Hope you enjoy this meal!");

        $("input#pizza_size").val("")
        $("input#pizza_crust").val("")
        $("input#pizza_type").val("")
        $("input#pizza_toppings").val("")
        $("input#quantity").val ("")
        $("input#order-summary").val ("")
    
        
    })

    $("#deliveryPointForm").submit(function(event) {
        event.preventDefault();
      
        deliveryPoint = $("#deliveryPoint").val();
        if (deliveryPoint == 1) {
            $("#remoteLocation").show();
      
        };
      
    });
    
    $("#submitLocaton").submit(function(event) {
        event.preventDefault();
        var remoteClientName = $("#userName").val();
        var remoteClientAddress = $("#userAddress").val();
        var remoteClientPhoneNumber = $("#userTelNum").val();
      
        $("#remoteThankYou").html("Thankyou " + remoteClientName + " for odering with us! Your order will be delivered to your location, " + remoteClientAddress + ".");
      
      });

})
 
    // calculateCost() {


    //     if (this.size === 'small') {
    //         this.cost += 500;
    //     } else if (this.size === 'medium') {
    //         this.cost += 700;
    //     } else if (this.size === 'large') {
    //         this.cost += 1000;
    //     } else if (this.size === 'x-large') {
    //         this.cost += 1200;
    //     }

    //     if (this.crust === 'crispy') {
    //         this.cost += 0;
    //     } else if (this.crust === 'stuffed') {
    //         this.cost += 100;
    //     } else if (this.crust === 'glutten') {
    //         this.cost += 150;
    //     }

    //     this.toppings.forEach(topping => {
    //         this.cost += 50;
    //     });

    //     return this.cost;
    // }   
    

     


   







