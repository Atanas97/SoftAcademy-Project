document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type: 'loop',
        padding: {
            right: '30rem',
            left: '30rem',
        }
    }).mount();
});

$(document).ready(function () {
    $('.demo').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

// //responsive splide
var windowWidth = document.body.offsetWidth;

if (windowWidth <= 800) {
    document.addEventListener('DOMContentLoaded', function () {
        new Splide('.splide', {
            type: 'loop',
            padding: {
                right: '0rem',
                left: '0rem',
            }
        }).mount();
    });
}
else if (windowWidth <= 1024) {
    document.addEventListener('DOMContentLoaded', function () {
        new Splide('.splide', {
            type: 'loop',
            padding: {
                right: '10rem',
                left: '10rem',
            }
        }).mount();
    });
}

//responsiveDropdown 

var responsiveBtn = document.getElementById('responsiveNavBtn')
var dropdownMenu = document.querySelector('.navbar ul');

responsiveBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('open');
});

function openHome() {
    var openHome = document.getElementById('darkMode');
    openHome.textContent('');
    openHome.classList.toggle('open');
}


//Search bar 
function openSearch(target) {
    var searchContainerElement = document.getElementById('search-container');

    if (searchContainerElement.classList.contains('open')) {
        searchContainerElement.classList.remove('open');

        var iconElement = target.getElementsByTagName('i')[0];
        iconElement.classList.remove('fa-times');
        iconElement.classList.add('fa-search');
    } else {
        searchContainerElement.classList.add('open');

        var iconElement = target.getElementsByTagName('i')[0];
        iconElement.classList.remove('fa-search');
        iconElement.classList.add('fa-times');
    }
}

//Youtube Video pop up
var openBtn = document.getElementById('openVideoBtn');
var overlay = document.querySelector('.youtubeOverly');
var closeBtn = document.getElementById('closeVideoBtn');
var pauseVid = document.getElementById('youtubeVid');

openBtn.addEventListener('click', function () {
    overlay.classList.add('active');
    openBtn.classList.add('active');
});

closeBtn.addEventListener('click', function () {
    overlay.classList.remove('active');
    openBtn.classList.remove('active');

});


//scroll to top button 
function scrollToTop() {
    var scrollBtn = document.getElementById('scroll-to-top');

    scrollBtn.addEventListener('click', function () {
        $('html').animate({ scrollTop: 0 })
    });
}
scrollToTop();

//Dark mode 
var darkModeButton2 = document.getElementsByTagName("body")[0];
var darkModeBg = document.querySelector('.backgroundImg');
var darkModeTopHeader = document.querySelector('.topHeader');
function darkMode() {
    darkModeButton2.classList.toggle('activeDarkMode')


    if (darkModeButton2.classList.contains('activeDarkMode')) {
        darkModeBg.classList.remove('backgroundImg');
        darkModeBg.classList.add('activeDarkModeBg');
        darkModeTopHeader.classList.add('activeDarkMode');
        responsiveBtn.classList.add('activeDarkMode');
    } else {
        darkModeBg.classList.remove('activeDarkModeBg');
        darkModeBg.classList.add('backgroundImg');
        darkModeTopHeader.classList.remove('activeDarkMode')
        darkModeTopHeader.classList.add('topHeader');
        responsiveBtn.classList.remove('activeDarkMode');
    }
}

