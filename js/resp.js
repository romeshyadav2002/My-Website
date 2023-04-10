burger = document.querySelector('.burger')
leftnav = document.querySelector('.leftnav')
rightnav = document.querySelector('.rightnav')
header = document.querySelector('.header1')


burger.addEventListener('click',() =>{
   leftnav.classList.toggle('v-nav');
   rightnav.classList.toggle('v-nav');
   header.classList.toggle('h-nav')
})