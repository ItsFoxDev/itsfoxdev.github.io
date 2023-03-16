console.log('Site made by FoxDev Studios');
let wm = document.createElement('img');
wm.src="https://itsfoxdev.github.io/logos/logo.svg";
wm.style.position="fixed";
wm.style.width="45px";
wm.style.height="45px";
wm.style.bottom="10px";
wm.style.left="10px";
wm.style.cursor="pointer";
wm.style.zIndex="25600";
wm.id="foxdevwm";
wm.style.transition="all .3s";
wm.addEventListener("click", ofds);
let wms = document.createElement('style');
wms.innerHTML="#foxdevwm:hover{scale:1.1;transform:translate(3px, -3px)}";
document.head.appendChild(wms);
document.body.appendChild(wm);
function ofds(){
  window.open('https://itsfoxdev.github.io', '_blank').focus();
}
