var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});
var swiper = new Swiper(".mySwiper2", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

});

var swiper = new Swiper(".mySwipergal", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});



window.onscroll = function() {
    myFunction()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}





let personCount = 1; 

function updatePersonCount() {
    const input = document.getElementById("personInput");
    const inputValue = parseInt(input.value);

    if (!isNaN(inputValue)) {
        personCount = inputValue;
    }
}

function increase() {
    updatePersonCount();
    personCount += 1;
    updateInput();
}

function decrease() {
    updatePersonCount();
    if (personCount > 1) {
        personCount -= 1;
    }
    updateInput();
}

function updateInput() {
    const input = document.getElementById("personInput");
    input.value = personCount + " person";
}


document.getElementById('dateInput').valueAsDate = new Date();




const a = document.getElementById('nav-signin-tab')
const b = document.getElementById('nav-login-tab')
const c = document.getElementById('loginbtn')
const d = document.getElementById('signinbtn')
a.addEventListener('click', function() {
    c.style.display = 'none'
    d.style.display = 'flex'
    d.classList.remove('d-none')
})
b.addEventListener('click', function() {
    c.style.display = 'flex'
    d.style.display = 'none'
})





function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}