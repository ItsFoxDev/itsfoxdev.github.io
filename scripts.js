document.querySelectorAll('button').forEach((e) => {
  var img = e.getAttribute('imgsrc');
  var txt = e.getAttribute('label');
  e.innerHTML='<div class="imgs"><img width="40" height="40" src="'+img+'"><img class="blur" width="40" height="40" src="'+img+'"></div>'+txt;
});