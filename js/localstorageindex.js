const form = document.getElementById('reservationForm');
const name = document.getElementById('name');
const ddate = document.getElementById('ddate');
const nnumber = document.getElementById('nnumber');

form.addEventListener('submit', e => {
  e.preventDefault();

  localStorage.setItem('name', name.value);
  localStorage.setItem('email', email.value);
  // localStorage.setItem('address', address.value);
  localStorage.setItem('ddate', ddate.value);
  localStorage.setItem('nnumber', nnumber.value);

  window.location.href = 'book.html';
});