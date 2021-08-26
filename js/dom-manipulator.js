function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}

export function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += " " + cls;
}

export function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
    ele.className = ele.className.replace(reg, " ");
  }
}

export function releaseSampleBtn(sample) {
  let sampleBtn = document.getElementById(`sample-shot-${sample.file}`);

  addClass(sampleBtn, "js-active-btn");
  !sample.isBgm &&
    window.setTimeout(function () {
      removeClass(sampleBtn, "js-active-btn");

      updateDisplaySample();
    }, sample.channel._duration * 1000);
}

export function getCurrentDisplaySample() {
  return document.getElementById("sample-name").innerHTML.toLocaleLowerCase();
}

export function updateDisplayBgm(sample = "none") {
  document.getElementById("bgm-name").innerHTML = sample;
}

export function updateDisplaySample(sample = "NONE", duration = "0") {
  document.getElementById("sample-name").innerHTML = sample;
  document.getElementById("sample-duration").innerHTML = duration;
}

export function populateSampleList(sample) {
  const parent = document.getElementById("sampleList");

  const newChild = `<div class="col-lg-2 col-3 text-center p-0">
                    <button class="btn-ireplay" id="sample-shot-${sample.file}" onclick="playSong('${sample.file}')">${sample.key.slice(-1)}</button>
                        <p class="sample-description">${sample.name}</p>
                </div>`;
  parent.insertAdjacentHTML("beforeend", newChild);
}
