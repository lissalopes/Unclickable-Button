const myButton = document.getElementById('myButton');

const maxWidth = window.innerWidth - myButton.offsetWidth;
const maxHeight = window.innerHeight - myButton.offsetHeight;

myButton.addEventListener('mouseenter', function(event){
    myButton.style.left = Math.floor(Math.random() * maxWidth) + 'px';
    myButton.style.top = Math.floor(Math.random() * maxHeight) + 'px';
})