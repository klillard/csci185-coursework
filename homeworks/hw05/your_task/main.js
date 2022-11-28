const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getTracks (term) {
    // 1. create the url based on the search term
    // send off the request to spotify and save the data in a variable
    // display the tracks in a nice way

    let trackEndpoint = baseURL +"?";
    trackEndpoint += "q=" + term + "&type=track"
    console.log(trackEndpoint);

    const artistData = await fetch(trackEndpoint).then(response => response.json());
    console.log(artistData[0].name);

    document.querySelector('#track-section h1')
}
async function getAlbums (term) {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
}

async function getArtist (term) {

    let artistEndpoint = baseURL +"?";
    artistEndpoint += "q=" + term + "&type=artist"
    console.log(artistEndpoint);


    const artistData = await fetch(artistEndpoint).then(response => response.json());
    console.log(artistData[0].name);
    console.log(artistData[0].image_url);


        document.querySelector('#artist-section h1').innerHTML = artistData[0].name
        const html = `<img src=${artistData[0].image_url} />`;


        const artistCard = `
        <section class="artist-card" id="${artistData[0].id}">
        <div>
            <img src="${artistData[0].image_url}">
            <h2>${artistData[0].name}</h2>
            <div class="footer">
                <a href="${artistData[0].spotify_url}" target="_blank">
                    view on spotify
                </a>
            </div>
        </div>
    </section>`;
    document.querySelector('#artist').innerHTML = artistCard;
    // i give spotify the term i want "TWICE"
    // i use the fetch api to issue a query to the "artist endpoint"
    // i wait for spotify to gie me some data back
    // then when data comes back, display it in a nice way
    // console.log(`
    //     get artists from spotify based on the search term
    //     "${term}" and load the first artist into the #artist section 
    //     of the DOM...`);
}


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}