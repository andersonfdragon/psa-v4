// Data-src conversion
function loadImages(){
  let imgLazyload = document.getElementsByTagName("img");
  let i;

   
  for(i = 0; i < imgLazyload.length; i++) {
    let src = imgLazyload[i].getAttribute('src');
    let datasrc = document.createAttribute('data-src');
    // console.log(src)

    if (!src.includes('.svg') && !src.includes('.jpg') && !src.includes('-principal-home-psicoalianza.webp')) {
      // let width = '426'
      // let height = '240'

      // imgLazyload[i].setAttribute("width", width)
      // imgLazyload[i].setAttribute("height", height)

      // imgLazyload[i].setAttribute('style', 'width:auto !important; height:auto !important; max-height:100% !important; max-width:100% !important;')
      datasrc.value = src;

      imgLazyload[i].setAttributeNode(datasrc);
      imgLazyload[i].removeAttribute('src');
  
      imgLazyload[i].className += " lazy";
      imgLazyload[i].className += " animation-opacity";
    }

  }
}
loadImages()

function lazyloadScript(){
  let script = document.createElement("script");
    script.async = true;
    script.src =
      "https://cdn.jsdelivr.net/npm/vanilla-lazyload@17.4.0/dist/lazyload.min.js";
    document.body.appendChild(script);
}
lazyloadScript()

function logElementEvent(eventName, element) {
  console.log(
    Date.now(),
    eventName,
    element.getAttribute("data-bg88da112-bg-hidpi=bg")
  );
}

function logElementEvent(eventName, element) {
  console.log(Date.now(), eventName, element.getAttribute("data-src"));
}

// let callback_enter = function (element) {
//   logElementEvent("🔑 ENTERED", element);
// };
// let callback_exit = function (element) {
//   logElementEvent("🚪 EXITED", element);
// };
// let callback_loading = function (element) {
//   logElementEvent("⌚ LOADING", element);
// };
let callback_loaded = function (element) {
  logElementEvent("👍 LOADED", element);
};
// let callback_error = function (element) {
//   logElementEvent("💀 ERROR", element);
//   element.src =
//     "https://via.placeholder.com/440x560/?text=Error+Placeholder";
// };
// let callback_finish = function () {
//   logElementEvent("✔️ FINISHED", document.documentElement);
// };
// let callback_cancel = function (element) {
//   logElementEvent("🔥 CANCEL", element);
// };

window.lazyLoadOptions = {
  threshold: 0,
  // Assign the callbacks defined above
  // callback_enter: callback_enter,
  // callback_exit: callback_exit,
  // callback_cancel: callback_cancel,
  // callback_loading: callback_loading,
  callback_loaded: callback_loaded
  // callback_error: callback_error,
  // callback_finish: callback_finish
};
window.addEventListener(
  "LazyLoad::Initialized",
  function (e) {
    console.log(e.detail.instance);
  },
  false
);