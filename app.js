

function validacion(){
    var expreg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var correo = document.getElementById('correo')

    if(expreg.test(correo.value)){
        console.log('valido')
    }else{
        console.log('invalido')
    }

}
