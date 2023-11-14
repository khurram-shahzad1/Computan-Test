var modalBtns = document.querySelectorAll('.openModalBtn');
var modal = document.querySelector('.modal');
var modalContent = document.getElementById('modalContent');
var closeBtn = document.querySelector('.close');

modalBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    var content = btn.getAttribute('data-modal-content');
    modalContent.textContent = content;
    modal.style.display = 'block';
  });
});

closeBtn.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
