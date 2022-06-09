exports.set = () => {
  let dom = document.createElement("div");
  dom.setAttribute("id", "progress_speed");
  dom.classList.add("progress-box", "progress-hide");
  dom.innerHTML =
    '<div class="progress progress-speed-hide" id="progress_box_speed"><div class="speed" style="width:0%;background: #f2f3f5;transition: 0.2s;"></div></div>';
  document
    .getElementById("app")
    .insertBefore(dom, document.getElementById("app").firstChild);
  let Style = `
                .progress-box{
                  width: 100%;
                  height: 100%;
                  transition: 0.4s;
                  position: fixed;
                  top: 0;
                  left: 0;
                  background: rgba(0,0,0,0.5);
                  z-index:4002;
                }
                .progress {
                  border-radius: 19px;
                  background: #f2f3f5;
                  width: 80%;
                  height: 38px;
                  position: fixed;
                  top: calc(50% - 19px);
                  left: calc(50% - 40%);
                  z-index:2000;
                  transition: 0.4s;
                  opacity: 1;
                }
                .progress-hide{
                  border-radius: 19px;
                  width: 0%;
                  height: 0%;
                  top: calc(50% - 0%);
                  left: calc(50% - 0%);
                  transition: 0.2s;
                  overflow: hidden;
                }
                .progress-speed-hide{
                  width: 0%;
                  height: 0px;
                  transition: 0.6s;
                  opacity: 0;
                  overflow: hidden;
                }
                .speed {
                  border-radius: 19px;
                  background-image: -webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
                  background-image: -o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
                  background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
                  height: 38px;
                  -webkit-background-size: 40px 40px;
                  background-size: 40px 40px
                  width: 0%;
                  transition: 0.3s;
                  background-color:#409EFF;
                  -o-animation: progress-bar-stripes 2s linear infinite;
                  animation: progress-bar-stripes 2s linear infinite;
                }
                .speed-success{
                  width: 100%;
                  background-color: #67c23a;
                }
                @-webkit-keyframes progress-bar-stripes {
                    from {
                        background-position: 40px 0
                    }
                 
                    to {
                        background-position: 0 0
                    }
                }
                 
                @-o-keyframes progress-bar-stripes {
                    from {
                        background-position: 40px 0
                    }
                 
                    to {
                        background-position: 0 0
                    }
                }
                 
                @keyframes progress-bar-stripes {
                    from {
                        background-position: 40px 0
                    }
                 
                    to {
                        background-position: 0 0
                    }
                }`;
  let styleElement = document.getElementById("progress");
  if (!styleElement) {
    styleElement = document.createElement("style");
    styleElement.type = "text/css";
    styleElement.id = "progress";
    document.getElementsByTagName("head")[0].appendChild(styleElement);
    styleElement.appendChild(document.createTextNode(Style));
  }
};
