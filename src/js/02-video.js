import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Player('vimeo-player', {
    width: 640
});

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
    console.log(localStorage);
};

const parsedData = JSON.parse(localStorage.getItem('videoplayer-current-time'));
const currentTime = parsedData.seconds;
console.log(currentTime);

player.setCurrentTime(currentTime).then(function(seconds) {
    console.log(seconds);
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            console.log(error.name);
            break;
    }
});
