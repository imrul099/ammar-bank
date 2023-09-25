document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-mail');
    const email = emailField.value;
    
    const userPassword = document.getElementById('user-pass');
    const password = userPassword.value;
    
    // DANGER: DONT VERIFY EMAIL AND PASSWORD ON THE CLINENT SIDE!!!!
    // step-4 verify the password and email....
    if(email === 'jannatahmed@gmail.com' && password === 'tmikamon'){
        window.location.href = 'bank.html'
    }
    else{
        alert('Sorry, Wrong Information!!!')
    }
})