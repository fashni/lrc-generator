// It's a purpose of bringing songs from YouTube's music playlist all at once
// Open the Chrome console window, copy the code, and run it in the following url => *://music.youtube.com/playlist*
const renderers = document.querySelectorAll('#contents ytmusic-responsive-list-item-renderer');
let text = ''

renderers.forEach(renderer => {
    const titleElement = renderer.querySelector('div.title-column.style-scope.ytmusic-responsive-list-item-renderer > yt-formatted-string > a');
    const title = titleElement ? titleElement.textContent : '';

    const artistElement = renderer.querySelector('div.secondary-flex-columns.style-scope.ytmusic-responsive-list-item-renderer > yt-formatted-string:nth-child(1) > a');
    let artist = artistElement ? artistElement.textContent : '';
    artist = artist.split('•')[0].trim();

    if (title && artist) {
        text += `${artist},${title}\n`
    }
});

// copy consoleLog and paste it on example_input.txt
console.log(text);