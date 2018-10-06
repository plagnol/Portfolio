var lineDrawing = anime({
    targets: '#lineDrawing .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'linear',
    direction: 'alternate',
    duration: 1250,
    delay: function(el, i) { return i * 85 },
    loop: false,
    complete: function (anim) {
        setTimeout(function(){
            $('#lineDrawing').fadeOut();
        }, 1650);
    }
});

var alternate = anime({
    delay: 2000,
    targets: '#plagnol .el',
    translateY: -500,
    backgroundColor: '#000000',
    scale: [
        {
            value: 19,
            delay: 2000,
            duration: 1500,
            easing: 'easeInOutQuart',
            loop: false
        },
        {
            value: 0.1,
            duration: 1000,
            easing: 'easeInOutQuart',
            loop: false
        }
    ],
    complete: function(){
        alertee();
    }

});




