document.querySelectorAll('button').forEach((e) => {
  if (!e.classList.contains('ns')){
    var img = e.getAttribute('imgsrc');
    var txt = e.getAttribute('label');
    if (e.getAttribute('sublabel')){
      sl = e.getAttribute('sublabel');
      e.innerHTML='<div class="imgs"><img width="40" height="40" src="'+img+'"><img class="blur" width="40" height="40" src="'+img+'"></div><div class="txts"><span class="tmain">'+txt+'</span><span class="tsub">'+sl+'</span></span>';
    } else {
      e.innerHTML='<div class="imgs"><img width="40" height="40" src="'+img+'"><img class="blur" width="40" height="40" src="'+img+'"></div>'+txt;
    }
  }
});

function cc1(e,l){
  document.querySelectorAll('.ab1').forEach(function(f){f.classList.remove('ab1')})
  e.classList.add('ab1')
}