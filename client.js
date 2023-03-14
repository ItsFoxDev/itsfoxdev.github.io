console.log('Site made by FoxDev Studios');
let wm = document.createElement('img');
wm.src="https://itsfoxdev.github.io/logos/logo.svg";
wm.style.position="fixed";
wm.style.width="45px";
wm.style.height="45px";
wm.style.bottom="10px";
wm.style.left="10px";
wm.style.cursor="pointer";
wm.addEventListener("click", ofds);
document.body.appendChild(wm);
function ofds(){
  window.open('https://itsfoxdev.github.io', '_blank').focus();
}
