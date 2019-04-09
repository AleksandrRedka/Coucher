$(document).ready(
    (function () {
        $('.wrapper_menu').click(
            function () {
                $('.menu').toggleClass('menu_open');
                $('body').toggleClass('body_hidden');
                $('.main_menu').toggleClass('main_menu_open');
                $('.view_bg').toggleClass('view_bg_active')
            }
        )
    })()
);
$(document).ready(
    (function () {
        $('.main_menu_list_item').click(
            function () {
                $('.menu').removeClass('menu_open');
                $('body').removeClass('body_hidden');
                $('.main_menu').removeClass('main_menu_open');
                $('.view_bg').removeClass('view_bg_active')
            }
        )
    })()
);
$(document).ready(
    (function () {
        $('.form_show').click(
            function () {
                $('body').addClass('body_hidden');
                $('.view_bg').addClass('view_bg_active')
                $('.wrapper_form').addClass('wrapper_form_open');
                $('.wrapper_menu').css('z-index','10');

            }
        );
        $('.form_close').click(
            function () {
                $('body').removeClass('body_hidden');
                $('.view_bg').removeClass('view_bg_active')
                $('.wrapper_form').removeClass('wrapper_form_open');
                $('.wrapper_menu').css('z-index','110');
                $('.form_title').css('display','block');
                $('.form').css('display','block');
                $('.thanks').css('display','none');
                $('.form_box').css('height','auto');
                $('.wrapper_video').removeClass('wrapper_video_open');
                $('.video_box').empty()
            }
        );
        $('.btn_form').click(
            function (e) {
                e.preventDefault();
                $('.form_box').css('height','65%');
                $('.form_title').css('display','none');
                $('.form').css('display','none');
                $('.thanks').css('display','block');
                setTimeout(function () {
                    $('body').removeClass('body_hidden');
                    $('.view_bg').removeClass('view_bg_active')
                    $('.wrapper_form').removeClass('wrapper_form_open');
                    $('.wrapper_menu').css('z-index','110');
                    $('.form_title').css('display','block');
                    $('.form').css('display','block');
                    $('.thanks').css('display','none');
                    $('.form_box').css('height','auto');
                },2000)
            }
        )
    })()
);
$(document).on('scroll', function () {
    let lengthScroll = $(document).scrollTop();
    if (lengthScroll > 650) {
        $('.header').css('background-color','rgba(159,159,159,0.7)');
        $('.button_up').css('opacity','1');
    } else {
        $('.header').css('background-color','')
        $('.button_up').css('opacity','0');
    }
});

$(document).ready(function () {
    $('.reviews_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        infinite: true,
        prevArrow: '<button class="slick-review slick-prev slick-reviews-prev "><img src="assets/img/svg/Group%2049.svg" alt=""></button>',
        nextArrow: '<button class="slick-review slick-next slick-reviews-next "><img src="assets/img/svg/Group%2050.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    infinite: true,
                    dots: true,
                },
            },


        ]
    });
});
(function () {
    $('.reviews_slider').on('init', function(event, slick){
        var height = 0;
            if ($(window).width() > '767'){
                $('.reviews_slider_info').each(function(){
                    var new_height = $(this).css('height');
                    new_height = parseInt(new_height, 10);
                    if(new_height > height){height = new_height}
                });
                $('.reviews_slider_info').css('height', height);
            };

    });

})();
(function () {
    $('.read_more-js').click(
        function () {
            $(this).siblings('.about_me_wrapper_text_view').toggleClass('about_me_text_open');
            var textLink = $('.read_more-js').text();
           if(textLink==='Читать...'){
               $('.read_more-js').text('Cкрыть');
               return
           };
           $('.read_more-js').text('Читать...')
    })
})();
(function () {
    $('.reviews_slider').on('init', function(event, slick){
        $('.slider-more-js').click(
            function () {
                $('.reviews_slider_info').children('.reviews_slider_info_text').toggleClass('show_text');
                $('.slick-list').css('height','130rem','outline','none');
                var textLink = $(this).text();
                console.log(textLink);
                if(textLink==='Читать...'){
                    $('.slider-more-js').text('Cкрыть');
                    return
                }else{
                    $('.slider-more-js').text('Читать...');
                    $('.slick-list').css('height','85rem','transition','500ms','outline','none');
                }
            })
    });
})();
(function () {
    var contentBox = $('.video_box');
    $('.video-js').click(
        function (e) {
            var clickElem = $(this).children('iframe');
            $('body').addClass('body_hidden');
            $('.view_bg').addClass('view_bg_active')
            $('.wrapper_video').addClass('wrapper_video_open');
            $('.wrapper_menu').css('z-index','10');
            var elementClone = clickElem.clone();
            contentBox.append(elementClone);
        }
    )
})();