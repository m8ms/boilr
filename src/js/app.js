require('../sass/main.scss');

let div = document.createElement('div');
div.innerText = 'Works!';
document.querySelector('#app') && document.querySelector('#app').appendChild(div);
