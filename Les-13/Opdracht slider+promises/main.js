let containerSlider = document.querySelector('.container');
let imgArr = ['dog1', 'dog2', 'dog3'];

let divImg = document.createElement('div');
containerSlider.appendChild(divImg);
divImg.classList.add('div-img');

let img = document.createElement('img');
divImg.appendChild(img);


// img.style.height = '200px';
img.setAttribute('src', 'dog1.jpg');
img.classList.add('image');

// function randomImages() {
//     let randomImg = imgArr[Math.floor(Math.random() * imgArr.length)];
//     img.setAttribute('src', randomImg + '.jpg');

// }

let prevbtn = document.createElement('button');
let nextbtn = document.createElement('button');
divImg.appendChild(prevbtn);
divImg.appendChild(nextbtn);
prevbtn.classList.add('prev-btn');
nextbtn.classList.add('next-btn');