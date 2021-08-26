
import {playSong, acceptedKeys} from './sample-controls.js';

document.addEventListener(
  "keydown",
  (event) => {
    let playFunction = acceptedKeys[event.code];

    if (playFunction) {
      playFunction();
    }
  },
  false
);

window.playSong = playSong
