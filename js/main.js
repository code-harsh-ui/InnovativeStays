jQuery(document).ready(function ($) {

    'use strict';
    $(".Modern-Slider").slick({
        autoplay: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: false,
        fade: true,
        pauseOnDotsHover: false,
        cssEase: 'linear',
        // fade:true,
        draggable: false,
        prevArrow: '<button class="PrevArrow"></button>',
        nextArrow: '<button class="NextArrow"></button>',
    });

    $('#nav-toggle').on('click', function (event) {
        event.preventDefault();
        $('#main-nav').toggleClass("open");
    });


    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs a').click(function (e) {
        e.preventDefault();
        var $this = $(this),
            tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();

    })



    $(".box-video").click(function () {
        $('iframe', this)[0].src += "&amp;autoplay=1";
        $(this).addClass('open');
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    })



    var contentSection = $('.content-section, .main-banner');
    var navigation = $('nav');

    //when a nav link is clicked, smooth scroll to the section

    // navigation.on('click', 'a', function (event) {
    //     event.preventDefault(); //prevents previous event
    //     smoothScroll($(this.hash));
    // });

    //update navigation on scroll...
    $(window).on('scroll', function () {
        updateNavigation();
    })
    //...and when the page starts
    updateNavigation();

    function updateNavigation() {
        contentSection.each(function () {
            var sectionName = $(this).attr('id');
            var navigationMatch = $('nav a[href="#' + sectionName + '"]');
            if (($(this).offset().top - $(window).height() / 2 < $(window).scrollTop()) &&
                ($(this).offset().top + $(this).height() - $(window).height() / 2 > $(window).scrollTop())) {
                navigationMatch.addClass('active-section');
            }
            else {
                navigationMatch.removeClass('active-section');
            }
        });
    }

    // function smoothScroll(target) {
    //     $('body,html').animate({
    //         scrollTop: target.offset().top
    //     }, 800);
    // }


    $('.button a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 0 }, 500, 'linear');
    });




});

// Book now Button

const links = document.querySelectorAll('.villa-links')
links.forEach((item) => {
    item.addEventListener("click", () => {
        let el = document.getElementById(item.getAttribute('data-link'));
        el.scrollIntoView({ block: "center" })
    })

});


// Navigation ul toggle

$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});




// Date pickers
$(function () {
    $('#datepicker').datepicker({
        startDate: '-0m'
        //endDate: '+2d'
    }).on('changeDate', function (ev) {
        $('#sDate1').text($('#datepicker').data('date'));
        $('#datepicker').datepicker('hide');
    });

})

$(function () {
    $('#datepicker_two').datepicker({
        startDate: '-0m'
        //endDate: '+2d'
    }).on('changeDate', function (ev) {
        $('#sDate1').text($('#datepicker_two').data('date'));
        $('#datepicker_two').datepicker('hide');
    });

});

// Slick Carousel

$(function () {
    $('.tm-slideshow').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });


});


// Accordion

const btns = document.querySelectorAll(".acc-btn");

function accordion() {
    const content = this.nextElementSibling;

    const isOpen = this.classList.contains("is-open");

    // Close all accordions
    btns.forEach((btn) => {
        btn.classList.remove("is-open");
        btn.nextElementSibling.style.maxHeight = null;
    });

    // Open the clicked accordion if it was previously closed
    if (!isOpen) {
        this.classList.add("is-open");
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

// Event listeners
btns.forEach((el) => el.addEventListener("click", accordion));

// Open the first accordion by default
if (btns.length > 1) {
    btns[1].click();
}

// Booking Form

function whatsapp() {
    var name = $('#name').val();
    var phone = $('#phone').val();
    var villa = $('#villa').val();
    var size = $('#size').val();
    var guest = $('#guest').val();
    var range = $('#range').val();
    var children = $('#children').val();
    var datepicker = $('#datepicker').val();
    var datepicker_two = $('#datepicker_two').val();
    var pets = $('#pets').val();

    var url = "https://wa.me/+918355936182?text="
        + "*Query from (www.innovativestays.com)* " + "%0a"
        + "*Name :* " + name + "%0a"
        + "*Phone :* " + phone + "%0a"
        + "*Villa :* " + villa + "%0a"
        + "*Check-In :* " + datepicker + "%0a"
        + "*Check-Out :* " + datepicker_two + "%0a"
        + "*BHK :* " + size + "%0a"
        + "*Range :* " + range + "%0a"
        + "*Children :* " + children + "%0a"
        + "*Guests :* " + guest + "%0a"
        + "*Pets :* " + pets;

    window.open(url, '_blank').focus();
}