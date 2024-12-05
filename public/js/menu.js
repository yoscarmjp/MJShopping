const btnMenu = document.querySelector('#btnMenu');
const menu = document.querySelector('#menu');
const downMenu = document.querySelector('#downMenu');

btnMenu.addEventListener("mouseover", (e) =>{
    menu.classList.remove('hidden');
    e.preventDefault();
});

btnMenu.addEventListener("mouseout", (e) =>{
    menu.classList.add('hidden');
    e.preventDefault();
});

menu.addEventListener("mouseover", (e) =>{
    menu.classList.remove('hidden');
    e.preventDefault();    
});
menu.addEventListener("mouseout", (e) =>{
    menu.classList.add('hidden');
    e.preventDefault();    
});

downMenu.addEventListener("mouseover", (e) =>{
    menu.classList.remove('hidden');
    e.preventDefault();    
});

downMenu.addEventListener("mouseout", (e) =>{
    menu.classList.add('hidden');
    e.preventDefault();    
});