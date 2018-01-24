$(function() {

    $('select.selectric').selectric({
        maxHeight: 210
    });
    $('.new-product__list').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        focusOnSelect: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    dots: true,
                }
            }
        ]
    });

    //переключение категорий каталога
    $('[data-list]').click(function(){
        $('[data-list]').removeClass('active');
        $(this).addClass('active');

        var data_list = $(this).attr('data-list');
        $('.category-list').removeClass('active');
        $('.category-list.'+data_list).addClass('active');
        return false;
    });

    //переключение вкладок с информацией
    $('[data-tab]').click(function(){
        $('[data-tab]').removeClass('active');
        $(this).addClass('active');

        var data_tab = $(this).attr('data-tab');
        $('.catalog-posts__tab').removeClass('active');
        $(data_tab).addClass('active');        
        return false;
    });


});

$(document).scroll(function(){

});
$(window).resize(function(){

});
