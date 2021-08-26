import {removeClass, getCurrentDisplaySample, updateDisplaySample, updateDisplayBgm , populateSampleList, releaseSampleBtn} from "./dom-manipulator.js";
import { playlist } from "./playlist.js";

export const acceptedKeys = {};

playlist.forEach(function (sample) {
  acceptedKeys[sample.key] = () => {
    document.getElementById(`sample-shot-${sample.file}`).click();
  };
  populateSampleList(sample);
});

export const playSong = (filename) => {
  let sample = playlist.find((song) => song.file == filename);

  releaseSampleBtn(sample);
  if (sample.isBgm) {
    togglePlayStop(sample);
  } else {
    resetSample(sample);
    playSample(sample);
    updateDisplaySample(
      `${sample.file}.mp3`,
      sample.channel._duration.toFixed(2)
    );
  }
};


export const resetSample = (sample) => {
  sample.channel.stop();
  sample.isBgm &&
    removeClass(
      document.getElementById(`sample-shot-${sample.file}`),
      "js-active-btn"
    );
  sample.isBgm && updateDisplayBgm();

  getCurrentDisplaySample() == `${sample.file}.mp3` && updateDisplaySample();
};


export const togglePlayStop = (sample) => {
  sample.channel.playing() ? resetSample(sample) : playSample(sample);
};

export const playSample = (sample) => {
  sample.isBgm && toggleBGMs(sample.file);
  sample.channel.play();
  sample.isBgm && updateDisplayBgm(sample.name);
};

export const toggleBGMs = (BGM) => {
  console.log("resetou");
  playlist.forEach(function (sample) {
    if (sample.isBgm) {
      BGM != sample.file && resetSample(sample);
    }
  });
};
