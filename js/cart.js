var shopping_cart_pressed = 0;
var data = {"total":0,"rows":[]};
var totalCost = 0;

$(document).ready(function() {

  // If button of the cart is pressed, cart will be showed
  $( ".cart" ).click(function(event) {
    if(shopping_cart_pressed == 0){
    event.preventDefault();
    $( ".shopping_cart" ).fadeIn(50,function(){});
    $( ".basket_icon" ).fadeIn(50,function(){});
    shopping_cart_pressed = 1;
  }else if(shopping_cart_pressed == 1){
    $( ".shopping_cart" ).fadeOut(20);
    $( ".basket_icon" ).fadeOut(20);
    shopping_cart_pressed = 0;
  }
  });


  'use strict';
  $('#cartcontent').datagrid({
    singleSelect:true
  });


  $( ".action--buy" ).click(function(event, source) {
    var name = "Bob";
    var price = $(this).attr("data");
    console.log(name);
    console.log(price);
    addProduct(name, parseFloat(price));
  });

});




function addProduct(name,price){
  'use strict';
  function add(){
    for(var i=0; i<data.total; i++){
      var row = data.rows[i];
      if (row.name === name){
        row.quantity += 1;
        return;
      }
    }
    data.total += 1;
    data.rows.push({
      name:name,
      quantity:1,
      price:price
    });
  }
  add();
  totalCost += price;
  //load data grid from jquery ui
  $('#cartcontent').datagrid('loadData', data);
  //update totals in the html
  $(".shopping_cart_cost").text("£" + Math.round(totalCost * 100) / 100);


}
