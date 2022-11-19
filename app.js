// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********* navbar links *****************

const button = document.querySelector('.nav-toggle')
const nav = document.querySelector('.links-container')


// ********** set date ************
const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()

// ********** close links ************
const links = document.querySelector('.links')

button.addEventListener('click', () =>{
  // nav.classList.toggle('show-links')
  const navHeight = nav.getBoundingClientRect().
  height
  const linksHeight = links.getBoundingClientRect().
  height

  if(navHeight === 0){
    nav.style.height = `${linksHeight}px`
  }
 else{
    nav.style.height = 0;
 }
})

// ********** fixed navbar ************
const navbar = document.getElementById('nav')
const toplink = document.querySelector('.top-link')

window.addEventListener('scroll', () =>{
  const scrollHeight = window.pageYOffset
  const navHeight = navbar.getBoundingClientRect().height

  if(scrollHeight > navHeight){
    navbar.classList.add('fixed-nav')
  }
  else{
    navbar.classList.remove('fixed-nav')
  }

  //top-links

  if(scrollHeight > 500){
    toplink.classList.add('show-link')
  }
  else{
    toplink.classList.remove('show-link')
  }

})


// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll('.scroll-link')


scrollLinks.forEach((link) =>{
 link.addEventListener('click', (e) =>{
  e.preventDefault()
  const id = e.currentTarget.getAttribute("href").slice(1)
  const element = document.getElementById(id)
  const navHeight = navbar.getBoundingClientRect().height
  const containerHeight = nav.getBoundingClientRect().height
  const fixedNav = navbar.classList.contains("fixed-nav") 
  let position = element.offsetTop - navHeight
  
  if(!fixedNav){
    position = position - navHeight
  }

  if(navHeight > 82){
    position = position + containerHeight
  }

  window.scrollTo({
    left: 0,
    top: position
  })
  nav.style.height = 0
 })
})
