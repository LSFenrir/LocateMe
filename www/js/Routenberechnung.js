// Dropup menu changes value depending on chosen route
$(function(){
  $('.dropdown-menu>li').click(function(el){
   $('#dropdownMenu2').text(el.target.text);
  });
});
