const slides = document.querySelectorAll('.slide');
const button = document.querySelectorAll('.btn');
let currentSlide = 1;

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
    let i = 1;
    const repeater = () => {
        setTimeout(() => {

            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
              });

            slides[i].classList.add('active');
            button[i].classList.add('active');
            i++;

            if (slides.length == i) {
                i = 0;
            }
            if (i >= slides.length) {
                return;
            }
            repeater();
        }, 5000);
    }
    repeater();
}
repeat()