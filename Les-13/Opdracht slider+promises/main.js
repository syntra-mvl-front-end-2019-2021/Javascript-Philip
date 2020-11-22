let imgArr = [
    'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=639&q=80',
    'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=612&q=80'
];

let container = document.querySelector('.container');
let slider = document.createElement('div');
// let item = document.createElement('div');
let prevbtn = document.createElement('button');
prevbtn.classList.add('hide');
let nextbtn = document.createElement('button');

let sliderInfo = {
    sliderElement: slider,
    currentSlide: 0,
};
console.log(sliderInfo.currentSlide);

function createSlider() {
    container.appendChild(slider);
    slider.classList.add('slider', 'hide');
    container.appendChild(prevbtn);
    container.appendChild(nextbtn);
    prevbtn.classList.add('prev-btn');
    nextbtn.classList.add('next-btn');
}

function getSliderItemWidth() {
    let itemW = document.querySelector('.item');
    return itemW.clientWidth;
}

function getShownItems() {
    let containerW = document.querySelector('.container');
    return Math.round(containerW.clientWidth / getSliderItemWidth());
}

function nextSlide() {
    sliderInfo.currentSlide++;
    setPosition();
    console.log(sliderInfo.currentSlide);
    if (sliderInfo.currentSlide > 0) {
        prevbtn.classList.remove('hide')
    };

    if (sliderInfo.currentSlide === slider.children.length - 1) {
        nextbtn.classList.add('hide');
    }
}

function previousSlide() {
    sliderInfo.currentSlide--;
    setPosition();
    console.log(sliderInfo.currentSlide);
    if (sliderInfo.currentSlide <= 0) {
        prevbtn.classList.add('hide');
    }
}

function windowResize() {
    setPosition();
}

function setPosition() {
    let itemWidth = getSliderItemWidth();
    sliderInfo.sliderElement.style.left =
        -1 * sliderInfo.currentSlide * itemWidth + 'px';
}

let promise1 = new Promise((resolve) => {
    let item1 = document.createElement('div');
    let img1 = document.createElement('img');
    slider.appendChild(item1);
    item1.appendChild(img1);
    item1.classList.add('item');
    img1.classList.add('image');
    img1.addEventListener('load', () => {
        resolve(img1);
    });
    img1.src = imgArr[0];
});

let promise2 = new Promise((resolve) => {
    let item2 = document.createElement('div');
    let img2 = document.createElement('img');
    slider.appendChild(item2);
    item2.appendChild(img2);
    item2.classList.add('item');
    img2.classList.add('image');
    img2.addEventListener('load', () => {
        resolve(img2);
    });
    img2.src = imgArr[1];
});

let promise3 = new Promise((resolve) => {
    let item3 = document.createElement('div');
    let img3 = document.createElement('img');
    slider.appendChild(item3);
    item3.appendChild(img3);
    item3.classList.add('item');
    img3.classList.add('image');
    img3.addEventListener('load', () => {
        resolve(img3);
    });
    img3.src = imgArr[2];
});


// console.log(promise1);
// console.log(promise2);
// console.log(promise3);


Promise.all([promise1, promise2, promise3]).then((messages) => {
    // console.log(messages);
    createSlider();
    slider.classList.remove('hide');
    console.log('All images have been loaded :)');
})
    .catch(() => {
        console.log('Images have not been loaded :(');
    })

prevbtn.addEventListener('click', previousSlide);
nextbtn.addEventListener('click', nextSlide);
window.addEventListener('resize', windowResize);




// let imgArr = [
//     'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
//     'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=639&q=80',
//     'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=612&q=80'
// ];

// let container = document.querySelector('.container');
// let slider = document.createElement('div');
// let item = document.createElement('div');
// let img = document.createElement('img');
// let prevbtn = document.createElement('button');
// let nextbtn = document.createElement('button');

// let sliderInfo = {
//     sliderElement: slider,
//     currentSlide: 0,
// };

// container.appendChild(slider);

// slider.classList.add('slider', 'hide');
// for (let i = 0; i < imgArr.length; i++) {
//     let item = document.createElement('div');
//     let img = document.createElement('img');
//     slider.appendChild(item);
//     item.classList.add('item');
//     item.appendChild(img);
//     img.classList.add('image');
//     img.src = imgArr[i];
// }

// container.appendChild(prevbtn);
// container.appendChild(nextbtn);
// prevbtn.classList.add('prev-btn');
// nextbtn.classList.add('next-btn');

// let arrayPromises = [];
// for (let i = 0; i < imgArr.length; i++) {
//     let promises = new Promise((resolve) => {
//         resolve(img.src = imgArr[i]);
//     });
//     arrayPromises.push(promises);
// }

// Promise.all(arrayPromises).then(() => {
//     slider.classList.remove('hide');
// }).catch(() => {
//     console.log("Loading images failed")
// })

// function getSliderItemWidth() {
//     let itemW = document.querySelector('.item');
//     return itemW.clientWidth;
// }

// function getShownItems() {
//     let containerW = document.querySelector('.container');
//     return Math.round(containerW.clientWidth / getSliderItemWidth());
// }

// function nextSlide() {
//     sliderInfo.currentSlide++;
//     setPosition();
// }

// function previousSlide() {
//     sliderInfo.currentSlide--;
//     setPosition();
// }

// function windowResize() {
//     setPosition();
// }

// function setPosition() {
//     let itemWidth = getSliderItemWidth();
//     sliderInfo.sliderElement.style.left =
//         -1 * sliderInfo.currentSlide * itemWidth + 'px';
// }

// prevbtn.addEventListener('click', previousSlide);
// nextbtn.addEventListener('click', nextSlide);
// window.addEventListener('resize', windowResize);