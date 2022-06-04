$(document).ready(function(){
    $(".flter__tag").click(function(e) {
        $(".flter__tag").removeClass('active');
        $(this).addClass('active');
        var tag = $(this).attr('value');
        if(tag == "All"){
            $('.project').show("500");
          } else{
            $('.project').not("."+tag).hide("500");
            $('.project').filter("."+tag).show("500");
          }
        }
    )    
  });