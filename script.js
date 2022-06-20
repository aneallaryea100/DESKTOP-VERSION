let hambx = document.querySelector('.hambx');
let divMenb = document.querySelector('.menb');
hambx.addEventListener('click',function(){
    let ulMenb =document.createElement('ul');
    let liMenb = document.createElement('li');
    let aMenb = document.createElement('a');
    aMenb.textContent = 'Portfolio';
    aMenb.textContent = 'About';
    aMenb.textContent = 'Contact';
    liMenb.appendChild(aMenb);
    ulMenb.appendChild(liMenb);
    divMenb.appendChild(ulMenb);
    console.log('hamburger');
});