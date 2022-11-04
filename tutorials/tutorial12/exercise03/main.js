const restaurants = [
    "Suwana's Thai Orchid", 
    "Khao Thai Cuisine", 
    "Little Bee Thai", 
    "PIE.ZAA Pizza", 
    "Fahrenheit Pizza & Brewhouse", 
    "Fresh Wood Fired Pizza West", 
    "Wasabi", 
    "Red Ginger Dimsum And Tapas", 
    "Murasaki Asheville"
];

let counter = 0;
while (counter < restaurants.length) {
    // document.querySelector('#output').innerHTML += restaurants[counter] + "<br>";
    // const template = `<p>${restaurants[i]}</p>`;
    
    document.querySelector('#output').innerHTML += restaurants[counter] + "<br>";
    counter++;
}
