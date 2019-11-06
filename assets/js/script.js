$(document).ready(function(){
  $('#bVert').click(function(){
    $('.block').css('background-color','green');
  });
  $('#bColor').click(function(){
    $('.block').css('background-color' , 'blue');
  });
  $('#bDispa').click(function(){
    $('.block').hide();
  });
  $('#bAppa').click(function(){
    $('.block').show();
});
$('#bTaille').click(function(){
  var px;
  px = $('.block').height();
  if(px == 100){
    $('.block').css('height','10px')
  }
  else{
    px += 10;
    $('.block').css('height',px);
  }
});
});
