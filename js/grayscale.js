/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
$(".navbar-fixed-top").removeClass("gradient-box");
$(document).ready(function() {
    $(".client-icon").text("TEST IF WORKS");
    if ($(".navbar").offset().top > 90) {
        $(".navbar-fixed-top").addClass("top-nav-collapse").addClass("gradient-box");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse").removeClass("gradient-box");
    }
});


// jQuery to collapse the navbar on scroll
var animateDone = false;
$(window).scroll(function() {

    var y_scroll_pos = window.pageYOffset;
    var scrollPos_sect1 = 250;
    var scrollPos_sect2 = 1350;
    var pre_scrol_post = 1;

    if ($(".navbar").offset().top > 90) {
        $(".navbar-fixed-top").addClass("top-nav-collapse").addClass("gradient-box");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse").removeClass("gradient-box");
    }

//slide-in code// TODO: CONVERT TO WHILE+SWITCH ----------------------------------------
    if (y_scroll_pos > pre_scrol_post && animateDone == false) {
        $(".img-trans-out").animate({marginLeft:'150px'},140);
        $("#img-trans-in-1").addClass("animatedd");
        $("#img-trans-in-2").addClass("animatedd");
        animateDone = true;
    }

    if (y_scroll_pos > scrollPos_sect1 ) {
        $("#img-trans-in-1.img-trans-out.animatedd").animate({marginLeft:'0px'},750);
        $("#img-trans-in-1").removeClass("animatedd");
    }

    if (y_scroll_pos > scrollPos_sect2 ) {
        $("#img-trans-in-2.img-trans-out.animatedd").animate({marginLeft:'0px'},750);
        $("#img-trans-in-2").removeClass("animatedd");
    }   
    else {

    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
/*$(".img-trans-in").addClass("img-trans-before");
var animateStatus = false;
$(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 250;
    var pre_scrol_post = 50;

    if (y_scroll_pos > pre_scrol_post && animateStatus == false) {
        $(".img-trans-in").animate({marginLeft:"80px"},125);
    }
    // set to whatever you want it to be
    if(y_scroll_pos > scroll_pos_test && animateStatus == false) {
       $(".img-trans-in").animate({marginLeft:"0px"},725);
       //$(".img-trans-in").removeClass("img-trans-before");
       animateStatus = true;
    }
    else {
        
    }
});*/
$(window).scroll(function() {
    
});
// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(39.993021, -105.090509), // Lafayette CO

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(39.993021, -105.090509);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });

    var Marker2 = string;
        
}
