// Defining 'All Categories' Selections
var select = document.getElementById("allCategories");
var selections = ["Dairy", "Alcohol", "Clothing & Beauty", "Pet Foods and Toys", "Fast Food", "Baking Material", "Vegetables", "Fresh Seafood", "Noodles", "Ice Cream"];
for(var i = 0; i < selections.length; i++){
    var option = document.createElement("OPTION"),
    txt = document.createTextNode(selections[i]);
    option.appendChild(txt);
    option.setAttribute("value", selections[i]);
    select.insertBefore(option, select.lastChild);
}


// Setting #HeaderTopSpans Text Appearance
let headerTopSpansIndex = 0;
const texts = document.querySelectorAll('#headerTopSpans span');

function updateTopSpans() {
    texts[headerTopSpansIndex].style.display = 'none';
    headerTopSpansIndex = (headerTopSpansIndex + 1) % texts.length;
    texts[headerTopSpansIndex].style.display = 'block';
}

setInterval(updateTopSpans, 2000); // Change slide every 5 seconds

// Slider for #upBanner section
const prevBtn = document.querySelector('.prev'); // Select previous button if included
const nextBtn = document.querySelector('.next'); // Select next button if included

const upBanner = document.getElementById('upBanner');
const upBannerSlider2 = document.getElementById('upBannerSlider2');

upBannerSlider2.style.display = 'none';

const slider = [
  {
    imageUrl: "url('/src/images/main/upbanner/slider-1.png')",
    contentSelector: '#upBannerSlider1',
  },
  {
    imageUrl: "url('/src/images/main/upbanner/slider-2.png')",
    contentSelector: '#upBannerSlider2',
  },
];

let currentSlide = 0;

function changeSlide(direction) {
    if (direction === 'prev') {
      currentSlide = (currentSlide - 1 + slider.length) % slider.length;
    } else if (direction === 'next') {
      currentSlide = (currentSlide + 1) % slider.length;
    }
  
    const currentSlideData = slider[currentSlide];
    upBanner.style.backgroundImage = currentSlideData.imageUrl;
  
    // Select content container based on current slide data
    const contentContainer = document.querySelector(currentSlideData.contentSelector);
    contentContainer.style.display = 'block'; // Show the active content container
  
    // Hide all other content containers (optional for smoother transition)
    slider.forEach((slideData, index) => {
      if (index !== currentSlide) {
        const otherContainer = document.querySelector(slideData.contentSelector);
        otherContainer.style.display = 'none';
      }
    });
  }
  
// Add event listeners to buttons (if included)
if (prevBtn) {
  prevBtn.addEventListener('click', () => changeSlide('prev'));
}
if (nextBtn) {
  nextBtn.addEventListener('click', () => changeSlide('next'));
}


// Slider for #featuredCategories section using swiper.js
const swiper = new Swiper('#featuredCategoriesCards', {
  slidesPerView: 'auto', // Adjust this value to control how many slides are visible at a time
  loop: true, // Enable endless scrolling
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});
