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
    $("#order_Pizza").submit(function(event){
        event.preventDefault()

        $(this).find('option:selected').attr("name")
        
        
            function type() {
                let pizzaType = document.getElementById("pizza_type").value
                return parseInt(pizzaType);
            }

            function size() {
                let pizzaSize = document.getElementById("pizza_size").value
                return parseInt(pizzaSize);
            }

            function crust() {
                let pizzaCrust = document.getElementById("pizza_crust").value
                return parseInt(pizzaCrust);
            }

            function toppings() {
                let pizzaToppings = document.getElementById("pizza_toppings").value
                return parseInt(pizzaToppings);
            }
            
            function number() {
                let pizzaNumber = document.getElementById("quantity").value
                return parseInt(pizzaNumber);
            }

            let selectedSize= $( "#pizza_size option:selected" ).text()
            let selectedType = $( "#pizza_type option:selected" ).text()
            let selectedCrust = $( "#pizza_crust option:selected" ).text()
            let selectedToppings= $( "#pizza_toppings option:selected" ).text()
    
        let userInput = new Pizza (type(), size(), crust(), toppings(), number() );

        let totalCost = (userInput.newType + userInput.newSize + userInput.newCrust + userInput.newToppings) * userInput.newQuantity
    
     
       
        $("#selected-type").html(selectedSize)
        $("#selected-size").html(selectedCrust)
        $("#selected-crust").html(selectedToppings)
        $("#selected-toppings").html(selectedType)


    
        $("#order-summary").html("Thank you  for ordering with us! " + "your total cost is Ksh." + "" + totalCost  );
        
       
     
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
      
        $("#remoteThankYou").html("Thankyou " + remoteClientName + " for odering with us! Your order will be delivered to your location, " + remoteClientAddress + ".");
      
    });

})
 
     
    

     


   







