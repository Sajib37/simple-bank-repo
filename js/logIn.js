document.getElementById('login-btn').addEventListener('click', function () {
    
    const email = document.getElementById('emailText').value;
    const password = document.getElementById('passwordText').value;
    document.getElementById('emailText').value = "";
    document.getElementById('passwordText').value="";
    if (email === 'sajibhasan9811@gmail.com' && password === "secret") {
        window.location.href = 'account.html';
    }
    else {
        alert('Invalid password Or Email')
    }
})