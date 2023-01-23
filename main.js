const slides = document.querySelectorAll('.slide');
const button = document.querySelectorAll('.btn');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
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
    console.log(i);
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
        }, 50000);
        next.addEventListener('click', () => {

            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });

            slides[i].classList.add('active');
            button[i].classList.add('active');
            console.log(i);
            i++
            if (slides.length == i) {
                i = 0;
            }
            if (i >= slides.length) {
                return;
            }
            console.log('After Slide', i);
        })
        prev.addEventListener('click', () => {
            
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });
            if(i != 1){
                i--;
            }
            button[i].classList.add('active');
            slides[i].classList.add('active');
            if (i == 1) {
                i = slides.length;
                console.log('after length', i);
            }

            console.log('Before Slide', i);

        })

    }
    repeater();
}
repeat()