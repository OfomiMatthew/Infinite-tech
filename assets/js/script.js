// ======= NAVIGATION ======

document.getElementById('navToggle').addEventListener('click', function() {
  const navArea = document.getElementById('navArea');
  navArea.classList.toggle('nav-active');

  // Toggle the hamburger and close icons
  const hamburgerIcon = document.querySelector('.hamburger');
  const closeIcon = document.querySelector('.close');
  if (navArea.classList.contains('nav-active')) {
      hamburgerIcon.style.display = 'none';
      closeIcon.style.display = 'inline';
  } else {
      hamburgerIcon.style.display = 'inline';
      closeIcon.style.display = 'none';
  }
});



// === Scrolling Animation ====
const scrollers = document.querySelectorAll('.scroller')

if(!window.matchMedia("(prefers-reduced-motion:reduce)").matches){
  addAnimation()
}

function addAnimation(){
  scrollers.forEach(scroller=>{
    scroller.setAttribute("data-animated",true)
  })
}



// ==== AUTO-SWITCH HERO SECTION CARD ====

// Get all the radio inputs
const radios = document.querySelectorAll('input[type="radio"][name="slide"]');
let currentIndex = 0;
let autoSwitchInterval;

// Function to switch cards automatically
function autoSwitch() {
    autoSwitchInterval = setInterval(() => {
        // Uncheck the current radio and move to the next one
        radios[currentIndex].checked = false;

        // Move to the next index, and if it's the last one, start from the beginning
        currentIndex = (currentIndex + 1) % radios.length;

        // Check the next radio
        radios[currentIndex].checked = true;
    }, 5000); // Change slide every 5 seconds
}

// Start the auto-switching when the page loads
window.onload = () => {
    autoSwitch();
};

// Stop auto-switching when a card is clicked and restart after a while
radios.forEach((radio) => {
    radio.addEventListener('click', () => {
        // Stop auto-switching
        clearInterval(autoSwitchInterval);

        // Restart auto-switching after 10 seconds (to give users time to interact)
        setTimeout(() => {
            autoSwitch();
        }, 10000);
    });
});



// ===== PRICE RANGE FEATURE ======

document.addEventListener('DOMContentLoaded', function() {
  const solutionType = document.getElementById('solution-type');
  const priceRangeContainer = document.getElementById('price-range-container');
  const priceRangeInput = document.getElementById('price-range');
  const priceDisplay = document.getElementById('price-display');

  // Price ranges for each solution type
  const priceRanges = {
    web: { min: 500, max: 5000, step: 100 },
    mobile: { min: 1000, max: 7000, step: 100 },
    desktop: { min: 1500, max: 10000, step: 100 }
  };

  // Display price when range input changes
  priceRangeInput.addEventListener('input', function() {
    priceDisplay.textContent = `${priceRangeInput.value} USD`;
  });

  // Update price range input based on selected solution type
  solutionType.addEventListener('change', function() {
    const selectedSolution = solutionType.value;

    if (selectedSolution && priceRanges[selectedSolution]) {
      // Set the range attributes based on the selected solution
      const { min, max, step } = priceRanges[selectedSolution];
      priceRangeInput.min = min;
      priceRangeInput.max = max;
      priceRangeInput.step = step;
      priceRangeInput.value = min; // Set initial value to the minimum

      // Update display and show the price range container
      priceDisplay.textContent = `${min} USD`;
      priceRangeContainer.style.display = 'block';
    } else {
      // Hide price range container if no solution selected
      priceRangeContainer.style.display = 'none';
    }
  });
});


// === FAQ DROPDOWN PART ==
const faqs = document.querySelectorAll('.faq')
faqs.forEach((faq)=>{
  faq.addEventListener('click',()=>{
    faq.classList.toggle('active');
  })
})

