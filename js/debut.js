//LANCEMENT DU SITE

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
        menu();
    }

});

function menuReset(){

    $('#menuBase').html(" <div>\n" +
        "        <div class=\"text-center\">\n" +
        "            <div class=\"row\">\n" +
        "                <div class=\"col-12 text-center\">\n" +
        "                    <div class=\"rond rond-center\" id=\"rond1\" onclick=\"launchProjet()\">\n" +
        "                        <p class=\"menuTitre\">PROJETS</p>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"col-5 text-right\">\n" +
        "                    <div class=\"rond rond-left\" id=\"rond2\" onclick=\"launchExp()\">\n" +
        "                        <p class=\"menuTitre\">EXPERIENCES</p>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"col-2 text-center\" id=\"centre\">\n" +
        "                    MENU PRINCIPAL\n" +
        "                </div>\n" +
        "                <div class=\"col-5 text-left\">\n" +
        "                    <div class=\"rond\" id=\"rond3\">\n" +
        "                        <p class=\"menuTitre\">A PROPOS</p>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"col-12 text-center\">\n" +
        "                    <div class=\"rond rond-center\" id=\"rond4\">\n" +
        "                        <p class=\"menuTitre\">CONTACT</p>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>");
}
//MENU START
function menu(){
    $('#menuBase').fadeIn();
}


//START PROJECT
function launchProjet(){
    var cssProperties = anime({
        targets: '#rond1',
        opacity: .5,
        backgroundColor: '#6D071A',
        borderRadius: ['0%', '50%'],
        easing: 'easeInOutQuad',
        translateY: -800,
        duration: 1000,
        complete: function(){
            $('#menuBase').css('display','none');
            $('#projet').fadeIn();
        }
    });

    var cssProperties = anime({
        targets: '#rond2',
        opacity: 0,
        easing: 'easeInOutQuad',
        translateX: 375,
        duration: 1000
    });
    var cssProperties = anime({
        targets: '#rond3',
        opacity: 0,
        easing: 'easeInOutQuad',
        translateX: -375,
        duration: 1000
    });
    var cssProperties = anime({
        targets: '#rond4',
        opacity: 0,
        easing: 'easeInOutQuad',
        translateY: -100,
        duration: 1000
    });
}

function retourMenu(){
    var cssProperties = anime({
        targets: '#rondProjet',
        opacity: .5,
        backgroundColor: '#6D071A',
        borderRadius: ['0%', '50%'],
        easing: 'easeInOutQuad',
        translateY: 250,
        duration: 500,
        complete: function(){
            $('#projet').css('display','none');
            menuReset();
            menu();
        }
    });
}

function launchExp(){
    var cssProperties = anime({
        targets: '#rond1',
        opacity: 0,
        easing: 'easeInOutQuad',
        translateY: 100,
        duration: 1000
    });

    var cssProperties = anime({
        targets: '#rond2',
        opacity: 0,
        easing: 'easeInOutQuad',
        backgroundColor: '#6D071A',
        borderRadius: ['0%', '50%'],
        translateX: -800,
        duration: 1000
    });
    var cssProperties = anime({
        targets: '#rond3',
        opacity: 0,
        easing: 'easeInOutQuad',
        translateX: -375,
        duration: 1000
    });
    var cssProperties = anime({
        targets: '#rond4',
        opacity: 0,
        easing: 'easeInOutQuad',
        translateY: -100,
        duration: 1000
    });
}


