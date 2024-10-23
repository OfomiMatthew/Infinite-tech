

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

