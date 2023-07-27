function sendFB(e){
  e.disabled=true;
  e.innerHTML='<i class="fas fa-spinner-third fa-spin"></i>';
  setTimeout(function(){
    e.innerHTML='<i class="fas fa-check"></i>';
  },2000)
  setTimeout(function(){
    closeFeedback();
    send();
    e.innerHTML='Send! <i style="margin-left:5px" class="fas fa-paper-plane-top"></i>';
    e.disabled=false;
  },3000)
}
function send(){
  var feedback=document.getElementById('feedback').value;
  var fbtype=document.getElementById('fbtype').value;
  fetch(
    "https://discord.com/api/webhooks/1134128638829264906/Kv2FaV8Zzi6PYfVwyoDJqh24G192I-28ZfjmMQh-XE7jlfauj_EyEDR0WXjb-cgt6evd",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: fbtype,
        allowed_mentions: {
          parse: ["users", "roles"]
        },
        content:feedback
      })
    }
  )
}
function modeSwitch(m){
  var r=document.getElementsByTagName('html')[0];
  if (m==="light"){
    r.classList.add('light');
  } else {
    r.classList.remove('light');
  }
}
function openFeedback(){
  document.getElementById('feedback').value=null;
  var w=document.getElementById('fbwindow');
  var c=document.getElementById('fbcont');
  c.style.display="flex";
  setTimeout(function(){
    w.style.scale=1;
    c.style.backdropFilter=null;
    c.style.opacity=1;
  },1);
}
function closeFeedback(){
  var w=document.getElementById('fbwindow');
  var c=document.getElementById('fbcont');
  w.style.scale=0;
  c.style.backdropFilter=null;
  c.style.opacity=0;
  setTimeout(function(){
    c.style.display="none";
  },200);
}