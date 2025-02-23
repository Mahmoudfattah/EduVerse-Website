



let closeMenu=document.getElementById('closeMenu')
let openMenu=document.getElementById('openMenu')
let navLinks=document.getElementById('navLinks')
closeMenu.addEventListener('click', function(){
   
    navLinks.style.right= '-200px';
})
openMenu.addEventListener('click', function(){
   
    navLinks.style.right= '0';
})