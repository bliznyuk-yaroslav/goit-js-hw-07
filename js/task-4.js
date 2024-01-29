const registerForm = document.querySelector(".login-form");


function handleSubmit(event){
    event.preventDefault();
   const emailInput = registerForm.elements.email;
   const passwordInput = registerForm.elements.password;
   const emailValue = emailInput.value.trim();
   const passwordValue = passwordInput.value.trim();

if(emailValue === "" || passwordValue ===""){
    alert("All form fields must be filled in");
    return;
}
else{  
    const result ={
        email: emailValue,
    password: passwordValue, }
   console.log(result);
}


registerForm.reset();
}
registerForm.addEventListener("submit", handleSubmit);
