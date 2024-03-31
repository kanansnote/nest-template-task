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

//
let marqueeIndex = 0;
const texts = document.querySelectorAll('#marquee span');

function updateMarquee() {
    texts[marqueeIndex].style.display = 'none';
    marqueeIndex = (marqueeIndex + 1) % texts.length;
    texts[marqueeIndex].style.display = 'block';
}

setInterval(updateMarquee, 5000); // Change slide every 5 seconds


// Making slide for #upBanner content

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
  // ... Add more slider objects here
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
