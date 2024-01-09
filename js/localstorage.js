const form = document.getElementById('form');
          const name = document.getElementById('name');
          const email = document.getElementById('email');
          const address = document.getElementById('address');

          form.addEventListener('submit', e => {
            e.preventDefault();

            localStorage.setItem('name', name.value);
            localStorage.setItem('email', email.value);
            localStorage.setItem('address', address.value);

            window.location.href = 'action.html';
        });