var friends = ['Kyle', 'Jacob', 'Will', 'Bryant', 'Jp'];
var locations = ['Loot Lake', 'Pleasant Park', 'Tilted Towers', 'Shifty Shafts', 'Fatal Fields', 'Retail Row', 'Salty Springs', 'Lonely Lodge', 'Tomato Temple', 'Wailing Woods'];
var weapons = ['pump shotgun', 'sniper rifle', 'desert eagle', 'submachine gun', 'assault rifle', 'burst rifle', 'pistol', 'slug shotgun', 'pickaxe', 'FN SCAR', 'minigun', 'revolver', 'crossbow', 'hunting rifle', 'grenade launcher', 'rocket launcher', 'grenade', 'stink bomb', 'tactical shotgun', 'trap'];

for (var i = 0; i < 100; i++) {

    var h3 = $('<h3>Accusation ' + [i] + ':</h3>');
    $('body').append(h3);

    var getMouseEvent = mouseEvent(h3);

    h3.mouseover(getMouseEvent);

    var getRandomAccusation = randomAccusation(i);

    h3.click(getRandomAccusation);

};

$('h3:first').text('Accusation 100:');
$('body').append($('h3:first'));
$('h3').css('background-color', 'grey');

function randomAccusation(i) {

    var randomFriend = friends[Math.floor(Math.random()*[i%5])];
    var randomLocation = locations[Math.floor(Math.random()*[i%10])];
    var randomWeapon = weapons[Math.floor(Math.random()*[i%20])];

    function displayAlert() {

        alert('Accusation ' + [i] + ': I accuse ' + randomFriend + ', with the ' + randomWeapon + ' at ' + randomLocation + '!');

    }
    return displayAlert;

}

function mouseEvent(h3) {
    
    function displayMouseEvent() {

        h3.mouseover(function() {
            h3.css('background-color', 'blue');
        });
    
        h3.mouseout(function() {
            h3.css('background-color', 'grey');
        });

    }
    return displayMouseEvent;

}