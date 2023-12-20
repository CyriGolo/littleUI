let theme = document.querySelectorAll('.color');
let paths = document.querySelectorAll('path')
for(let i = 0; i < theme.length; i++) {
  theme[i].style.backgroundColor=theme[i].id;
  theme[i].addEventListener('click', ()=>{
    document.querySelector('.selected').className="color"
    theme[i].className = "color selected"
    for (let j = 0; j < paths.length; j++) {
      paths[j].setAttribute('fill', theme[i].id);
    }
    paths[6].setAttribute('fill', "white");
    paths[7].setAttribute('fill', "white");
    paths[8].setAttribute('fill', "white");
    document.getElementById('progress').style.backgroundColor = theme[i].id;
    document.querySelector('body').style="display: flex; justify-content: center; background: radial-gradient(circle, "+theme[i].id+" 10%, transparent 12%); background-size: 2em 2em; background-color: #010001;"
  })
}