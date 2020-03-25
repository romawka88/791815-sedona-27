const searchBtn = document.querySelector('.sedona-search');
const searchForm = document.querySelector('.hotels-search');
const inputIn = document.querySelector('.search-fields-1');
const inputOut = document.querySelector('.search-fields-2');
const submitBtn = document.querySelector('.form-search');
const inputAdult = document.querySelector('.search-fields-3');
const inputChild = document.querySelector('.search-fields-4');
var isStorageSupport = true;
var storage = '';
try {
  storage = localStorage.getItem('inputAdult');
} catch (err) {
  isStorageSupport = false;
}
searchBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  searchForm.classList.toggle('modal-show');
  if (storage) {
    inputAdult.value = storage;
    inputChild.focus();
  } else {
    inputAdult.focus();
  }
});
searchBtn.addEventListener('click', function slideDown() {
  searchForm.classList.remove('shake');
  searchForm.classList.toggle('hidden');
  searchForm.classList.add('slide-down')
});
submitBtn.addEventListener('click', function shake(e) {
  if (inputIn.value === '' || inputOut.value === '' || (inputAdult.value === '' && inputChild.value === '')) {
    e.preventDefault();
    searchForm.classList.remove('shake');
    searchForm.offsetWidth = searchForm.offsetWidth;
    searchForm.classList.remove('slide-down');
    searchForm.classList.add('shake')
  }
})
window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('modal-show')) {
      popup.classList.remove('modal-show');
      popup.classList.remove('shake');
    }
  }
});