$(document).ready(function() {
    $('.p2 li').click(function() {
        console.log($(this))
        $('.p2 li').removeClass('active');
        $(this).addClass('active');
    });
});