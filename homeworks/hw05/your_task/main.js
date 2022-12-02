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

    let tracksEndpoint = baseURL +"?";
    tracksEndpoint += "q=" + term + "&type=track";
    console.log(tracksEndpoint);

    document.querySelector('#tracks').innerHTML = "";

    const trackData = await fetch(tracksEndpoint).then(response => response.json());
    console.log(trackData);
    console.log(trackData[0]);

    // name of first track
    console.log(trackData[0].name);

    document.querySelector('#tracks').innerHTML = trackData[0].name;

    let counter = 0;
    while(counter < 5) {
    const template = `
    <section class="track-item preview" onclick ="playSong('${trackData[counter].id}')">
                        <img src="${trackData[counter].album.image_url}">
                        <i class="fas fa-play play-track" aria-hidden="true"></i>
                        <div class="label">
                            <h2>${trackData[counter].name}</h2>
                            <p>
                                ${trackData[counter].artist.name}
                            </p>
                        </div>
                    </section>
    `;

    document.querySelector('#tracks').insertAdjacentHTML('beforeend', template);
    counter++;
    }
    
}

function playSong(id) {
    // let id = '5y8d8RHvxb0KiTa9Nq0xWp';
    const template = `
    <iframe style="border-radius:12px" 
        src="https://open.spotify.com/embed/track/${id}?utm_source=generator" 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"></iframe>
        `;
    document.querySelector('#artist').innerHTML = template;

}


async function getAlbums (term) {

    let albumEndpoint = baseURL +"?";
    albumEndpoint += "q=" + term + "&type=album"
    console.log(albumEndpoint);

    const albumData = await fetch(albumEndpoint).then(response => response.json());
    console.log(albumData[0].name);
    console.log(albumData[0].image_url);

    document.querySelector('#albums').innerHTML = "";

    let counter = 0;
    while(counter < 5) {
    const template = `
    <section id="albums">
    <section class="album-card" id="${albumData[counter].id}">
        <div>
            <img src="${albumData[counter].image_url}">
            <h2>${albumData[counter].name}</h2>
            <div class="footer">
                <a href="${albumData[counter].spotify_url}" target="_blank">
                    view on spotify
                </a>
            </div>
        </div>
    </section>
    </section>
    `;

    document.querySelector('#albums').insertAdjacentHTML('beforeend', template);
    counter++;
    }


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