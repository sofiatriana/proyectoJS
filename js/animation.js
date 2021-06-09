
// loaded page
$(window).on("load", function(){
    const preload = $('.display-preload')
    preload.fadeOut('slow'); 
}) 

// SVG
$(".imgSlide").slideUp(1000).slideDown(1000);

// typed animation
let typed = new Typed(".typing", {
    strings: ["Conscientes","Ecológicas", "Seguras"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

