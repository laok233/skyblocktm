const music = loadMusic("title3");

Events.on(ClientLoadEvent, e => {
    Vars.control.sound.title3.add(music);
});

