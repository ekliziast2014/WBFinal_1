var elem = $('.start');
$(document).ready(function () {
    console.log( 'Привет, рад видеть ! Анимация подключена !' );
    elem.addClass('show myAnimation slideInDown');

});
$('#switch').click(function () {
    console.log( 'KKKK' );
    $('body').addClass('content');
    elem.removeClass('show');
    $('.about').addClass('show');
    $('.footer').addClass('show');

});

/*
$('#switch').click(function () {
    console.log( 'KKKK' );
    $('body').addClass('content');
    $('start').style.display = "none";
});
*/
