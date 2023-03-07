import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const savedTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(savedTime);

player.on(
  'timeupdate',
  throttle(currentTime => {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(currentTime.seconds)
    );
  }, 1000)
);
