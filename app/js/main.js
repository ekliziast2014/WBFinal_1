var elem = $('.start');
$(document).ready(function () {
    console.log( 'Привет, рад видеть ! Анимация подключена !' );
    elem.addClass('myAnimation');
    elem.addClass('slideInDown');
});
$('#switch').click(function () {
    console.log( 'KKKK' );
    $('body').addClass('content');
    elem.addClass('hide');
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
