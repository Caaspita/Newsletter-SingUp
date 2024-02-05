document.getElementById("form").addEventListener("submit", function(event) {
    // Evitar el reinicio de la página
    event.preventDefault();

});
function validacion(){
    var email = document.getElementById('correo');
    var expemail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const error = document.getElementById('error');
    const page1 = document.getElementById('content');
    const page2 = document.getElementById('success-content');

    if(expemail.test(email.value)){
        console.log('valido')
        page1.classList.add('ocultar')
        page2.classList.remove('ocultar');
    
    }else{
        console.log('falso')
        error.classList.remove('ocultar');
        email.classList.add('error-input');
    }
}