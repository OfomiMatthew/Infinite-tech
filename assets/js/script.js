// show menu
const showMenu = (toggleId,navId)=>{
  const toggle = document.getElementById(toggleId)
  const nav = document.getElementById(navId)
  toggle.addEventListener('click',()=>{
    // show-menu class to nav menu
    nav.classList.toggle('show-menu')

    // show-icon class to show and hide menu icon
    toggle.classList.toggle('show-icon')
  })
}

showMenu('nav-toggle','nav-menu')

// ==== dropdown menu======

const dropdownItems = document.querySelectorAll('.dropdown__item')
dropdownItems.forEach((item)=>{
  const dropdownButton = item.querySelector('.dropdown__button')
  dropdownButton.addEventListener('click',()=>{
    const showDropdown = document.querySelector('.show-dropdown')
    toggleItem(item)
    if(showDropdown && showDropdown!== item){
      toggleItem(showDropdown)
    }
  })
})


// === display dropdown===
const toggleItem = (item)=>{
const dropdownContainer = item.querySelector('.dropdown__container')
if(item.classList.contains('show-dropdown')){
  dropdownContainer.removeAttribute('style')
  item.classList.remove('show-dropdown')
}else{
  dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
  item.classList.add('show-dropdown')
}

}

// ------- delete dropdown styles
const mediaQuery = matchMedia('(min-width:1118px)')
const dropdownContainer  = document.querySelectorAll('.dropdown__container')

// function to remove dropdown styles in mobile view
const removeStyle = ()=>{
  if(mediaQuery.matches){
    dropdownContainer.forEach((e)=>{
      e.removeAttribute('style')
    })
    dropdownItems.forEach((e)=>{
      e.classList.remove('show-dropdown')
    })
  }
}

addEventListener('resize',removeStyle)



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


// ==== PRE-LOADER FUNCTION ======
let loader = document.getElementById("preloader")

setTimeout(()=>{
  window.addEventListener("load",function(){
    loader.style.display = "none";
  })
},100)




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

