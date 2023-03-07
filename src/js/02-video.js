import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const savedTime = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(savedTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });

player.on(
  'timeupdate',
  throttle(currentTime => {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(currentTime.seconds)
    );
  }, 1000)
);
