function goto(url){window.open(url, '_blank').focus()}
function addItem(name,desc,iurl,murl,icos){
  let adding = document.createElement('div');
  adding.classList.add('item');
  adding.innerHMTL = '<img class="thumb" src="https://github.com/ItsFoxDev/itsfoxdev.github.io/blob/main/res/creations/' + iurl + '.png?raw=true"></img><div class="popout"><span class="title">' + name + '</span><span class="desc">' + desc + '</span><span class="icos">' + icos + '</span></div>';
  adding.onclick='goto(' + murl + ')';
  /*adding.href=murl;
  adding.target="_blank"; /**/
   adding.addEventListener('click', function(){goto(murl)}); /**/
  
  let thumb = document.createElement('img');
  thumb.classList.add('thumb');
  thumb.src= "https://github.com/ItsFoxDev/itsfoxdev.github.io/blob/main/res/creations/" + iurl + ".png?raw=true"
  adding.appendChild(thumb);
  
  let popout = document.createElement('div');
  popout.classList.add('popout');
  
  let title = document.createElement('span');
  title.classList.add('title');
  title.innerHTML = name;
  popout.appendChild(title);
  
  let descr = document.createElement('span');
  descr.classList.add('desc');
  descr.innerHTML = desc;
  popout.appendChild(descr);
  
  let iconc = document.createElement('span');
  iconc.classList.add('icos');
  iconc.innerHTML = icos;
  popout.appendChild(iconc);
  
  adding.appendChild(popout);
  document.getElementById('items').appendChild(adding);
  console.log('✅ • Added item "' + name + '" to gallery');
}
function solo(name,desc,iurl,murl,i1,l1){let icons = '<i onclick="event.stopPropagation();goto(`' + l1 + '`)"class="' + i1 + '"></i>';addItem(name,desc,iurl,murl,icons);}
function duo(name,desc,iurl,murl,i1,l1,i2,l2){let icons = '<i onclick="event.stopPropagation();goto(`' + l1 + '`)"class="' + i1 + '"></i><i onclick="event.stopPropagation();goto(`' + l2 + '`)"class="' + i2 + '"></i>';addItem(name,desc,iurl,murl,icons);}
function trio(name,desc,iurl,murl,i1,l1,i2,l2,i3,l3){let icons = '<i onclick="event.stopPropagation();goto(`' + l1 + '`)"class="' + i1 + '"></i><i onclick="event.stopPropagation();goto(`' + l2 + '`)"class="' + i2 + '"></i><i onclick="event.stopPropagation();goto(`' + l3 + '`)"class="' + i3 + '"></i>';addItem(name,desc,iurl,murl,icons);}

duo('Auxilla','An online audio mixer','auxilla','https://itsfoxdev.github.io/proj/auxilla','fas fa-arrow-up-right-from-square','https://itsfoxdev.github.io/proj/auxilla','fas fa-code','https://scratch.mit.edu/projects/758502999/')
duo('Time Warp','An online time warp','timewarp','https://itsfoxdev.github.io/proj/timewarp','fas fa-arrow-up-right-from-square','https://itsfoxdev.github.io/proj/timewarp','fas fa-code','https://scratch.mit.edu/projects/706528790/')
solo('FoxTools','A Shortcuts multitool','foxtools-sc','https://www.icloud.com/shortcuts/b3287780ddf74736ac65e20f6569cf9a','fa-solid fa-cloud-arrow-down','https://www.icloud.com/shortcuts/b3287780ddf74736ac65e20f6569cf9a');
solo('Userscripts','Useful mini-scripts','userscripts','https://itsfoxdev.github.io/Userscripts/','fa-solid fa-arrow-down-to-line','https://itsfoxdev.github.io/Userscripts/');
duo('FoxClient','An Eaglercraft fork','foxclient','https://itsfoxdev.github.io/FoxClient/1.5/','fas fa-arrow-up-right-from-square','https://itsfoxdev.github.io/FoxClient/1.5/','fas fa-code','https://github.com/ItsFoxDev/itsfoxdev.github.io/tree/main/FoxClient/1.5/')
solo('fa-turbo','Fast Font Awesome','fa-turbo','https://github.com/ItsFoxDev/fa-turbo','fa-brands fa-github','https://github.com/ItsFoxDev/fa-turbo/');
solo('FoxCMD','A CLI for macOS','foxcmd','https://github.com/ItsFoxDev/FoxCMD','fa-brands fa-github','https://github.com/ItsFoxDev/FoxCMD/');
