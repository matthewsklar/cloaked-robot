var card, $searchLinks = $("#searchBar tr td"), $name = $("#cardData");
var name, text, format, sets, cmc, power, toughness;
var items = [];

$.get("AllSets.json", function(data) {
    card = data;
    //alert(card.LEA.name);
});

function keyPressed() {
    var $name = $("#name"), $text = $("#text"), $format = $("#format"), $set = $("#set"), $cmc = $("#cmc");
    //var name, text, format, sets, cmc;
    $("#cardSelector").css("visibility", "visible");
    $.getJSON("AllSets.json", function(obj) {
        $.each(obj, function(key, value) {
            if ($text.val() !== "") {
                if ($text.val() == key) {
                    text = key;
                }
            }
            if ($format.val() !== "") {
                if ($format.val() == key) {
                    format = key;
                }
            }
            if ($set.val() !== "") {
                if ($set.val() == key) {
                    sets = key;
                    //$("#cardData").text();
                }
            }
            if ($cmc.val() !== "") {
                if ($cmc.val() == key) {
                    cmc = key;
                }
            }
            if ($name.val() !== "") {

            }
            if (key == sets || sets === null || sets === "") {
                for (var i = 0; i < value.cards.length; i++) {
                    var cData = value.cards[i];
                    items.push(cData.name);
                    if (cData.name.indexOf($name.val()) == -1 && $name.val() !== "") {
                        items.pop();
                    } else if (cData.cmc != $("#cmc").val() && $("#cmc").val() !== "") {
                        items.pop();
                    } else if (cData.power != $("#power").val() && $("#power").val() !== "") {
                        items.pop();
                    } else if (cData.toughness != $("#tough").val() && $("#tough").val() !== "") {
                        items.pop();
                    }
                    /* else if (cData.text.indexOf($text.val()) == -1 && $text.val() !== "") {
                        items.pop();
                    }*/
                    $("#cardData").text(items);
                }
                //$("#cardData").text(items);
                items = [];
            }            
        });
    });
    return false;
}