var elemSt = $('.start');
// Для проверки 1-я ф-ция должна быть закоментирована
// $(document).ready(function () {
//     console.log( 'Привет, рад видеть ! Анимация подключена !' );
//     elemSt.addClass('show myAnimation slideInDown');
//
// });
$('#switch').click(function () {
    $('body').addClass('content');
    elemSt.removeClass('show');
    $('.technic').addClass('show');
    $('.header').addClass('show');
    $('.about').addClass('show');
    $('.footer').addClass('show');
});
$('.me').click(function () {
    $('section[class !=".about"]').removeClass('show');
    $('.about').addClass('show');
});
$('.path').click(function () {
    $('section[class !=".career"]').removeClass('show');
    $('.career').addClass('show');
});
$('.portf').click(function () {
    $('section[class !=".portfolio"]').removeClass('show');
    $('.portfolio').addClass('show');
});

