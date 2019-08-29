$(document).ready(function () {

    /* Sticky Navbar */
    $('.js-Section-Features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky-navbar')
        } else {
            $('nav').removeClass('sticky-navbar')
        }
    }, {
        offset: "50px;"
    })
    /* End Of Sticky Navbar */

    /* Scroll Navigation by Buttons */

    $('.js-GoToPlans').click(function () {
        $('html,body').animate({
            scrollTop: $('.Signup-section').offset().top
        }, 1000);
    });

    $('.js-GoToFeatures').click(function () {
        $('html,body').animate({
            scrollTop: $('.Section-Features').offset().top
        }, 1000);
    });

    /* End of Scroll Navigation */

    /* Scroll Navigation by Navbar links */
    var scroll = new SmoothScroll('.header-nav li a', {
        speed: 1000,
    });
    /* End of Scroll Navigation */

    /* Animated effect when scrolling */
    $('.AM').waypoint(function (direction) {
        $('.AM').addClass('animated fadeIn');

    }, {
        offset: '50%'
    });

    $('.AM-1').waypoint(function (direction) {
        $('.AM-1').addClass('animated bounceOutLeft');

    }, {
        offset: '50%'
    });

    $('.AM-2').waypoint(function (direction) {
        $('.AM-2').addClass('animated rollIn');
    }, {
        offset: '50%'
    });


    $('.AM-3').waypoint(function (direction) {
        $('.AM-3').addClass('animated jackInTheBox');
    }, {
        offset: '50%'
    });


    $('.AM-4').waypoint(function (direction) {
        $('.AM-4').addClass('animated flip');
    }, {
        offset: '50%'
    });


    /* Mobile - Navigation */

    $('.Mobile-Nav').click(function () {
        var Nav = $('.header-nav');
        Nav.slideToggle(200);
        var icon = $('.Mobile-Nav i');
        if (icon.hasClass('fa-bars')) {
            icon.removeClass('fa-bars');
            icon.addClass('fa-times');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }
    });

});
