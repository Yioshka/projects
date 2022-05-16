$(document).ready(function(){
    $('.documents>.document').hover(
        function(){
            $(this).toggleClass('hover');
            $('.hover>.document--hover').css('display', 'block');
        },
        function(){
            $('.hover>.document--hover').css('display', 'none');
            $(this).toggleClass('hover');
       }
    );
    $('.menu__button').click(
        function(){
            $('.menu-nav').toggleClass('none');
            $('.menu').toggleClass('margin-bottom');
        }
    );
})