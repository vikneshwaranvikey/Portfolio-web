'use strict';
/*
let close = document.querySelector('.close-modal');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let modals = document.querySelectorAll('.show-modal');
console.log(modals.length);

let openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

let closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < modal.length; i++) {
  console.log(modals[i]);

  modals[i].addEventListener('click', openModal);
}

close.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if ((e.key === 'Escape') & !modal.classList.contains) {
    closeModal();
  }
});
*/
//----------ONLY click function-----------------------------------------------------------------------
/*
let openModal = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');
let closeModal = document.querySelector('.close-modal');

let modalopen = function () {
  modal.classList.remove('hidden');
};

let modalClose = function () {
  modal.classList.add('hidden');
};

closeModal.addEventListener('click', modalClose);

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener('click', modalopen);
}
*/
//-----------This added background blur----------------------------------------------------------------------------

let openModal = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');
let closeModal = document.querySelector('.close-modal');
let blurs = document.querySelector('.overlay');

let modalopen = function () {
  modal.classList.remove('hidden');
  blurs.classList.remove('hidden');
};

let modalClose = function () {
  modal.classList.add('hidden');
  blurs.classList.add('hidden');
};

closeModal.addEventListener('click', modalClose);

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener('click', modalopen);
}

document.addEventListener('keydown', function (event) {
  console.log(event.key);
  if (event.key === 'Backspace' && !modal.classList.contains('hidden')) {
    modalClose();
  }
});
