const slides = document.querySelectorAll('.slide');
const slide = document.querySelector('.slide');
const button = document.querySelectorAll('.btn');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let currentSlide = 1;

// Bottom Navigation

const manualNavigation = (manual) => {
    slides.forEach(slide => {
        slide.classList.remove('active');
        button.forEach(btn => {
            btn.classList.remove('active');
        })
    })
    slides[manual].classList.add('active')
    button[manual].classList.add('active')
}


button.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        manualNavigation(index);
        currentSlide = index;
    })
})




const repeat = () => {
    const active = document.getElementsByClassName('active');

    let i = 0;

    // Side Navigation

    next.addEventListener('click', () => {

        [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active');
        });

        i++
        if (slides.length == i) {
            i = 0;
        }

        slides[i].classList.add('active');
        button[i].classList.add('active');

        if (i >= slides.length) {
            return;
        }

    });

    prev.addEventListener('click', () => {

        [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active');
        });

        if (i == 0) {
            i = slides.length;
        }

        i--;

        button[i].classList.add('active');
        slides[i].classList.add('active');

    })

    // Automatic Transition

    const repeater = () => {
        setTimeout(() => {

            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });

            i++;
            if (slides.length == i) {
                i = 0;
            }
            slides[i].classList.add('active');
            button[i].classList.add('active');

            if (i >= slides.length) {
                return;
            }

            repeater();

        }, 10000);
    }
    repeater();
}
repeat()