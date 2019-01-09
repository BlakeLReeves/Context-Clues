let friends = ['Kyle', 'Jacob', 'Will', 'Bryant', 'Jp'];
let locations = ['Loot Lake', 'Pleasant Park', 'Tilted Towers', 'Shifty Shafts', 'Fatal Fields', 'Retail Row', 'Salty Springs', 'Lonely Lodge', 'Tomato Temple', 'Wailing Woods'];
let weapons = ['pump shotgun', 'sniper rifle', 'desert eagle', 'submachine gun', 'assault rifle', 'burst rifle', 'pistol', 'slug shotgun', 'pickaxe', 'FN SCAR', 'minigun', 'revolver', 'crossbow', 'hunting rifle', 'grenade launcher', 'rocket launcher', 'grenade', 'stink bomb', 'tactical shotgun', 'trap'];

for (var i = 0; i < 20; i++) {
    console.log(friends[i%5]);
    console.log(locations[i%10]);
    console.log(weapons[i]);
}