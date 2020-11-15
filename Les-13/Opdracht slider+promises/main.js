let imgArr = [
    'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=639&q=80',
    'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=612&q=80'
];

console.log(imgArr[0]);
console.log(imgArr[1]);
console.log(imgArr[2]);

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

let x = () => {
    let arr = [];
    for (let i = 1; i < imgArr.length; i++) {

        let promise = new Promise(() => {
            let newImg = item.cloneNode(true);
            slider.appendChild(newImg);
            img.setAttribute('src', imgArr[i]);
            return arr.push(promise);
        }

        )
    } console.log(arr);
}

Promise.all(x).then(() => {
    createContainer();
    // for (let i = 1; i < imgArr.length; i++) {
    //     let newImg = item.cloneNode(true);
    //     slider.appendChild(newImg);
    //     img.setAttribute('src', imgArr[i]);
    // }
}).catch(() => {
    console.log("Loading images failed")
})

function createContainer() {
    container.appendChild(slider);

    slider.classList.add('slider');
    slider.appendChild(item);

    item.classList.add('item');
    item.appendChild(img);

    img.classList.add('image');
    img.src = imgArr[0];

    container.appendChild(prevbtn);
    container.appendChild(nextbtn);
    prevbtn.classList.add('prev-btn');
    nextbtn.classList.add('next-btn');
}

function getSliderItemWidth() {
    return item.clientWidth;
}

function getShownItems() {
    return Math.round(slider.clientWidth / getSliderItemWidth());
}

function nextSlide() {
    const itemWidth = getSliderItemWidth();
    sliderInfo.currentSlide++;
    sliderInfo.sliderElement.style.left =
        -1 * sliderInfo.currentSlide * itemWidth + 'px';

    // console.log(sliderInfo.currentSlide);
    // console.log(sliderInfo.sliderElement);
    // console.log(itemWidth);

}

function previousSlide() {
    const itemWidth = getSliderItemWidth();
    sliderInfo.currentSlide--;
    sliderInfo.sliderElement.style.left =
        -1 * sliderInfo.currentSlide * itemWidth + 'px';

}

prevbtn.addEventListener('click', previousSlide);
nextbtn.addEventListener('click', nextSlide);