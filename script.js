function tagFilter(f,e){
  document.querySelector('tag.active').classList.remove('active');
  e.classList.add('active');
  var filtered = document.querySelectorAll('#tiles a');
  filtered.forEach(function(s){
    if (s.matches(f)){
      s.classList.remove('filtered');
    } else {
      s.classList.add('filtered');
    }
  })
}