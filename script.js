let mode = document.getElementById('mode');
let body = document.querySelector('body');

mode.addEventListener('click', () => {
    mode.classList.toggle('dark')
    body.classList.toggle('dark')
})