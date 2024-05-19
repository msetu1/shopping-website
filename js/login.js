// login section 
document.getElementById('btn-submit').addEventListener('click', function () {
    const inputEmail = document.getElementById('input-email');
    const email = inputEmail.value;


    const inputPassword = document.getElementById('input-password');
    const password = inputPassword.value;

    if (email === 'msetu5763@gmail.com' && password === '24685') {
        window.location.href = 'product.html';
    }
    else {
        alert('please provide me valid information')
    }
})