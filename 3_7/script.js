$(document).ready(function(){
    $('p').text('Змінений текст');
    $('#task1').addClass('highlight');
    $('li').addClass('list-item');
    $('.highlight').css('color', 'red');
    $('.list-item').css('background-color', 'lightgray');
    $('.highlight').slideDown(1000);
	$('#task1 p:last').text('Новий останній текст');
	$('<button>Видалити елементи з класом list-item</button>').appendTo('body').click(function(){
        $('.list-item').remove();
    });
});
