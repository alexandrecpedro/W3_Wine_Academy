$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },

        800:{
            items:3
        },
        
        1000:{
            items:4
        }
    }
})