$(document).ready(function(){
    
$(".fadein").hide()



$(window).on("scroll",function(){
    let y = $(this).scrollTop();
    console.log(y);
    if(y > 600){
    $(".fadein").each(function(i){
        $(this).delay(500*i).fadeIn(1000);
    })
}
});




});

