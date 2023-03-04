$(document).ready(function () {

    $('.btn-open').click(function (e) {
        $('#cross').toggleClass(' -left-[30rem] left-0');
    });
    $('.btn-close').click(function (e) {
        $('#cross').toggleClass(' -left-[30rem] left-0');
    });

    $('.sm-nav-open').click(function (e) {
        $('#sm_nav').toggleClass(' -left-[54rem] left-0');
    });
    $('.sm-nav-close').click(function (e) {
        $('#sm_nav').toggleClass(' -left-[54rem] left-0');
    });
    // $('.btn_footer').click(function (e) {
    //     if ($('#footer_nav').hasClass('hidden')) {
    //         $('#footer_nav').removeClass('hidden');
    //     }
    //     else {
    //         $('#footer_nav').addClass('hidden');
    //     }
    // });

    // top-dropdown text-select
    $(".drp_menu").click(function (e) {
        let value = $(this).text();
        $("#drp_search").html(value);
    });


    // dropdown-function on hover
    $('.drp_icon_h').hover(function (e) {
        if ($(this).find('.drp_h').hasClass('hidden')) {
            $('.drp_h').addClass('hidden');
            $(this).find('.drp_h').removeClass('hidden');

        } else {
            $(this).find('.drp_h').addClass('hidden');
        }

    });

    // dropdown-function
    $('.drp_icon').click(function (e) {
        if ($(this).find('.drp').hasClass('hidden')) {
            $('.drp').addClass('hidden');
            $(this).find('.drp').removeClass('hidden');

        } else {
            $(this).find('.drp').addClass('hidden');
        }

    });

    // dropdown-function within dropdown
    $('.drp_icon_1').click(function (e) {
        if ($(this).find('.drp_1').hasClass('hidden')) {
            $('.drp').addClass('hidden');
            $(this).find('.drp_1').removeClass('hidden');
            // $(this).find('drp_1').addClass('hidden');

        } else {
            $(this).find('.drp_1').addClass('hidden');
        }

    });


    // dropdown-function on hover-dropdown
    $('.text_drp').hover(function (e) {
        if ($(this).find('.custom_drp').hasClass('hidden')) {
            $('.custom_drp').addClass('hidden');
            $(this).find('.custom_drp').removeClass('hidden');

        } else {
            $(this).find('.custom_drp').addClass('hidden');
        }

    });

    //  owl1 carousel buttons and button borders
    $('.btn_next').click(function (e) {
        $('.btn_prev').removeClass('border-[1px]');
        $(this).removeClass('border-transparent').addClass('border-green-900 border-[1px]');
        $('.owl1').trigger('next.owl.carousel');
    });
    $('.btn_prev').click(function (e) {
        $('.btn_next').removeClass('border-[1px]');
        $(this).removeClass('border-transparent').addClass('border-green-900 border-[1px]');
        $('.owl1').trigger('prev.owl.carousel');
    });

    //  owl3 carousel buttons
    $('.btn_next1').click(function (e) {
        $('.owl3').trigger('next.owl.carousel');
    });
    $('.btn_prev1').click(function (e) {
        $('.owl3').trigger('prev.owl.carousel');
    });

    //  owl4 carousel buttons
    $('.btn_next2').click(function (e) {
        $('.owl4').trigger('next.owl.carousel');
    });
    $('.btn_prev2').click(function (e) {
        $('.owl4').trigger('prev.owl.carousel');
    });

    //  owl5 carousel buttons
    $('.btn_next3').click(function (e) {
        $('.owl5').trigger('next.owl.carousel');
    });
    $('.btn_prev3').click(function (e) {
        $('.owl5').trigger('prev.owl.carousel');
    });

    //  owl5 carousel buttons
    $('.product_next').click(function (e) {
        $('.p-owl').trigger('next.owl.carousel');
    });
    $('.product_prev').click(function (e) {
        $('.p-owl').trigger('prev.owl.carousel');
    });

    // inpection page carousel >> review_carousel
    $('.review_next').click(function (e) {
        $('.review_carousel').trigger('next.owl.carousel');
    });
    $('.review_prev').click(function (e) {
        $('.review_carousel').trigger('prev.owl.carousel');
    });


    // product_page >> modal >> open
    $('#btn_modal').click(function (e) {
        $('#modal_body').fadeIn();
    });

    // product_page >> modal >> close
    $('#btn_close').click(function (e) {
        $('#modal_body').fadeOut()
    });

    // product_page >> modal >> open
    $('#beauty').click(function (e) {
        $('#modal_child').fadeIn();
    });

    // product_page >> modal >> close
    $('#close').click(function (e) {
        $('#modal_child').fadeOut();
    });


    // product inspection
    $('.img_review').click(function (e) {
        if ($('#main_img').hasClass('hidden')) {
            // $('#main_img').addClass('hidden');
            $('#main_img').removeClass('hidden').addClass();

        }
        else {
            $('#main_img').addClass('hidden');
        }
    });

    // $(".img_review").click(function (e) {
    //     let img_data = $(this).text();
    //     $("#main_img").html(img_data);
    //     // console.log(value);
    // });

    

});

//  nav-section carousel
$('.owl1').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    }
})

//  nav-section carousel
$('.owl2').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    }
})

// nav-bar carousel
$('.owl-nav1').owlCarousel({
    loop: false,
    margin: 10,
    responsiveClass: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 8,
        }

    }
})

// section no. 1 : carousel
$('.owl3').owlCarousel({
    loop: false,
    margin: 10,
    responsiveClass: true,
    nav: false,
    dots: false,
    slideby: 5,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 8,
        }

    }
})

// section no. 2 : carousel
$('.owl4').owlCarousel({
    loop: false,
    margin: 10,
    responsiveClass: true,
    nav: false,
    dots: false,
    slideby: 5,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 6,
        }

    }
})

// section no. 5 : carousel
$('.owl5').owlCarousel({
    loop: false,
    margin: 10,
    responsiveClass: true,
    nav: false,
    dots: false,
    slideby: 5,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 6,
        }

    }
})

// section no. 6 : carousel
$('.owl6').owlCarousel({
    loop: false,
    margin: 10,
    responsiveClass: true,
    nav: false,
    dots: false,
    slideby: 5,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 6,
        }

    }
})

// section no. 7 : carousel
$('.owl7').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: false,
    dots: false,
    slideby: 5,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 6,
        }

    }
})

// Product's page : carousel
$('.p-owl').owlCarousel({
    loop: false,
    mouseDrag: false,
    margin: 10,
    responsiveClass: true,
    nav: false,
    dots: false,
    slideby: 5,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 9,
        },
        1200: {
            items: 11,
        },
        1440: {
            items: 15,
        },
        1840: {
            items: 20,
        },
        2400: {
            items: 35
        }

    }
})

// Product's page : carousel
$('.review_carousel').owlCarousel({
    loop: true,
    mouseDrag: false,
    margin: 10,
    responsiveClass: true,
    nav: false,
    dots: false,
    slideby: 5,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 5,
        },
        1200: {
            items: 7
        }

    }
})