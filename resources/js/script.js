$(document).ready(function() {
   
    /*Waypoint to trigger sticky nav*/
    $('.js--section-features').waypoint(function(direction) {
        if(direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");            
        }            
    }, {
        offset: '200px;'
    });
    
    
    /*Scroll when clicking a button*/
    $(".js--scroll-to-plans").click(function() {
       $("html, body").animate({scrollTop: $(".section-signup").offset().top}, 1000) 
    });
    
    $(".js--scroll-to-features").click(function() {
       $("html, body").animate({scrollTop: $(".js--section-features").offset().top}, 1000) 
    });
    
    
    /*Scrolling animations*/
    $(".js--section-features").waypoint(function(direction) {
       $(".js--waypoint-scroll-animation").addClass("animated fadeIn");
    }, {
        offset: '50%;'
    });
    
    $(".js--howitworks").waypoint(function(direction) {
       $(".iPhone-img").addClass("animated fadeInUp");
    }, {
        offset: '50%;'
    });
    
    $(".js--signup").waypoint(function(direction) {
       $(".js--premium-plan").addClass("animated pulse");
    }, {
        offset: '40%;'
    });
    
    
    /*Mobile nav*/
    $(".mobile-nav-link").click(function() {
        if($(".mobile-nav").hasClass("ion-navicon-round")) {
            $(".mobile-nav").removeClass("ion-navicon-round");
            $(".mobile-nav").addClass("ion-close-round");
        } else {
            $(".mobile-nav").addClass("ion-navicon-round");
            $(".mobile-nav").removeClass("ion-close-round");
        }
        
        var nav = $(".js--main-nav");
        nav.slideToggle(200);
        
    });
    
    
    
    
    /*Smooth Scrolling,
    as seen in: https://css-tricks.com/snippets/jquery/smooth-scrolling/  */
      $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
    
    
    
    
    
});