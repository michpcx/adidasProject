$(document).ready(function() {
      // Initializing variables
      var part = 1;
      var shoe = 1;
      var total = 89.99;
      var laces_added = 0;
      var soles_added = 0;
      var stripes_added = 0;

      // If first color is pressed, check with shoe is selected, check which part is selected and change that part after which add the part to the price breakdown and update the total
      $("#color1").click(function () {
        if(shoe == 1){
        if(part == 1){
          var img = 'assets/custom/sobakov/sobakov_black_laces.png';
          $('#layer3').css("background-image", "url(" + img + ")");
          if(laces_added == 0){
            laces_added = 1;
            $('#anchor_extras').after('<tr id="extra_laces"><td>Extra Laces</td><td>£9.99</td></tr>');
            total += 9.99;
          }
        }else if(part == 2){
          var img = 'assets/custom/sobakov/sobakov_black_sole.png';
          $('#layer4').css("background-image", "url(" + img + ")");
          if(soles_added == 0){
            soles_added = 1;
            $('#anchor_extras').after('<tr id="extra_soles"><td>Extra Sole</td><td>£19.99</td></tr>');
            total += 19.99;
          }
        }else if(part == 3){
          var img = 'assets/custom/sobakov/sobakov_black_bars.png';
          $('#layer2').css("background-image", "url(" + img + ")");
          if(stripes_added == 1){
            stripes_added = 0;
            total -= 14.99;
            $('#extra_stripes').remove();
          }
        }
      }else if (shoe == 2){
          if(part == 1){
            var img = 'assets/custom/sobakov/sobakov2_pink_laces.png';
            $('#layer3').css("background-image", "url(" + img + ")");
            if(laces_added == 1){
              laces_added = 0;
              total -= 9.99;
              $('#extra_laces').remove();
            }
          }else if(part == 2){
            var img = 'assets/custom/sobakov/sobakov2_pink_sole.png';
            $('#layer4').css("background-image", "url(" + img + ")");
            if(soles_added == 1){
              soles_added = 0;
              total -= 19.99;
              $('#extra_soles').remove();
            }
          }else if(part == 3){
            var img = 'assets/custom/sobakov/sobakov2_pink_bars.png';
            $('#layer2').css("background-image", "url(" + img + ")");
            if(stripes_added == 0){
              stripes_added = 1;
              $('#anchor_extras').after('<tr id="extra_stripes"><td>Extra Stripes</td><td>£14.99</td></tr>');
              total += 14.99;
            }
          }
        }
        $(".total").text("£" + Math.round(total * 100) / 100);
      });




      $("#color2").click(function () {
        if(shoe == 1){
        if(part == 1){
          var img = 'assets/custom/sobakov/sobakov_black_laces_2.png';
          $('#layer3').css("background-image", "url(" + img + ")");
          if(laces_added == 0){
            laces_added = 1;
            $('#anchor_extras').after('<tr id="extra_laces"><td>Extra Laces</td><td>£9.99</td></tr>');
            total += 9.99;
          }
        }else if(part == 2){
          var img = 'assets/custom/sobakov/sobakov_black_sole_2.png';
          $('#layer4').css("background-image", "url(" + img + ")");
          if(soles_added == 0){
            soles_added = 1;
            $('#anchor_extras').after('<tr id="extra_soles"><td>Extra Sole</td><td>£19.99</td></tr>');
            total += 19.99;
          }
        }else if(part == 3){
          var img = 'assets/custom/sobakov/sobakov_black_bars_2.png';
          $('#layer2').css("background-image", "url(" + img + ")");
          if(stripes_added == 0){
            stripes_added = 1;
            $('#anchor_extras').after('<tr id="extra_stripes"><td>Extra Stripes</td><td>£14.99</td></tr>');
            total += 14.99;
          }
        }
      }else if (shoe == 2){
        if(part == 1){
          var img = 'assets/custom/sobakov/sobakov2_pink_laces_2.png';
          $('#layer3').css("background-image", "url(" + img + ")");
          if(laces_added == 0){
            laces_added = 1;
            $('#anchor_extras').after('<tr id="extra_laces"><td>Extra Laces</td><td>£9.99</td></tr>');
            total += 9.99;
          }
        }else if(part == 2){
          var img = 'assets/custom/sobakov/sobakov2_pink_sole_2.png';
          $('#layer4').css("background-image", "url(" + img + ")");
          if(soles_added == 0){
            soles_added = 1;
            $('#anchor_extras').after('<tr id="extra_soles"><td>Extra Sole</td><td>£19.99</td></tr>');
            total += 19.99;
          }
        }else if(part == 3){
          var img = 'assets/custom/sobakov/sobakov2_pink_bars_2.png';
          $('#layer2').css("background-image", "url(" + img + ")");
          if(stripes_added == 0){
            stripes_added = 1;
            $('#anchor_extras').after('<tr id="extra_stripes"><td>Extra Stripes</td><td>£14.99</td></tr>');
            total += 14.99;
          }
        }
      }
      $(".total").text("£" + Math.round(total * 100) / 100);
      });




      $("#color3").click(function () {
        if(shoe == 1){
        if(part == 1){
          var img = 'assets/custom/sobakov/sobakov_black_laces_3.png';
          $('#layer3').css("background-image", "url(" + img + ")");
          if(laces_added == 1){
            laces_added = 0;
            total -= 9.99;
            $('#extra_laces').remove();
          }
        }else if(part == 2){
          var img = 'assets/custom/sobakov/sobakov_black_sole_3.png';
          $('#layer4').css("background-image", "url(" + img + ")");
          if(soles_added == 1){
            soles_added = 0;
            total -= 19.99;
            $('#extra_soles').remove();
          }
        }else if(part == 3){
          var img = 'assets/custom/sobakov/sobakov_black_bars_3.png';
          $('#layer2').css("background-image", "url(" + img + ")");
          if(stripes_added == 0){
            stripes_added = 1;
            $('#anchor_extras').after('<tr id="extra_stripes"><td>Extra Stripes</td><td>£14.99</td></tr>');
            total += 14.99;
          }
        }
      }else if (shoe == 2){
        if(part == 1){
          var img = 'assets/custom/sobakov/sobakov2_pink_laces_3.png';
          $('#layer3').css("background-image", "url(" + img + ")");
          if(laces_added == 0){
            laces_added = 1;
            $('#anchor_extras').after('<tr id="extra_laces"><td>Extra Laces</td><td>£9.99</td></tr>');
            total += 9.99;
          }
        }else if(part == 2){
          var img = 'assets/custom/sobakov/sobakov2_pink_sole_3.png';
          $('#layer4').css("background-image", "url(" + img + ")");
          if(soles_added == 0){
            soles_added = 1;
            $('#anchor_extras').after('<tr id="extra_soles"><td>Extra Sole</td><td>£19.99</td></tr>');
            total += 19.99;
          }
        }else if(part == 3){
          var img = 'assets/custom/sobakov/sobakov2_pink_bars_3.png';
          $('#layer2').css("background-image", "url(" + img + ")");
          if(stripes_added == 1){
            stripes_added = 0;
            total -= 14.99;
            $('#extra_stripes').remove();
          }
        }
      }
      $(".total").text("£" + Math.round(total * 100) / 100);
      });




      $("#color4").click(function () {
        if(shoe == 1){
        if(part == 1){
          var img = 'assets/custom/sobakov/sobakov_black_laces_4.png';
          $('#layer3').css("background-image", "url(" + img + ")");
          if(laces_added == 0){
            laces_added = 1;
            $('#anchor_extras').after('<tr id="extra_laces"><td>Extra Laces</td><td>£9.99</td></tr>');
            total += 9.99;
          }
        }else if(part == 2){
          var img = 'assets/custom/sobakov/sobakov_black_sole_4.png';
          $('#layer4').css("background-image", "url(" + img + ")");
          if(soles_added == 0){
            soles_added = 1;
            $('#anchor_extras').after('<tr id="extra_soles"><td>Extra Sole</td><td>£19.99</td></tr>');
            total += 19.99;
          }
        }else if(part == 3){
          var img = 'assets/custom/sobakov/sobakov_black_bars_4.png';
          $('#layer2').css("background-image", "url(" + img + ")");
          if(stripes_added == 0){
            stripes_added = 1;
            $('#anchor_extras').after('<tr id="extra_stripes"><td>Extra Stripes</td><td>£14.99</td></tr>');
            total += 14.99;
          }
        }
      }else if (shoe == 2){
        if(part == 1){
          var img = 'assets/custom/sobakov/sobakov2_pink_laces_4.png';
          $('#layer3').css("background-image", "url(" + img + ")");
          if(laces_added == 0){
            laces_added = 1;
            $('#anchor_extras').after('<tr id="extra_laces"><td>Extra Laces</td><td>£9.99</td></tr>');
            total += 9.99;
          }
        }else if(part == 2){
          var img = 'assets/custom/sobakov/sobakov2_pink_sole_4.png';
          $('#layer4').css("background-image", "url(" + img + ")");
          if(soles_added == 0){
            soles_added = 1;
            $('#anchor_extras').after('<tr id="extra_soles"><td>Extra Sole</td><td>£19.99</td></tr>');
            total += 19.99;
          }
        }else if(part == 3){
          var img = 'assets/custom/sobakov/sobakov2_pink_bars_4.png';
          $('#layer2').css("background-image", "url(" + img + ")");
          if(stripes_added == 0){
            stripes_added = 1;
            $('#anchor_extras').after('<tr id="extra_stripes"><td>Extra Stripes</td><td>£14.99</td></tr>');
            total += 14.99;
          }
        }
      }
      $(".total").text("£" + Math.round(total * 100) / 100);
      });



      // Part selection
      $("#laces").click(function () {
        part = 1;
      });
      $("#soles").click(function () {
        part = 2;
      });
      $("#straps").click(function () {
        part = 3;
      });



      // Shoe selection (and reset)
      $("#men").click(function () {
        shoe = 1;
        var img = 'assets/custom/sobakov/sobakov_black.jpg';
        $('#layer1').css("background-image", "url(" + img + ")");
        var img = 'assets/custom/sobakov/sobakov_black_bars.png';
        $('#layer2').css("background-image", "url(" + img + ")");
        var img = 'assets/custom/sobakov/sobakov_black_laces_3.png';
        $('#layer3').css("background-image", "url(" + img + ")");
        var img = 'assets/custom/sobakov/sobakov_black_sole_3.png';
        $('#layer4').css("background-image", "url(" + img + ")");
        $(".base").text("Base Sobakov Men");
        if(stripes_added == 1){
          stripes_added = 0;
          total -= 14.99;
          $('#extra_stripes').remove();
        }
        if(soles_added == 1){
          soles_added = 0;
          total -= 19.99;
          $('#extra_soles').remove();
        }
        if(laces_added == 1){
          laces_added = 0;
          total -= 9.99;
          $('#extra_laces').remove();
        }
        $(".total").text("£" + Math.round(total * 100) / 100);
      });
      $("#women").click(function () {
        shoe = 2;
        var img = 'assets/custom/sobakov/sobakov2_pink.jpg';
        $('#layer1').css("background-image", "url(" + img + ")");
        var img = 'assets/custom/sobakov/sobakov2_pink_bars_3.png';
        $('#layer2').css("background-image", "url(" + img + ")");
        var img = 'assets/custom/sobakov/sobakov2_pink_laces.png';
        $('#layer3').css("background-image", "url(" + img + ")");
        var img = 'assets/custom/sobakov/sobakov2_pink_sole.png';
        $('#layer4').css("background-image", "url(" + img + ")");
        $(".base").text("Base Sobakov Women");
        if(stripes_added == 1){
          stripes_added = 0;
          total -= 14.99;
          $('#extra_stripes').remove();
        }
        if(soles_added == 1){
          soles_added = 0;
          total -= 19.99;
          $('#extra_soles').remove();
        }
        if(laces_added == 1){
          laces_added = 0;
          total -= 9.99;
          $('#extra_laces').remove();
        }
        $(".total").text("£" + Math.round(total * 100) / 100);
      });



      // When reset button is pressed, the prices and shoe resets
      $(".reset_button").click(function () {
        var img = 'assets/custom/sobakov/sobakov_black.jpg';
        $('#layer1').css("background-image", "url(" + img + ")");
        var img = 'assets/custom/sobakov/sobakov_black_bars.png';
        $('#layer2').css("background-image", "url(" + img + ")");
        var img = 'assets/custom/sobakov/sobakov_black_laces_3.png';
        $('#layer3').css("background-image", "url(" + img + ")");
        var img = 'assets/custom/sobakov/sobakov_black_sole_3.png';
        $('#layer4').css("background-image", "url(" + img + ")");
        $(".base").text("Base Sobakov Men");
        if(stripes_added == 1){
          stripes_added = 0;
          total -= 14.99;
          $('#extra_stripes').remove();
        }
        if(soles_added == 1){
          soles_added = 0;
          total -= 19.99;
          $('#extra_soles').remove();
        }
        if(laces_added == 1){
          laces_added = 0;
          total -= 9.99;
          $('#extra_laces').remove();
        }
        $(".total").text("£" + Math.round(total * 100) / 100);
      });
});
