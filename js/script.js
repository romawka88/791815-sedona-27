var link = document.querySelector(".sedona-search");
var popup = document.querySelector(".modal-search");
var close = popup.querySelector(".sedona-search");
var form = popup.querySelector("form");
var adult = popup.querySelector("[name=amount-of-adult]");
var children = popup.querySelector("[name=amount-of-children]");
var isStorageSupport = true;
var storage = "";
try {
  storage = localStorage.getItem("adult");
} catch (err) {
  isStorageSupport = false;
}
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  if (storage) {
    login.value = storage;
    children.focus();
  } else {
    adult.focus();
  }
});
form.addEventListener("submit", function (evt) {
  if (!adult.value || !children.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adult", adult.value);
    }
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});/*
const searchBtn = document.querySelector('.sedona-search');
const searchForm = document.querySelector('.hotels-search');
const inputIn = document.querySelector('.search-fields-1');
const inputOut = document.querySelector('.search-fields-2');
const submitBtn = document.querySelector('.form-search');
const inputAdult = document.querySelector('.search-fields-3');
const inputChild = document.querySelector('.search-fields-4');
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
const searchBtn = document.querySelector('.sedona-search');
const searchForm = document.querySelector('.hotels-search');
const inputIn = document.querySelector('.search-fields-1');
const inputOut = document.querySelector('.search-fields-2');
const submitBtn = document.querySelector('.form-search');
const inputAdult = document.querySelector('.search-fields-3');
const inputChild = document.querySelector('.search-fields-4');
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
})*/