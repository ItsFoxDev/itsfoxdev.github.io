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
  t=document.getElementById('maingrid');
  t.classList.remove('all','web','scpt','sc');
  t.classList.add(l);
  del=0;
  document.querySelectorAll('a['+l+']').forEach(function(b){
    b.classList.add('pre-glide');
    setTimeout(function(){
      b.classList.remove('pre-glide');
      b.classList.add('glide-up');
      setTimeout(function(){
        b.classList.remove('glide-up');
      },1000)
    },del)
    del=del+50
  })
}

function activateWindow(i){
  var m = document.querySelector('modal#'+i);
  if (!document.querySelector('modal#'+i+' > modalheader')){
    var mh = document.createElement('modalheader');
    var mi = document.createElement('div');
    mh.innerHTML='<div class="mhimg"><img src="'+m.getAttribute('icon')+'"></img><img class="mhiblur" src="'+m.getAttribute('icon')+'"></img></div><span>'+m.getAttribute('title')+'</span><button onclick="closeWindow();" class="mhclose">x</button>';
    m.prepend(mh);
    m.prepend(document.createElement('mspacer'));
  }
  m.classList.add('active');
  document.body.classList.add('modalactive');
}

function closeWindow(){
  document.querySelectorAll('modal.active').forEach(function(e){
    e.classList.remove('active');
  })
  document.body.classList.remove('modalactive');
}
document.body.appendChild(document.createElement('mbg'))





function sendFBo(){
  var te=document.getElementById('fbtype');
  var ee=document.getElementById('fbemail');
  var ce=document.getElementById('fbcontent');
  var sb=document.getElementById('fbsend');
  sb.innerHTML='<i class="fa-solid fa-spinner-third fa-spin"></i> Sending...'

  var t=te.value;
  var e=ee.value;
  var c=ce.value;
  fetch(
    "https://discord.com/api/webhooks/1134128638829264906/Kv2FaV8Zzi6PYfVwyoDJqh24G192I-28ZfjmMQh-XE7jlfauj_EyEDR0WXjb-cgt6evd",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: t+" "+"|"+" "+e,
        allowed_mentions: {
          parse: ["users", "roles"]
        },
        content:c
      })
    }
  ).then(response => {
    if (response.ok) {
      sb.innerHTML='<i class="fa-solid fa-check"></i> Sent!';
    } else {
      sb.innerHTML='<i class="fa-solid fa-xmark"></i> Error';
    }
    setTimeout(function(){
      sb.innerHTML='<i class="fa-solid fa-paper-plane-top"></i> Send';
      closeWindow();
      ce.value='';
      ee.value='';
    },1E3)
  })
  .catch(error => {
    sb.innerHTML='<i class="fa-solid fa-xmark"></i> Error, try again later';
  });
}

function sendFB(){
  var te=document.getElementById('fbtype');
  var ee=document.getElementById('fbemail');
  var ce=document.getElementById('fbcontent');
  var sb=document.getElementById('fbsend');
  sb.innerHTML='<i class="fa-solid fa-spinner-third fa-spin"></i> Sending...'

  var t=te.value;
  var e=ee.value;
  var c=ce.value;
  fetch(
    "https://discord.com/api/webhooks/1134128638829264906/Kv2FaV8Zzi6PYfVwyoDJqh24G192I-28ZfjmMQh-XE7jlfauj_EyEDR0WXjb-cgt6evd",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: t+" "+"|"+" "+e,
        allowed_mentions: {
          parse: ["users", "roles"]
        },
        content:c
      })
    }
  ).then(response => {
    if (response.ok) {
      sb.innerHTML='<i class="fa-solid fa-check"></i> Sent!';
    } else {
      sb.innerHTML='<i class="fa-solid fa-xmark"></i> Error';
    }
    setTimeout(function(){
      sb.innerHTML='<i class="fa-solid fa-paper-plane-top"></i> Send';
      closeWindow();
      ce.value='';
      ee.value='';
    },1E3)
  })
  .catch(error => {
    sb.innerHTML='<i class="fa-solid fa-xmark"></i> Error, try again later';
  });
}