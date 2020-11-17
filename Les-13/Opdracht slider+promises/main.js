let imgArr = [
    'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=639&q=80',
    'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=612&q=80'
];

let container = document.querySelector('.container');
let slider = document.createElement('div');
let item = document.createElement('div');
let img = document.createElement('img');
let prevbtn = document.createElement('button');
let nextbtn = document.createElement('button');

let sliderInfo = {
    sliderElement: slider,
    currentSlide: 0,
};

container.appendChild(slider);

slider.classList.add('slider', 'hide');
for (let i = 0; i < imgArr.length; i++) {
    let item = document.createElement('div');
    let img = document.createElement('img');
    slider.appendChild(item);
    item.classList.add('item');
    item.appendChild(img);
    img.classList.add('image');
    img.src = imgArr[i];
}

container.appendChild(prevbtn);
container.appendChild(nextbtn);
prevbtn.classList.add('prev-btn');
nextbtn.classList.add('next-btn');

let arrayPromises = [];
for (let i = 0; i < imgArr.length; i++) {
    let promises = new Promise((resolve) => {
        resolve(img.src = imgArr[i]);
    });
    arrayPromises.push(promises);
}

Promise.all(arrayPromises).then(() => {
    slider.classList.remove('hide');
}).catch(() => {
    console.log("Loading images failed")
})

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
}

function previousSlide() {
    sliderInfo.currentSlide--;
    setPosition();
}

function windowResize() {
    setPosition();
}

function setPosition() {
    let itemWidth = getSliderItemWidth();
    sliderInfo.sliderElement.style.left =
        -1 * sliderInfo.currentSlide * itemWidth + 'px';
}

prevbtn.addEventListener('click', previousSlide);
nextbtn.addEventListener('click', nextSlide);
window.addEventListener('resize', windowResize);
