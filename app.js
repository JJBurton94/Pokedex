const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
const input = document.querySelector('#num');
const btn = document.querySelector('#btn');
const form = document.querySelector('form');
const img = document.querySelector('img');
const h3 = document.querySelector('h3');
const randBtn = document.querySelector('#btn2');


btn.addEventListener('click', function(){
    const num = document.querySelector('input').value;
    const searchURL = `${baseURL}${num}`
    fetch(searchURL)
    .then(res =>{
        console.log('resolved', res);
        return res.json()
        .then((data => {
            const name = data.name;
            const sprite = data.sprites.front_default;
            console.log(name, sprite)
            const imgSrc = sprite;
            img.setAttribute('src', imgSrc);
            h3.innerText = `#${num} ${name}`;
        }))
    })
    .catch((e) =>{
        alert('Invalid Number. Please choose from 1-1017');
    });
    
    form.reset()
});
randBtn.addEventListener('click', function(){

    const randNum = Math.floor(Math.random() * 1017);
    const searchURL = `${baseURL}${randNum}`
    fetch(searchURL)
    .then(res =>{
        console.log('resolved', res);
        return res.json()
        .then((data => {
            const name = data.name;
            const sprite = data.sprites.front_default;
            console.log(name, sprite)
            const imgSrc = sprite;
            img.setAttribute('src', imgSrc);
            h3.innerText = `#${randNum} ${name}`;
        }))
    })
    .catch((e) =>{
        alert('Invalid Number. Please choose from 1-1017');
    });
    
    form.reset()
});

