$(function(){
    $('.caret').on('click', function(){
        $('#position-menu-wrapper').toggle('slow');
        $('.menu-wrapper').find('li').on('click', function(){
            $('.text').html($(this).html());
            $('#position-menu-wrapper').hide();
            $('.town').val($(this).html());
        })
    })
});