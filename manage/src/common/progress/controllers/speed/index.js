exports.run = (time) => {
  document.getElementById("progress_speed").classList.remove("progress-hide");
  time = time * 100;
  let dom = document.getElementById("progress_box_speed");
  dom.classList.remove("progress-speed-hide");
  dom.getElementsByClassName("speed")[0].classList.remove("speed-success");
  setTimeout(() => {
    dom
      .getElementsByClassName("speed")[0]
      .setAttribute("style", "width:" + time + "%");
  }, 10);
  if (time >= 100) {
    setTimeout(() => {
      dom.getElementsByClassName("speed")[0].classList.add("speed-success");
      dom
        .getElementsByClassName("speed")[0]
        .setAttribute("style", "width:100%");
      dom.classList.add("progress-speed-hide");
      setTimeout(() => {
        document
          .getElementById("progress_speed")
          .classList.add("progress-hide");
        dom
          .getElementsByClassName("speed")[0]
          .setAttribute("style", "width:0%");
      }, 900);
    }, 1000);
  }
};
