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

    $('.view-product__list').slick({
        slidesToShow: 6,
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
        $('.tab').removeClass('active');
        $(data_tab).addClass('active');        
        return false;
    });

    $('[toggle-class]').click(function(){

        $(this).toggleClass($(this).attr('toggle-class'));
        return false;
    })
/*
    $('.main-models__item').click(function(){
       $('.main-models__item').removeClass('active');
       $(this).addClass('active');
       return false;
    });*/


    setModelCircle = function() {
        //устанавливаем кружок-подложку
        model_active = $('.main-models__item.active');
        model_circle = $('.main-models__circle');
        if (model_active.length==1) {
            position = model_active.position();
            item_width = model_active.width();
            model_circle.addClass('active');
            model_circle.css({"left":position.left+item_width/2, "top": position.top-10});
        }
    }
    setModelCircle();

    model_item = $('.main-models__item');
    model_item.click(function() {

       if ($(this).hasClass('active')) {
           return;
       }
       model_item.removeClass('active');
       $(this).addClass('active');
       setModelCircle();
    });


    initAnimated = function() {
        $('.logo-box').addClass('animated');
    }
    initAnimated();


});

$(document).scroll(function(){

});
$(window).resize(function(){

});
