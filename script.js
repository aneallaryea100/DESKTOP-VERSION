// variables
const hambx = document.querySelector('.hambx');
const close = document.querySelector('.close');
const nav = document.querySelector('.navvme');
const navLink = document.querySelectorAll('.navlinks');
// const allEsdd = document.querySelectorAll('.esdd');

/** **************hamburger actions****************** */
hambx.addEventListener('click', () => {
  nav.classList.add('active');
});

close.addEventListener('click', () => {
  nav.classList.remove('active');
});

navLink.forEach((element) => element.addEventListener('click', () => {
  nav.classList.remove('active');
}));

/** ************** Data storage ************** */
const data = [
  {
    dataId: 'dd1',
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImgBig: 'assets/image/firzz.png',
    featuredImgSmall: 'assets/image/snapsmall.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveVersion: 'https://aneallaryea100.github.io/Portfolio/',
    linkSource: 'https://github.com/aneallaryea100/Portfolio',
    textModal: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
  {
    dataId: 'dd2',
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImgBig: 'assets/image/firzz.png',
    featuredImgSmall: 'assets/image/snapsmall.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveVersion: 'https://aneallaryea100.github.io/Portfolio/',
    linkSource: 'https://github.com/aneallaryea100/Portfolio',
    textModal: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
  {
    dataId: 'dd3',
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImgBig: 'assets/image/firzz.png',
    featuredImgSmall: 'assets/image/snapsmall.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveVersion: 'https://aneallaryea100.github.io/Portfolio/',
    linkSource: 'https://github.com/aneallaryea100/Portfolio',
    textModal: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
  {
    dataId: 'dd4',
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImgBig: 'assets/image/firzz.png',
    featuredImgSmall: 'assets/image/snapsmall.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveVersion: 'https://aneallaryea100.github.io/Portfolio/',
    linkSource: 'https://github.com/aneallaryea100/Portfolio',
    textModal: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
  {
    dataId: 'dd5',
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImgBig: 'assets/image/snapbig.png',
    featuredImgSmall: 'assets/image/firzz.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveVersion: 'https://aneallaryea100.github.io/Portfolio/',
    linkSource: 'https://github.com/aneallaryea100/Portfolio',
    textModal: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
  {
    dataId: 'dd6',
    name: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImgBig: 'assets/image/firzz.png',
    featuredImgSmall: 'assets/image/snapsmall.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveVersion: 'https://aneallaryea100.github.io/Portfolio/',
    linkSource: 'https://github.com/aneallaryea100/Portfolio',
    textModal: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
];

/** ****** email validation ********* */
const form = document.getElementById('form');
const email = document.getElementById('mail');
const errorMessage = document.querySelector('.error');

form.addEventListener('submit', (element) => {
  element.preventDefault();
  const emailValue = email.value.trim();
  if (emailValue !== emailValue.toLowerCase()) {
    errorMessage.innerText = 'Email must be lowercase***';
  } else {
    form.submit();
  }
});

/** ******************** local storage ***************** */
const textz = document.getElementById('name');
const textArea = document.getElementById('msg');
const mailWays = document.getElementById('mail');
form.addEventListener('input', () => {
  const inputData = {
    Name: textz.value,
    Email: mailWays.value,
    Area: textArea.value,
  };
  const collectData = JSON.stringify(inputData);
  localStorage.setItem('collectData', collectData);
});

function reachData() {
  if (localStorage.getItem('collectData')) {
    const realData = JSON.parse(localStorage.getItem('collectData'));
    textz.value = realData.Name;
    mailWays.value = realData.Email;
    textArea.value = realData.Area;
  }
}

reachData();

/** ***************************** midal body****************************** */
const bbdy = document.body;
const midal = document.createElement('div');
midal.setAttribute('id', 'myMidal');
midal.setAttribute('class', 'midalT');
bbdy.appendChild(midal);
// modal content
const midalContent = document.createElement('div');
midalContent.setAttribute('class', 'midal-content');
midal.appendChild(midalContent);
// midal head
const midalHead = document.createElement('div');
midalHead.setAttribute('class', 'midal-header');
midalContent.appendChild(midalHead);
// span close
const spanMidal = document.createElement('span');
midalHead.appendChild(spanMidal);
spanMidal.setAttribute('class', 'spanz');
spanMidal.innerHTML = '&times;';
// head title
const midalHt = document.createElement('h2');
midalHead.appendChild(midalHt);
// const textmidalHt = document.createTextNode('Modal Header');
midalHt.setAttribute('class', 'head8')
midalHt.innerHTML = 'Multi Post stories';
// technologies
const techL = document.createElement('ul');
midalHead.appendChild(techL);
techL.setAttribute('class', 'techkie');
const lteky = document.createElement('li');
techL.appendChild(lteky);
lteky.innerHTML = 'HTML';
lteky.setAttribute('class', 'techies');
const lteky1 = document.createElement('li');
techL.appendChild(lteky1);
lteky1.innerHTML = 'Bootstrap';
lteky1.setAttribute('class', 'techies');
const lteky2 = document.createElement('li');
techL.appendChild(lteky2);
lteky2.innerHTML = 'Ruby on rails';
lteky2.setAttribute('class', 'techies');
// title
// const titleDiv = document.createElement('div');
// titleDiv.setAttribute('class', 'headmod');
// midalHead.appendChild(titleDiv);
// const titTag = document.createElement('h5');
// titTag.setAttribute('class', 'modhtxt');
// const titText = document.createTextNode('fish');
// // elData.name
// titTag.appendChild(titText);
// titleDiv.appendChild(titTag);
// div image
const bigbody = document.createElement('div');
bigbody.setAttribute('class', 'bigbody');
midalContent.appendChild(bigbody);
const imgDiv = document.createElement('div');
imgDiv.setAttribute('class', 'bodymod');
bigbody.appendChild(imgDiv);
// image
const imgTag = document.createElement('img');
imgTag.setAttribute('class', 'tagimg1');
imgTag.setAttribute('id', 'snapbigs');
// imgTag.setAttribute('src', 'assets/images/snapbig.png');
imgTag.src = 'assets/image/snapbig.png';
imgDiv.appendChild(imgTag);
// image2
// const imgTag2 = document.createElement('img');
// imgTag2.setAttribute('class', 'tagimg2');
// // imgTag.setAttribute('src', 'assets/images/snapbig.png');
// imgTag2.src = 'assets/image/snapsmall.png';
// imgDiv.appendChild(imgTag2);
// text div
const textDiv = document.createElement('div');
textDiv.setAttribute('class', 'txtimg');
bigbody.appendChild(textDiv);
// text
const ptextTag = document.createElement('p');
ptextTag.setAttribute('class', 'loetxt');
ptextTag.innerHTML = ('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.');
// elData.textModal
// ptextTag.appendChild(ptext);
textDiv.appendChild(ptextTag);
// container link and src code
const divSrcLink = document.createElement('div');
divSrcLink.setAttribute('class', 'modbtns');
textDiv.appendChild(divSrcLink);
// links
const modalLiveDiv = document.createElement('div');
modalLiveDiv.setAttribute('class', 'madbtnx');
const modalLive = document.createElement('a');
modalLive.setAttribute('href', 'https://aneallaryea100.github.io/Portfolio');
modalLive.setAttribute('class', 'liveLink');
const textModalLive = document.createTextNode('See live');
const liveImg = document.createElement('img');
liveImg.setAttribute('src', 'assets/image/livecon.png');
modalLive.appendChild(textModalLive);
modalLive.appendChild(liveImg);
modalLiveDiv.appendChild(modalLive);
divSrcLink.appendChild(modalLiveDiv);
// source code
const srcode = document.createElement('div');
srcode.setAttribute('class', 'madbtnx');
const srclink = document.createElement('a');
srclink.setAttribute('class', 'srclink');
srclink.setAttribute('href', 'https://github.com/aneallaryea100/Portfolio');
const srctxt = document.createTextNode('See Source');
const srcImg = document.createElement('img');
srcImg.setAttribute('src', 'assets/image/gitsrc.png');
srclink.appendChild(srctxt);
srcode.appendChild(srclink);
srcode.appendChild(srcImg);
divSrcLink.appendChild(srcode);

// midal functions
// Get the modal
const errst = document.querySelectorAll('.erest');
// Get the <span> element that closes the modal
const span = document.getElementsByClassName('spanz')[0];
// When the user clicks the button, open the modal
errst.forEach((i) => {
  i.onclick = function () {
    console.log('call');
    midal.style.display = 'block';
  };
});
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  midal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === midal) {
    midal.style.display = 'none';
  }
};

/** *****************************separate cardss******************************* */
const wert = document.getElementById('cardSecs');

const createGridCards = (objTest) => {
  const divHse = document.createElement('div');
  divHse.setAttribute('class', 'divhse');
  const divhhd = document.createElement('div');
  divHse.appendChild(divhhd);
  divhhd.setAttribute('class', 'hhdiv');
  const ddelhed = document.createElement('h2');
  divHse.appendChild(ddelhed);
  ddelhed.setAttribute('class', 'head2');
  ddelhed.innerHTML = objTest.name;
  // text
  const ttlorem = document.createElement('p');
  ttlorem.setAttribute('class', 'rtex');
  ttlorem.innerHTML = objTest.description;
  divHse.appendChild(ttlorem);
  // list techs
  const hslist = document.createElement('ul');
  divHse.appendChild(hslist);
  hslist.setAttribute('class', 'listHse');
  const llul = document.createElement('li');
  llul.setAttribute('class', 'tyres');
  llul.innerHTML = 'HTML';
  hslist.appendChild(llul);
  const llul2 = document.createElement('li');
  hslist.appendChild(llul2);
  llul2.setAttribute('class', 'tyres');
  llul2.innerHTML = 'bootstrap';
  const llul3 = document.createElement('li');
  hslist.appendChild(llul3);
  llul3.setAttribute('class', 'tyres');
  llul3.innerHTML = 'Ruby';
  // button
  const btxx = document.createElement('button');
  btxx.setAttribute('class', 'erest');
  btxx.innerHTML = 'See Projects';
  divHse.appendChild(btxx);

  return divHse;
};

data.forEach((k, v) => {
  console.log('I am consoling ', k);
  wert.appendChild(createGridCards(k));
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('erest')) {
    // do something
    console.log('call');
    midal.style.display = 'block';
  }
});