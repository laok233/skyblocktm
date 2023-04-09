const music = loadMusic("title3.ogg");
Events.on(WorldLoadEvent, e => {
  Vars.control.sound.stop();
  music.stop();
  music.play();
});
