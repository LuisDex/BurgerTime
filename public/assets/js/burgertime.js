
$("#newBurger").on("click",function(event){
    event.preventDefault();

    var newBurger = {burger_name:$("#burgerForm").val().trim(), devoured:false};

    $.ajax("api/burger", {type:"POST",data:newBurger}).then(function(){
        console.log("Burger up!");
        location.reload();
    })
});

$(".devourIt").on("click",function(event){

  var btnID = $(this).attr("value");
  console.log(btnID);
});