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