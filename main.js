let parent = document.querySelector('.parent')
let input = document.querySelector('.text-user'),
max_length = input.getAttribute('maxlength');
let count = document.querySelector('.clicked .count');
let botton_tweet = document.querySelector('.clicked button');
let porgress = document.querySelector('.porgress');
count.innerHTML = max_length;
let countList = document.querySelector('.countList');


input.addEventListener('input', () =>{
    count.innerHTML = max_length - input.value.length;
    count.innerHTML == 0 ? count.style.color = 'red' : count.style.color = 'black';
    5 <= input.value.length ? botton_tweet.classList.add('active') : botton_tweet.classList.remove('active');
    porgress.style.width = `${(input.value.length * 100) / max_length}%`;
    count.innerHTML == 0 ? parent.classList.add('anm'): parent.classList.remove('anm');
})
input.onclick = () =>  countList.style.cssText = 'display: none';

botton_tweet.onclick = _ =>{
    countList.style.cssText = 'top: 265px; z-index: 1'
    let words = input.value.split(' ').length;
    let letters = input.value.length;
    document.querySelector('.word').innerHTML = words;
    document.querySelector('.char').innerHTML = letters;
}

