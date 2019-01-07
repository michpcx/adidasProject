var shopping_cart_pressed = 0;
var data = {"total":0,"rows":[]};
var totalCost = 0;
var margin = 0;

$(document).ready(function() {

  'use strict';
  $('#cartcontent').datagrid({
    singleSelect:true
  });

  if(localStorage && localStorage.getItem('cart')){
    var cart = localStorage.getItem('cart');
    totalCost = parseInt(localStorage.getItem('totalCost'));
    var totalItems = parseInt(localStorage.getItem('totalItems'), 10);
    $(".shopping_cart_cost").text("£" + Math.round(totalCost * 100) / 100);
    $(".cart_items_count").text(totalItems);
    $(".cart__count").text(totalItems);
    var items = JSON.parse(cart);
    $('#cartcontent').datagrid('loadData', items);
    data = items;
    }

  // If button of the cart is pressed, cart will be showed
  $( ".cart" ).click(function(event) {
    if(shopping_cart_pressed == 0){
    event.preventDefault();
    $(".shopping_cart").css("visibility", "visible");
    $(".basket_icon").css("visibility", "visible");
    shopping_cart_pressed = 1;
  }else if(shopping_cart_pressed == 1){
    $(".shopping_cart").css("visibility", "hidden");
    $(".basket_icon").css("visibility", "hidden");
    shopping_cart_pressed = 0;
  }
  });





  $( ".cart_buy_button" ).click(function(event) {
    event.preventDefault();
    if(totalCost != 0){
    $( ".overlay" ).fadeIn( "slow",
    function() {
      $( ".overlay" ).delay(5000).fadeOut("slow");
    });
  }else{
    $( ".overlay2" ).fadeIn( "slow",
    function() {
      $( ".overlay2" ).delay(5000).fadeOut("slow");
    });
  }
  });

  $( ".cart_reset_button" ).click(function(event) {
    localStorage.clear();
    location.reload();
  });

  $( ".action--buy" ).click(function(event, source) {
    var name = $(this).attr("name_data");
    var price = $(this).attr("price_data");
    addProduct(name, parseFloat(price));
    var data_string = JSON.stringify(data);
    localStorage.setItem("cart", data_string);
    localStorage.setItem("totalCost", totalCost);
		var cartItems = parseInt($('.cart__count').text(), 10);
    localStorage.setItem("totalItems", cartItems+1);
  });

});




function addProduct(name,price){
  'use strict';
  function add(){
    for(var i=0; i<data.total; i++){
      var row = data.rows[i];
      if (row.name === name){
        margin -= 38;
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
  totalCost += parseInt(price, 10);
  //load data grid from jquery ui
  $('#cartcontent').datagrid('loadData', data);
  //update totals in the html
  $(".shopping_cart_cost").text("£" + Math.round(totalCost * 100) / 100);
}
