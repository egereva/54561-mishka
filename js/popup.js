var btn = document.querySelector('.popup-open_btn');
var popup = document.querySelector('.popup');

if (btn) {
btn.addEventListener('click', function(evt) {
evt.preventDefault();
popup.classList.toggle('popup--active');

popup.addEventListener('click' ,function(evt) {
if (evt.target.classList.contains('popup--active')) {
  this.classList.toggle('popup--active');
}
});
});
}
