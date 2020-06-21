
      feather.replace();

      
		 $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('.form-inline').addClass('nav-search');
            }

            else {
                  $('.form-inline').removeClass('nav-search');
            }
      })
		 



// multisetep form


$(document).ready(function(){

var current_fs, next_fs, previous_fs; //fieldsets
var opacity;

$(".next").click(function(){

current_fs = $(this).parent();
next_fs = $(this).parent().next();

//Add Class Active
$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

//show the next fieldset
next_fs.show();
//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now) {
// for making fielset appear animation
opacity = 1 - now;

current_fs.css({
'display': 'none',
'position': 'relative'
});
next_fs.css({'opacity': opacity});
},
duration: 600
});
});

$(".previous").click(function(){

current_fs = $(this).parent();
previous_fs = $(this).parent().prev();

//Remove class active
$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

//show the previous fieldset
previous_fs.show();

//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now) {
// for making fielset appear animation
opacity = 1 - now;

current_fs.css({
'display': 'none',
'position': 'relative'
});
previous_fs.css({'opacity': opacity});
},
duration: 600
});
});

$('.radio-group .radio').click(function(){
$(this).parent().find('.radio').removeClass('selected');
$(this).addClass('selected');
});

$(".submit").click(function(){
return false;
})

});


// adding check box value  ammount


// $(document).ready(function() {
//       function updateSum() {
//         var total = 0;
//         $(".sum:checked").each(function(i, n) {total += parseInt($(n).val());})
//         $("#total").val(total);
//       }
//       // run the update on every checkbox change and on startup
//       $("input.sum").change(updateSum);
//       updateSum();
//   })



  window.onload=function(){
      var inputs = document.getElementsByClassName('sum'),
          total  = document.getElementById('payment-total');
      
       for (var i=0; i < inputs.length; i++) {
          inputs[i].onchange = function() {
              var add = this.value * (this.checked ? 1 : -1);
              total.innerHTML = parseFloat(total.innerHTML) + add
              var new_total = parseFloat(document.getElementById('input').value);
            console.log( new_total);
              document.getElementById('input').value= new_total  + add
          }
        }
      }

// slider

