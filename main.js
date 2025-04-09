// Section 2
let currentSlide2 = 0;
const slides2 = document.querySelectorAll('#section2 .slide');
const prev2 = document.getElementById('prev1');
const next2 = document.getElementById('next1');

function showSlide2(index) {
    if (index < 0) {
        currentSlide2 = slides2.length - 1;
    } else if (index >= slides2.length) {
        currentSlide2 = 0;
    }
    slides2.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide2) {
            slide.classList.add('active');
        }
    });
}

prev2.addEventListener('click', () => {
    currentSlide2--;
    showSlide2(currentSlide2);
});

next2.addEventListener('click', () => {
    currentSlide2++;
    showSlide2(currentSlide2);
});

showSlide2(currentSlide2);

// Section 3 (Separate Navigation)
let currentSlide3 = 0;
const slides3 = document.querySelectorAll('#scetion3 .slide');
const prev3 = document.getElementById('prev2');
const next3 = document.getElementById('next2');

function showSlide3(index) {
    if (index < 0) {
        currentSlide3 = slides3.length - 1;
    } else if (index >= slides3.length) {
        currentSlide3 = 0;
    }
    slides3.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide3) {
            slide.classList.add('active');
        }
    });
}

prev3.addEventListener('click', () => {
    currentSlide3--;
    showSlide3(currentSlide3);
});

next3.addEventListener('click', () => {
    currentSlide3++;
    showSlide3(currentSlide3);
});

showSlide3(currentSlide3);
