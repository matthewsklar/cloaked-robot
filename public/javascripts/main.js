var scrollDistance = 152;
//var cardID = [];
//var cardN = 0;

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > scrollDistance) {
        $('.menu').addClass('fixed');
        $('.menu').addClass('fixedTopLeft');
        $('.logoTopDiv').addClass('fixed');
        $('.logoTopDiv').addClass('fixedTopLeft');        
        $('.logoTopDiv').width(76);
        $('.logoTopDiv').height(76);
        //$('.logoTop').addClass('logoTopAnimationUp');                
        $('.logoTop').width(76);
        $('.logoTop').height(76);
    } else {    
        $('.menu').removeClass('fixed');
        $('.logoTopDiv').removeClass('fixed');
        $('.logoTopDiv').removeClass('fixedTopLeft');        
        $('.logoTopDiv').width(128);
        $('.logoTopDiv').height(150);
        $('.logoTop').removeClass('logoTopAnimationUp');         
        $('.logoTop').width(128);
        $('.logoTop').height(150);        
    }
});

function DropDown(el) {
    this.dd = el;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        $('.wrapper-dropdown').mouseenter(function() {
            $(this).addClass('active');
            event.stopPropagation();
        });

        $('.wrapper-dropdown').mouseleave(function() {
            $(this).removeClass('active');
        });
    }
}

$(function() {
    var dd = new DropDown( $('#dd') );
});

/*$.getJSON("AllSets.json", function(data) {
    console.log(data);
    $("#test").attr('src', 'http://www.mtgimage.com/set/WWK/Island.jpg');
    document.getElementById("test").src = "http://www.mtgimage.com/set/WWK/Island.jpg";
    //window.location.href = "http://mtgimage.com/set/" + data.WWK.code + "/" + data.WWK.cards[31].imageName + ".jpg";
});*/

function createImgDisplay() {
    destroyImages();
    //cardID = [];
    //cardN = 0;
    var lines = $(".deckList").val().split("\n");
    var parent = document.getElementById("cardImg");
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        var number = line.split(' ');
        var card = line.split(number[0])[1].substr(1);
        if (!document.getElementById(card)) {
            var div = document.createElement("div");
            parent.appendChild(div);
            div.id = card;
            div.style.position = 'relative';
            div.style.display = 'inline';
            div.style.paddingRight = '176px';
            div.style.width = '176px';
            div.style.top = '0';
            div.style.height = 'auto';
            //cardID[cardN] = card;
            //cardN++;
            
        }
        var newParent = document.getElementById(card);
        for (var x = 0; x < parseInt(number); x++) {
            var img = document.createElement("img");
            newParent.appendChild(img);
            img.id = "cardImage";
            img.name = card.toLowerCase();
            img.style.height = '250px';
            img.style.position = 'absolute';
            //img.style.zIndex = ($("#" + card + " > img").length);
            //img.style.bottom = 230 * ($("#" + card + " > img").length - 1) + 'px';
            img.style.top =  25 * ($("#" + card + " > img").length - 1) + 'px';
            img.style.right = 0;
            img.src = "http://www.mtgimage.com/card/" + card + ".jpg";
        }
    }
}

function destroyImages() {
    var myNode = document.getElementById("cardImg");
    myNode.innerHTML = '';
}