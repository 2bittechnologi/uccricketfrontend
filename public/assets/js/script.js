{/* // Toggle mobile menu */ }
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const body = document.body;

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    body.classList.toggle('no-scroll');
});



// more

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// header-dropdown js -----------------------------------------------------------------

// // Dropdown Toggle
// document.getElementById("drop-series-trigger").addEventListener("click", () => {
//     const dropSlider = document.getElementById("drop-series-slider");
//     dropSlider.classList.toggle("hidden");
// });

// const dropSlider = document.getElementById("drop-slider");
// const dropSliderPrev = document.getElementById("drop-slider-prev");
// const dropSliderNext = document.getElementById("drop-slider-next");

// let dropScrollAmount = 0;

// // Handle slider navigation
// dropSliderPrev.addEventListener("click", () => {
//     dropScrollAmount -= 150; // Adjust scroll distance
//     dropSlider.scrollTo({
//         left: dropScrollAmount,
//         behavior: "smooth",
//     });
// });

// dropSliderNext.addEventListener("click", () => {
//     dropScrollAmount += 150; // Adjust scroll distance
//     dropSlider.scrollTo({
//         left: dropScrollAmount,
//         behavior: "smooth",
//     });
// });


// document.addEventListener("DOMContentLoaded", () => {
//     // Your code here
//     document.getElementById("drop-series-trigger").addEventListener("click", () => {
//         const dropSlider = document.getElementById("drop-series-slider");
//         dropSlider.classList.toggle("hidden");
//     });

//     const dropSlider = document.getElementById("drop-slider");
//     const dropSliderPrev = document.getElementById("drop-slider-prev");
//     const dropSliderNext = document.getElementById("drop-slider-next");

//     let dropScrollAmount = 0;

//     // Handle slider navigation
//     dropSliderPrev.addEventListener("click", () => {
//         dropScrollAmount -= 150; // Adjust scroll distance
//         dropSlider.scrollTo({
//             left: dropScrollAmount,
//             behavior: "smooth",
//         });
//     });

//     dropSliderNext.addEventListener("click", () => {
//         dropScrollAmount += 150; // Adjust scroll distance
//         dropSlider.scrollTo({
//             left: dropScrollAmount,
//             behavior: "smooth",
//         });
//     });
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const slider = document.getElementById('drop-series-slider');
//     const prevButton = document.getElementById('drop-slider-prev');
//     const nextButton = document.getElementById('drop-slider-next');

//     if (slider && prevButton && nextButton) {
//         const scrollStep = 150;

//         prevButton.addEventListener('click', () => {
//             slider.scrollBy({ left: -scrollStep, behavior: 'smooth' });
//         });

//         nextButton.addEventListener('click', () => {
//             slider.scrollBy({ left: scrollStep, behavior: 'smooth' });
//         });
//     } else {
//         console.error('Slider or buttons not found in the DOM.');
//     }
// });

{/* // header-dropdown js ----------------------------------------------------------------- */ }



// countdown


(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60;

    // Select all countdowns
    const countdowns = document.querySelectorAll(".countdown");

    countdowns.forEach(countdown => {
        let remainingTime = parseInt(countdown.getAttribute("data-time")); // Fetch starting time in seconds

        const hoursElem = countdown.querySelector(".hours"),
            minutesElem = countdown.querySelector(".minutes"),
            secondsElem = countdown.querySelector(".seconds");

        const x = setInterval(function () {
            if (remainingTime > 0) {
                const hours = Math.floor(remainingTime / (60 * 60)),
                    minutes = Math.floor((remainingTime % (60 * 60)) / 60),
                    seconds = remainingTime % 60;

                hoursElem.innerText = hours.toString().padStart(2, "0");
                minutesElem.innerText = minutes.toString().padStart(2, "0");
                secondsElem.innerText = seconds.toString().padStart(2, "0");

                remainingTime--; // Decrease remaining time
            } else {
                clearInterval(x);
                countdown.innerHTML = "Time's Up!";
            }
        }, 1000);
    });
}());



{/* // **************************************************************** */ }


// const slider = document.getElementById('slider');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');
// const dots = document.querySelectorAll('.dot');

// let currentSlide = 0;
// const totalSlides = document.querySelectorAll('#matchCard').length;

// // Function to update the slider position
// function updateSlider() {
//     slider.style.transform = `translateX(-${currentSlide * 33.33}%)`;

//     // Update dots
//     dots.forEach((dot, index) => {
//         dot.classList.toggle('active', index === currentSlide);
//     });

//     // Enable/Disable buttons
//     prevBtn.disabled = currentSlide === 0;
//     nextBtn.disabled = currentSlide === totalSlides - 1;
// }

// // Navigation Buttons
// prevBtn.addEventListener('click', () => {
//     if (currentSlide > 0) {
//         currentSlide--;
//         updateSlider();
//     }
// });

// nextBtn.addEventListener('click', () => {
//     if (currentSlide < totalSlides - 1) {
//         currentSlide++;
//         updateSlider();
//     }
// });

// // Dots Navigation
// dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         currentSlide = index;
//         updateSlider();
//     });
// });

// // Initialize
// updateSlider();


{/* // ******************************************************************************* */ }



// ***

document.querySelectorAll(".arro-button").forEach((button) => {
    button.addEventListener("click", function () {
        const performanceData = this.closest(".performance-section").querySelector(".open-Performance-data");
        performanceData.classList.toggle("hidden");
    });
});


{/* // ******************************************************************************** */ }

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}






// second page 

function handleTabClick(event, tabId) {
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('#tabs button');
    buttons.forEach((btn) => btn.classList.remove('bg-[#1A80F8]', 'text-white', 'rounded-md'));

    // Add active class to the clicked button
    event.target.classList.add('bg-[#1A80F8]', 'text-white', 'rounded-md');

    // Hide all tab content
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach((content) => content.classList.add('hidden'));

    // Show the corresponding tab content
    const activeTab = document.getElementById(tabId);
    activeTab.classList.remove('hidden');

}


// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('info').classList.remove('hidden');
// });


//    *******************************************



// mobile series slider js



// const series = document.getElementById("series");
// const leftArrow = document.getElementById("left-arrow");
// const rightArrow = document.getElementById("right-arrow");

// // State variables
// let currentIndex = 0;

// // Update series and buttons
// function updateseries() {
//     const itemWidth = series.children[0].offsetWidth + 12; // Image width + gap
//     series.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

//     // Toggle buttons visibility
//     leftArrow.style.display = currentIndex > 0 ? "block" : "none";
//     rightArrow.style.display = currentIndex < series.children.length - 3 ? "block" : "none";
// }

// // Arrow click events
// leftArrow.addEventListener("click", () => {
//     if (currentIndex > 0) {
//         currentIndex--;
//         updateseries();
//     }
// });

// rightArrow.addEventListener("click", () => {
//     if (currentIndex < series.children.length - 3) {
//         currentIndex++;
//         updateseries();
//     }
// });

// // Initial state
// updateseries();


// mobile series slider js




// team tabling js ----------------------------------------

// document.addEventListener('DOMContentLoaded', () => {
//     const buttons = document.querySelectorAll('.team-btn');
//     const contents = document.querySelectorAll('.team-content');

//     // Function to handle button clicks
//     function handleButtonClick(event) {
//         const targetId = event.currentTarget.dataset.target;

//         // Remove active class from all buttons
//         buttons.forEach(btn => btn.classList.remove('bg-[#ecf2fd]', 'rounded-md', 'text-[#1a80f8]'));
//         buttons.forEach(btn => btn.classList.add('text-[#394351]'));

//         // Add active class to the clicked button
//         event.currentTarget.classList.add('bg-[#ecf2fd]', 'rounded-md', 'text-[#1a80f8]');

//         // Hide all contents
//         contents.forEach(content => content.classList.add('hidden'));

//         // Show the targeted content
//         document.getElementById(targetId).classList.remove('hidden');
//     }

//     // Add event listeners to all buttons
//     buttons.forEach(button => {
//         button.addEventListener('click', handleButtonClick);
//     });

//     // Ensure the first button is active on load
//     buttons[3].click();


// });




// team tabling js ----------------------------------------

// document.addEventListener('DOMContentLoaded', () => {
//     const buttons = document.querySelectorAll('.state-btn');
//     const contents = document.querySelectorAll('.state-content');

//     // Function to handle button clicks
//     function handleButtonClick(event) {
//         const targetId = event.currentTarget.dataset.target;

//         // Remove active class from all buttons
//         buttons.forEach(btn => btn.classList.remove('bg-[#ecf2fd]', 'rounded-md', 'text-[#1a80f8]'));
//         buttons.forEach(btn => btn.classList.add('text-[#394351]'));

//         // Add active class to the clicked button
//         event.currentTarget.classList.add('bg-[#ecf2fd]', 'rounded-md', 'text-[#1a80f8]');

//         // Hide all contents
//         contents.forEach(content => content.classList.add('hidden'));

//         // Show the targeted content
//         document.getElementById(targetId).classList.remove('hidden');
//     }

//     // Add event listeners to all buttons
//     buttons.forEach(button => {
//         button.addEventListener('click', handleButtonClick);
//     });

//     // Ensure the first button is active on load
//     buttons[0].click();


// });




// slider js ---------------------------------------------------------------------------


document.querySelectorAll('.cust-slider-container').forEach(container => {
    const slider = container.querySelector('.cust-slider');
    const slides = container.querySelectorAll('.cust-slide');
    const prevBtn = container.querySelector('.cust-prev-btn');
    const nextBtn = container.querySelector('.cust-next-btn');
    const dots = container.querySelectorAll('.dot');

    let currentIndex = 0;

    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        // Update the active dot
        dots.forEach(dot => dot.classList.remove('bg-blue-500'));
        dots[currentIndex].classList.add('bg-blue-500');
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length; // Next slide
        updateSliderPosition();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Prev slide
        updateSliderPosition();
    });

    // Click event on dots
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentIndex = parseInt(dot.getAttribute('data-index')); // Set currentIndex based on clicked dot
            updateSliderPosition();
        });
    });

    updateSliderPosition(); // Initialize the slider position
});



// slider js ---------------------------------------------------------------------------



// function showData(selected) {
//     // Remove active styles and hide all data
//     document.querySelectorAll("[class*='suide-pera-']").forEach((element) => {
//         element.classList.remove("bg-[#1A80F8]", "text-white");
//         element.classList.add();
//     });
//     document.querySelectorAll("[class*='suide-pera-'][class*='-data']").forEach((element) => {
//         element.classList.add("hidden");
//     });

//     // Add active styles to selected button
//     document.querySelector(`.suide-pera-${selected}`).classList.remove("bg-gray-300", "text-black");
//     document.querySelector(`.suide-pera-${selected}`).classList.add("bg-[#1A80F8]", "text-white");

//     // Show selected data
//     document.querySelector(`.suide-pera-${selected}-data`).classList.remove("hidden");
// }

// // Ensure "All" is selected by default
// showData('all');