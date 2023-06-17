/*
let modals = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');
let closes = document.querySelector('.close-modal');
let overlays = document.querySelector('.overlay');

let openModal = function () {
  modal.classList.remove('hidden');
  overlays.classList.remove('hidden');
};

let closeModal = function () {
  modal.classList.add('hidden');
  overlays.classList.add('hidden');
};

for (let i = 0; i < modals.length; i++) {
  modals[i].addEventListener('click', openModal);
}

closes.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if ((e.key === 'Escape') & !modal.classList.contains) {
    closeModal();
  }
});
*/
