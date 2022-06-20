// let hambx = document.querySelector('.hambx');
// let divMenb = document.querySelector('.menb');
// hambx.addEventListener('click',function(){
//     let ulMenb =document.createElement('ul');
//     let liMenb = document.createElement('li');
//     let aMenb = document.createElement('a');
//     aMenb.textContent = 'Portfolio';
//     liMenb.appendChild(aMenb);
//     aMenb.textContent = 'About';
//     liMenb.appendChild(aMenb);
//     aMenb.textContent = 'Contact';
//     liMenb.appendChild(aMenb);
//     ulMenb.appendChild(liMenb);
//     divMenb.appendChild(ulMenb);
//     console.log('hamburger');
// });

const hambx = document.querySelector('.hambx');
const close = document.querySelector('.close');
const nav = document.querySelector('.navvme');
const navLink = document.querySelectorAll('.navlinks');
hambx.addEventListener('click', () => {
  nav.classList.add('active');
});

close.addEventListener('click', () => {
  nav.classList.remove('active');
});

navLink.forEach((element) => element.addEventListener('click', () => {
  nav.classList.remove('active');
}));
