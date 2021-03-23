document.querySelector('#menu-mobile').addEventListener('click', function(){
  document.querySelector('ul').style.transform = 'translateX(0)';
});

document.querySelector('#close-menu').addEventListener('click', function(){
  document.querySelector('ul').style.transform = 'translateX(-290px)';
});

