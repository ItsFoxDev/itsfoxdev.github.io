function redir(u){
  document.getElementById('wipe').style.height='100vh';
  setTimeout(function(){document.location.href=u},300);
}
function addMC(o){
  o.addEventListener('auxclick', function(e) {
    if (e.button == 1) {
      alert("middle button clicked")
    }
  })
}
let tiles = document.querySelectorAll('div.tile[url]');
tiles.forEach(element => addMC(element));


const trailer = document.getElementById("trailer");
const animateTrailer = (e) => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
  
  const keyframes = {
    transform: `translate(${x}px, ${y}px)`
  }
  trailer.animate(keyframes, { 
    duration: 10000, 
    fill: "forwards" 
  });
}
window.onmousemove = e => {
  animateTrailer(e);
}

function checkURL() {
	if (window.location.href.includes('#launcher')){
    document.getElementById('app-launcher').style.scale="1";
    document.getElementById('app-launcher').style.height=null;
    document.getElementById('app-home').style.scale="0";
    document.getElementById('app-home').style.height="0px";
    document.querySelector('a[href="#launcher"]').classList.add('selected');
    document.querySelector('a[href="#home"]').classList.remove('selected');
    document.title="Launcher";
  } else {
    document.getElementById('app-launcher').style.scale="0";
    document.getElementById('app-launcher').style.height="0px";
    document.getElementById('app-home').style.scale="1";
    document.getElementById('app-home').style.height=null;
    document.querySelector('a[href="#launcher"]').classList.remove('selected');
    document.querySelector('a[href="#home"]').classList.add('selected');
    document.title="FoxDev";
  }
}
checkURL();
window.addEventListener('popstate', function(){checkURL()});