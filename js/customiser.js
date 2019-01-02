$(document).ready(function() {
      var part = 1;
      var shoe = 1;

      $("#color1").click(function () {
        if(shoe == 1){
        if(part == 1){
          var img = 'assets/custom/sobakov/sobakov_black_laces.png';
          $('#layer3').css("background-image", "url(" + img + ")");
        }else if(part == 2){
          var img = 'assets/custom/sobakov/sobakov_black_sole.png';
          $('#layer4').css("background-image", "url(" + img + ")");
        }else if(part == 3){
          var img = 'assets/custom/sobakov/sobakov_black_bars.png';
          $('#layer2').css("background-image", "url(" + img + ")");
        }
      }else if (shoe == 2){
          if(part == 1){
            var img = 'assets/custom/sobakov/sobakov2_pink_laces.png';
            $('#layer3').css("background-image", "url(" + img + ")");
          }else if(part == 2){
            var img = 'assets/custom/sobakov/sobakov2_pink_sole.png';
            $('#layer4').css("background-image", "url(" + img + ")");
          }else if(part == 3){
            var img = 'assets/custom/sobakov/sobakov2_pink_bars.png';
            $('#layer2').css("background-image", "url(" + img + ")");
          }
        }
      });




      $("#color2").click(function () {
        if(shoe == 1){
        if(part == 1){
          var img = 'assets/custom/sobakov/sobakov_black_laces_2.png';
          $('#layer3').css("background-image", "url(" + img + ")");
        }else if(part == 2){
          var img = 'assets/custom/sobakov/sobakov_black_sole_2.png';
          $('#layer4').css("background-image", "url(" + img + ")");
        }else if(part == 3){
          var img = 'assets/custom/sobakov/sobakov_black_bars_2.png';
          $('#layer2').css("background-image", "url(" + img + ")");
        }
      }else if (shoe == 2){
        if(part == 1){
          var img = 'assets/custom/sobakov/sobakov2_pink_laces_2.png';
          $('#layer3').css("background-image", "url(" + img + ")");
        }else if(part == 2){
          var img = 'assets/custom/sobakov/sobakov2_pink_sole_2.png';
          $('#layer4').css("background-image", "url(" + img + ")");
        }else if(part == 3){
          var img = 'assets/custom/sobakov/sobakov2_pink_bars_2.png';
          $('#layer2').css("background-image", "url(" + img + ")");
        }
      }
      });




      $("#color3").click(function () {
        if(shoe == 1){
        if(part == 1){
          var img = 'assets/custom/sobakov/sobakov_black_laces_3.png';
          $('#layer3').css("background-image", "url(" + img + ")");
        }else if(part == 2){
          var img = 'assets/custom/sobakov/sobakov_black_sole_3.png';
          $('#layer4').css("background-image", "url(" + img + ")");
        }else if(part == 3){
          var img = 'assets/custom/sobakov/sobakov_black_bars_3.png';
          $('#layer2').css("background-image", "url(" + img + ")");
        }
      }else if (shoe == 2){
        if(part == 1){
          var img = 'assets/custom/sobakov/sobakov2_pink_laces_3.png';
          $('#layer3').css("background-image", "url(" + img + ")");
        }else if(part == 2){
          var img = 'assets/custom/sobakov/sobakov2_pink_sole_3.png';
          $('#layer4').css("background-image", "url(" + img + ")");
        }else if(part == 3){
          var img = 'assets/custom/sobakov/sobakov2_pink_bars_3.png';
          $('#layer2').css("background-image", "url(" + img + ")");
        }
      }
      });




      $("#color4").click(function () {
        if(shoe == 1){
        if(part == 1){
          var img = 'assets/custom/sobakov/sobakov_black_laces_4.png';
          $('#layer3').css("background-image", "url(" + img + ")");
        }else if(part == 2){
          var img = 'assets/custom/sobakov/sobakov_black_sole_4.png';
          $('#layer4').css("background-image", "url(" + img + ")");
        }else if(part == 3){
          var img = 'assets/custom/sobakov/sobakov_black_bars_4.png';
          $('#layer2').css("background-image", "url(" + img + ")");
        }
      }else if (shoe == 2){
        if(part == 1){
          var img = 'assets/custom/sobakov/sobakov2_pink_laces_4.png';
          $('#layer3').css("background-image", "url(" + img + ")");
        }else if(part == 2){
          var img = 'assets/custom/sobakov/sobakov2_pink_sole_4.png';
          $('#layer4').css("background-image", "url(" + img + ")");
        }else if(part == 3){
          var img = 'assets/custom/sobakov/sobakov2_pink_bars_4.png';
          $('#layer2').css("background-image", "url(" + img + ")");
        }
      }
      });




      $("#laces").click(function () {
        part = 1;
      });
      $("#soles").click(function () {
        part = 2;
      });
      $("#straps").click(function () {
        part = 3;
      });


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
      });

});
