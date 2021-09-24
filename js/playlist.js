function Sample(name, file, key, volume = 1, isBgm = false) {
    this.name = name;
    this.file = file;
    this.key = key;
    this.volume = volume;
    this.isBgm = isBgm;
    this.channel = new Howl({
      src: ["audio/" + file + ".mp3"],
      loop: isBgm,
      volume: volume,
    });
  }
  
export let playlist = [
    new Sample("JESUS", "jesus", "KeyQ", 1.3),
    new Sample("RAPAZ", "rapaz", "KeyW"),
    new Sample("UEPAAA", "uepa", "KeyE", 0.8),
    new Sample("RATINHO", "ratinho", "KeyR", 0.8),
    new Sample("PARE!", "pare", "KeyT"),
    new Sample("VIIIXI", "vixi", "KeyY", 3),
    new Sample("IHAAAA", "irra", "KeyU", 1.8),
    new Sample("QUEISSO", "queisso", "KeyI", 1.5),
    new Sample("CAVALO", "cavalo", "KeyO"),
    new Sample("DANÇA", "danca", "KeyP"),
    new Sample("FAIL", "fail", "KeyA"),
    new Sample("RISADA", "risada", "KeyS"),
    new Sample("CARTOON", "cartoon", "KeyD"),
    new Sample("( ͡° ͜ʖ ͡°)", "yamete", "KeyF", 2),
    new Sample("BGM COMERCIAL", "vinheta", "KeyZ", 0.5, true),
    new Sample("BGM CHAVES", "bgm2", "KeyX", 1, true),
    new Sample("BGM BOA NOITE", "bgm3", "KeyC", 0.9, true),
    new Sample("BGM PEGADINHA", "bgm4", "KeyV", 1, true),
  ];