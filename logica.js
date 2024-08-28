alert("Recuerda que no se aceptan mayúsculas y caracteres especiales");

function asignarTextoElemento() {


    var textareaDerecho = document.getElementById('desencriptar');
    textareaDerecho.classList.add('oculto');

    let textoAcifrar = document.getElementById('encriptar').value;


     if(textoAcifrar !== textoAcifrar.toUpperCase()) {
    // Encriptar el texto
    textoAcifrar = textoAcifrar.replace(/e/g, 'enter')
                              .replace(/i/g, 'imes')
                              .replace(/a/g, 'ai')
                              .replace(/o/g, 'ober')
                              .replace(/u/g, 'ufat');

    // Actualiza el contenido del textarea de desencriptar
    document.getElementById("desencriptar").value = textoAcifrar;
    
    // Muestra el resultado en la consola
    console.log(textoAcifrar);
    
    // Limpia la caja de entrada
    limpiarCaja();

 } else{

    alert('No se aceptan Mayusculas')
 }

}



function limpiarCaja() {
    let valorCaja = document.querySelector("#encriptar");
    valorCaja.value = "";
}




function descifrar() {
    // Obtén el valor del textarea
    let texto = document.getElementById("encriptar").value;

    // Verifica que el valor sea una cadena
    if (typeof texto === 'string') {
        // Realiza los reemplazos para desencriptar
        texto = texto.replace(/enter/g, "e")
                     .replace(/imes/g, "i")
                     .replace(/ai/g, "a")
                     .replace(/ober/g, "o")
                     .replace(/ufat/g, "u");

        // Muestra el texto desencriptado en el textarea de resultado
        document.getElementById("desencriptar").value = texto;
        limpiarCaja()
        
    } else {
        alert ("El valor de texto no es una cadena");
    }

}


    function copiar () {

        let copiarTexto = document.getElementById("desencriptar");
        copiarTexto.select();
        copiarTexto.setSelectionRange(0,99999);
    
    
        navigator.clipboard.writeText(copiarTexto.value);
    
      //  alert(`El texto copiado es ${copiarTexto}`);
    
    
    }
   
      
      
      
    


